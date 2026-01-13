import { keccak256, toUtf8Bytes } from "ethers";

export function keccakHash(message) {
  return keccak256(toUtf8Bytes(message));
}