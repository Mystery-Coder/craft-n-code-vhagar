// ethereum.js
import { ethers } from "ethers";
import { contractABI } from "./contractABI";
import { contractAddress } from "./contractConfig";
import { privateKey } from "./walletConfig";

// Initialize provider to connect to the Sepolia testnet
export const provider = new ethers.providers.JsonRpcProvider(
    "https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID"
);

// Initialize wallet with private key
export const wallet = new ethers.Wallet(privateKey, provider);

// Initialize contract instance
export const contract = new ethers.Contract(
    contractAddress,
    contractABI,
    wallet
);

// Function to store user data on the blockchain
export const storeUserData = async (brandCode, batchScore, brandScore) => {
    try {
        const transaction = await contract.storeUserData(
            brandCode,
            batchScore,
            brandScore
        );
        await transaction.wait(); // Wait for the transaction to be confirmed
        console.log("Data successfully stored on the blockchain");
    } catch (error) {
        console.error("Error storing data on the blockchain:", error);
        throw error;
    }
};

// Function to retrieve brand score and count from the blockchain
export const getBrandScoreByCode = async (brandCode) => {
    try {
        const [brandScore, batchScore, count] = await contract.retrieveUserData(
            brandCode
        );
        return { brandScore, count };
    } catch (error) {
        console.error("Error retrieving data from the blockchain:", error);
        throw error;
    }
};
