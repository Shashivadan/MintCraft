import * as web3 from "@solana/web3.js";
import * as token from "@solana/spl-token";

export async function buildCreateATA({
  payer,
  mint,
}: {
  payer: web3.PublicKey;
  mint: web3.PublicKey;
}) {
  const getATA = await token.getAssociatedTokenAddress(mint, payer);

  const transtion = new web3.Transaction().add(
    token.createAssociatedTokenAccountInstruction(payer, getATA, payer, mint),
  );
  return { transtion, getATA };
}
