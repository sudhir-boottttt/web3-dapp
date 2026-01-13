import express from "express";
import { createEthWallet } from "./crypto/wallet.js";
import { keccakHash } from "./crypto/keccak.js";
import { signTx } from "./crypto/sign.js";

const app = express();
app.use(express.json());

app.get("/wallet", (_, res) => {
  res.json(createEthWallet());
});

app.post("/hash", (req, res) => {
  res.json({ hash: keccakHash(req.body.message) });
});

app.post("/sign", async (req, res) => {
  const signedTx = await signTx(req.body.privateKey);
  res.json({ signedTx });
});

app.listen(3000, () =>
  console.log("🚀 Backend running on http://localhost:3000")
);