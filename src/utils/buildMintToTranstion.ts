import * as web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

export async function buildMintToTransactions({
  authority,
  mint,
  amount,
  desnation,
}: {
  authority: web3.PublicKey;
  mint: web3.PublicKey;
  amount: number;
  desnation: web3.PublicKey;
}) {
  const transactions = new web3.Transaction().add(
    token.createMintToInstruction(mint, desnation, authority, amount),
  );
  return transactions;
}
