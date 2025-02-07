"use clinet";

import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React from "react";
import { Button } from "./ui";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";

export default function AirDrop() {
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  const handleAirdrop = async () => {
    try {
      if (!publicKey) {
        console.log("place connection to wallet");
        return;
      }

      const [latestBlockhash, signatur] = await Promise.all([
        connection.getLatestBlockhash(),
        connection.requestAirdrop(publicKey, 4 * LAMPORTS_PER_SOL),
      ]);

      const confirmationResult = await connection.confirmTransaction(
        {
          signature: signatur,
          ...latestBlockhash,
        },
        "confirmed",
      );

      if (confirmationResult.value.err === null) {
        alert("Airdrop was confirmed!");
      } else {
        alert("Airdrop failed to confirm");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onPress={handleAirdrop}>AirDrop</Button>
    </div>
  );
}
