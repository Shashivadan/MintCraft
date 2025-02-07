"use Client";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import { Button } from "../ui";
import { createMintToken } from "@/utils/create-mint-token";
import { Keypair, PublicKey } from "@solana/web3.js";
import { buildCreateATA } from "@/utils/create-Ata";
import { buildMintToTransactions } from "@/utils/buildMintToTranstion";

export function CreateToken() {
  const connection = useConnection();
  const [MintkeyPair, setMintPublickey] = useState<Keypair>();
  const wallet = useWallet();
  const handleClick = async () => {
    if (!wallet.publicKey) return;
    const createMintTranstion = await createMintToken(
      connection.connection,
      9,
      wallet.publicKey,
      null,
    );
    try {
      const sign = await wallet.sendTransaction(
        createMintTranstion.transaction,
        connection.connection,
        {
          signers: [createMintTranstion.mintAcc],
        },
      );
      console.log("signature", sign);
      await connection.connection.confirmTransaction(sign, "confirmed");
      setMintPublickey(createMintTranstion.mintAcc);
      console.log(createMintTranstion.mintAcc, "  ", MintkeyPair);
      const stmint = createMintTranstion.mintAcc.publicKey.toBase58();
      console.log("mint token", stmint);
      return createMintTranstion.mintAcc;
    } catch (e) {
      console.log(e);
    }
  };

  const handleCreateATA = async () => {
    try {
      if (!wallet.publicKey) return;
      // if (!MintkeyPair) return;

      const transaction = await buildCreateATA({
        mint: new PublicKey("FqEF92VU63wjq3mLa2eQ2yaaNKedTtwFJ8kjMcXgZDBd"),
        payer: wallet.publicKey,
      });
      const sign = await wallet.sendTransaction(
        transaction.transtion,
        connection.connection,
      );
      await connection.connection.confirmTransaction(sign, "confirmed");
      console.log("ata transtion", transaction.transtion);
      console.log("ata is", transaction.getATA.toBase58());
    } catch (e) {
      console.log(e);
    }
  };

  const mintTO = async () => {
    try {
      if (!wallet.publicKey) return;
      const transaction = await buildMintToTransactions({
        authority: wallet.publicKey,
        mint: new PublicKey("FqEF92VU63wjq3mLa2eQ2yaaNKedTtwFJ8kjMcXgZDBd"),
        amount: 22,
        desnation: new PublicKey(
          "7ZNzK4Ek6Je8q8TtD9XnbQ2rYv1os7W7xAc7hJpfpUzm",
        ),
      });
      const sign = await wallet.sendTransaction(
        transaction,
        connection.connection,
      );
      await connection.connection.confirmTransaction(sign, "confirmed");
      console.log("it complete");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Button onPress={() => handleClick()}>CreateToken</Button>
      <Button onPress={() => handleCreateATA()}>create a account</Button>
      <Button onPress={() => mintTO()}>added 22 balance supply</Button>
    </div>
  );
}
