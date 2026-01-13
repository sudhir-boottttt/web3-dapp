import { useState } from "react";
import { getContract } from "./eth";

export default function App() {
  const [msg, setMsg] = useState("");
  const [stored, setStored] = useState("");

  async function connect() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  async function send() {
    const contract = await getContract();
    const tx = await contract.setMessage(msg);
    await tx.wait();
    alert("Transaction confirmed!");
  }

  async function read() {
    const contract = await getContract();
    const data = await contract.getMessage();
    setStored(data);
  }

  return (
    <div>
      <h1>🚀 Web3 Production dApp</h1>

      <button onClick={connect}>Connect MetaMask</button>

      <input
        placeholder="Enter message"
        onChange={(e) => setMsg(e.target.value)}
      />

      <button onClick={send}>Send TX</button>
      <button onClick={read}>Read Message</button>

      <p>Stored Message: {stored}</p>
    </div>
  );
}
