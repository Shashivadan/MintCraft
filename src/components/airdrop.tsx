"use client";

import { useConnection } from "@solana/wallet-adapter-react";
import React, { useState } from "react";
import { Button, Card, TextField, Select } from "./ui";
import { LAMPORTS_PER_SOL, PublicKey } from "@solana/web3.js";
import Image from "next/image";
import { toast as Toast } from "sonner";
import { Loader } from "lucide-react";

export const coins = [
  { id: 1, value: 0.5 },
  { id: 3, value: 3 },
  { id: 4, value: 4 },
  { id: 5, value: 5 },
];

export default function AirDrop() {
  const { connection } = useConnection();
  const [amount, setAmount] = useState(4);
  const [inputPublicKey, setInputPublicKey] = useState<undefined | string>();
  const [loading, setLoading] = useState(false);

  const handleAirdrop = async () => {
    try {
      setLoading(true);
      if (
        !inputPublicKey ||
        amount <= 0 ||
        inputPublicKey.length < 44 ||
        inputPublicKey === ""
      ) {
        Toast.error("Airdrop failed to confirm");
        return;
      }

      const latestBlockhash = await connection.getLatestBlockhash();
      const signature = await connection.requestAirdrop(
        new PublicKey(inputPublicKey),
        amount * LAMPORTS_PER_SOL
      );

      const confirmationResult = await connection.confirmTransaction(
        {
          signature: signature,
          ...latestBlockhash,
        },
        "confirmed"
      );

      if (confirmationResult.value.err === null) {
        Toast.success("Airdrop was confirmed!");
      } else {
        Toast.error("Airdrop failed to confirm");
      }
    } catch (error) {
      Toast.error((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-black text-white flex flex-col items-center p-4 md:p-8">
      <Image
        priority
        src="/sol.svg"
        alt="sol image"
        className="w-24 h-16 md:w-32 md:h-24"
        width={500}
        height={100}
      />
      <Card className="mt-3 py-7 px-3 w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3 bg-zinc-900/50 border-zinc-800">
        <div className="space-y-6 pt-6">
          <div>
            <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-2">
              Request Airdrop
            </h2>
            <p className="text-zinc-400 text-xs sm:text-sm md:text-base">
              Maximum of 2 requests every 8 hours
            </p>
          </div>

          <div className="">
            <div className="flex flex-col gap-2">
              <TextField
                aria-label="Public key input"
                aria-labelledby="publicKeyLabel"
                onChange={(e) => {
                  if (!e) return;
                  setInputPublicKey(e);
                }}
                className="w-full"
                label="Enter your Public key"
              />
              <Select
                aria-label="Airdrop amount selection"
                aria-labelledby="amountLabel"
                onSelectionChange={(e) => {
                  setAmount(e as number);
                }}
                defaultSelectedKey={4}
                className=""
              >
                <Select.Trigger />
                <Select.List className="" items={coins}>
                  {(item) => (
                    <Select.Option
                      id={item.value}
                      textValue={JSON.stringify(item.value)}
                    >
                      {item.value}
                    </Select.Option>
                  )}
                </Select.List>
              </Select>
            </div>

            <Button
              className="w-full mt-4 bg-zinc-700 hover:bg-zinc-600 text-xs sm:text-sm md:text-base"
              onPress={handleAirdrop}
            >
              {loading ? (
                <span className="flex gap-2 items-center justify-center">
                  <Loader className="animate-spin h-5 w-5 text-white" />
                  loading...
                </span>
              ) : (
                "Confirm Airdrop"
              )}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
