import { Wallet, parseEther } from "ethers";

export async function signTx(privateKey) {
  const wallet = new Wallet(privateKey);

  const tx = {
    to: "0x000000000000000000000000000000000000dead",
    value: parseEther("0.001"),
    nonce: 0,
    gasLimit: 21000,
    gasPrice: parseEther("0.00000002"),
    chainId: 1
  };

  return await wallet.signTransaction(tx);
}