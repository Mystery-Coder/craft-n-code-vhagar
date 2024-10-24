// Save this in a file, e.g., contractABI.json
const contractABI = [
    [
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_brand_code",
                    type: "uint256",
                },
            ],
            name: "getBrandScoreByCode",
            outputs: [
                { internalType: "uint256", name: "", type: "uint256" },
                { internalType: "uint256", name: "", type: "uint256" },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_brand_code",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_batch_score",
                    type: "uint256",
                },
                {
                    internalType: "uint256",
                    name: "_brand_score",
                    type: "uint256",
                },
            ],
            name: "storeUserData",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ],
];
