import { BrowserProvider, Contract } from "ethers";

export async function getContract() {
  const provider = new BrowserProvider(window.ethereum);
  const signer = await provider.getSigner();

  const abi = [
    "function setMessage(string _msg)",
    "function getMessage() view returns (string)"
  ];

  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

  return new Contract(contractAddress, abi, signer);
}
