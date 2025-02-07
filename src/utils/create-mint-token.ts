import {
  createInitializeMintInstruction,
  getMinimumBalanceForRentExemptMint,
  MINT_SIZE,
  TOKEN_PROGRAM_ID,
} from "@solana/spl-token";
import {
  Connection,
  Keypair,
  PublicKey,
  SystemProgram,
  Transaction,
} from "@solana/web3.js";

export const createMintToken = async (
  connection: Connection,
  decimal: number,
  publicKey: PublicKey,
  feeAuthertiy: PublicKey | null,
) => {
  const lamports = await getMinimumBalanceForRentExemptMint(connection);
  const mintAcc = Keypair.generate();

  const transaction = new Transaction().add(
    SystemProgram.createAccount({
      fromPubkey: publicKey,
      lamports,
      newAccountPubkey: mintAcc.publicKey,
      space: MINT_SIZE,
      programId: TOKEN_PROGRAM_ID,
    }),
    createInitializeMintInstruction(
      mintAcc.publicKey,
      decimal,
      publicKey,
      feeAuthertiy,
    ),
  );

  return { transaction, mintAcc };
};
