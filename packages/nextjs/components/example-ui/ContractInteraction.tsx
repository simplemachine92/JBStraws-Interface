import { useEffect, useState } from "react";
import { CopyIcon } from "./assets/CopyIcon";
import { DiamondIcon } from "./assets/DiamondIcon";
import { HareIcon } from "./assets/HareIcon";
import { ethers } from "ethers";
import { MerkleTree } from "merkletreejs";
import { keccak256, pad, parseEther } from "viem";
import { useAccount } from "wagmi";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

/* Note: This example references an allow-list for the project that is stored on IPFS in order to generate the proof  
  needed for transactions.
*/

// Convert address to bytes32 without hashing
const addressToLeaf = (address: string) => {
  const addressWithoutPrefix = ethers.utils.getAddress(address).slice(2); // remove '0x' prefix and get checksummed address
  const paddedAddress = "0".repeat(24) + addressWithoutPrefix; // pad to 32 bytes
  return Buffer.from(paddedAddress, "hex"); // convert to Buffer without hashing
};

export const ContractInteraction = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [newValue, setNewValue] = useState<number>(0);
  const [newArray, setNewArray] = useState<string[]>([]);
  const [root, setLocalRoot] = useState<`0x${string}`>();
  const [proof, setProof] = useState<string | null>(null);

  const { data: contractRoot } = useScaffoldContractRead({
    contractName: "DelegateContract",
    functionName: "root",
  });

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "PaymentTerminal",
    functionName: "pay",
    args: [
      1153n,
      parseEther(newValue?.toString()),
      "0x0000000000000000000000000000000000000000",
      address,
      0n,
      false,
      "TAKE MY MONEY",
      `0x${proof}`,
    ],
    value: `${newValue}`,
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { writeAsync: writeRoot, isLoading: isLoading2 } = useScaffoldContractWrite({
    contractName: "DelegateContract",
    functionName: "setRoot",
    args: [root],
    onBlockConfirmation: txnReceipt => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);

      fetch("/api/list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ leaves: newArray }),
      });
    },
  });

  const handleSubmitRoot = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const csv = formData.get("csv") as string;
    const array = csv.split(",");
    console.log("array", array);
    setNewArray(array);

    // Generate new leaves from the CSV input
    const leaves = array.map(addressToLeaf);
    const tree = new MerkleTree(leaves, keccak256, { sortPairs: true });
    setLocalRoot(`0x${tree.getRoot().toString("hex")}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      // Load projects allow list
      try {
        const response = await fetch(
          "https://white-suspicious-gibbon-427.mypinata.cloud/ipfs/QmdLTCXapgrnpwkbwhjyPfFputeyZGHdH4wwFHYJrpCqze",
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.allowList;
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    const generateMerkleProofAsync = async () => {
      const leaves = await fetchData();

      const nleaves = leaves.map(addressToLeaf);
      const tree = new MerkleTree(nleaves, keccak256, { sortPairs: true });
      const userLeaf = addressToLeaf(address);
      const proof = tree.getHexProof(userLeaf);

      const types = ["bytes32[]"];
      const values = [proof];
      const encoded = ethers.utils.defaultAbiCoder.encode(types, values);

      setProof(encoded.slice(2));
    };
    generateMerkleProofAsync();
  }, [address]);

  return (
    <div className="flex bg-base-300 relative pb-10">
      <DiamondIcon className="absolute top-24" />
      <CopyIcon className="absolute bottom-0 left-36" />
      <HareIcon className="absolute right-0 bottom-24" />
      <div className="flex flex-col w-3/4 mx-5 sm:mx-8 2xl:mx-20">
        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-lg text-black">Delegate Allow List Root Hash:</span>

          <div className="mt-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
            <span className="text-2xs leading-tight">{contractRoot}</span>
          </div>
        </div>

        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-lg text-black mb-2">Generate Merkle Root (Paste list and press Enter)</span>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <form onSubmit={handleSubmitRoot} className="w-full">
              <input
                type="text"
                name="csv"
                className="input mb-2 mt-2 py-2 font-bai-jamjuree w-full h-1/4 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-md sm:text-2xl placeholder-white uppercase"
                placeholder="Enter CSVs"
              />
            </form>
            <button
              className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                isLoading2 ? "loading" : ""
              }`}
              onClick={() => writeRoot()}
            >
              {!isLoading2 && (
                <>
                  Set <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                </>
              )}
            </button>
          </div>

          <span className="ml-2 mt-2 text-2xs">{root ? root : "Waiting for input..."}</span>
        </div>

        <div className="flex flex-col mt-6 px-7 py-8 bg-base-200 opacity-80 rounded-2xl shadow-lg border-2 border-primary">
          <span className="text-2xs sm:text-lg text-black">Pay via JBTerminal (If Whitelisted)</span>
          {/* <span className="text-xs">{verified !== null ? `Whitelisted: ${verified}` : "Waiting for input..."}</span> */}

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-5">
            <input
              type="number"
              defaultValue="0.01"
              placeholder="ETH Amount"
              className="input font-bai-jamjuree w-full px-5 bg-[url('/assets/gradient-bg.png')] bg-[length:100%_100%] border border-primary text-lg sm:text-2xl placeholder-white uppercase"
              onChange={e => setNewValue(e.target.value)}
            />
            <div className="flex rounded-full border border-primary p-1 flex-shrink-0">
              <div className="flex rounded-full border-2 border-primary p-1">
                <button
                  className={`btn btn-primary rounded-full capitalize font-normal font-white w-24 flex items-center gap-1 hover:gap-2 transition-all tracking-widest ${
                    isLoading ? "loading" : ""
                  }`}
                  onClick={() => writeAsync()}
                >
                  {!isLoading && (
                    <>
                      Send <ArrowSmallRightIcon className="w-3 h-3 mt-0.5" />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
