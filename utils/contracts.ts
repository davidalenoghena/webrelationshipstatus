import { chain } from "@/app/chain";
import { client } from "@/app/client";
import { getContract } from "thirdweb";
import { CONTRACT_ABI } from "./contractABI";

const contractAddress = "0x0CD3c08A09b9745Af68D5763250731771B01Cee2";

export const contract = getContract({
    client: client,
    chain: chain,
    address: contractAddress,
    abi: CONTRACT_ABI,
});