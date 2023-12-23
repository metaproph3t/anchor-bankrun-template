import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import { Picobook } from "../target/types/picobook";

describe("picobook", () => {
  // Configure the client to use the local cluster.
  anchor.setProvider(anchor.AnchorProvider.env());

  const program = anchor.workspace.Picobook as Program<Picobook>;

  it("Is initialized!", async () => {
    // Add your test here.
    try {
      const tx = await program.methods.initialize().rpc();
      console.log("Your transaction signature", tx);
    } catch (err) {
      console.error(err);
    }

  });
});
