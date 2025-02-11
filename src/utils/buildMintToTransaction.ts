import * as web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

export async function buildMintToTransactions({
  authority,
  mint,
  amount,
  destination,
}: {
  authority: web3.PublicKey;
  mint: web3.PublicKey;
  amount: number;
  destination: web3.PublicKey;
}) {
  const transactions = new web3.Transaction().add(
    token.createMintToInstruction(mint, destination, authority, amount)
  );

  return transactions;
}
