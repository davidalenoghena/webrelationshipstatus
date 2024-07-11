export const CONTRACT_ABI = [
    {
        "type": "constructor",
        "name": "",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "Search",
        "inputs": [
            {
                "type": "address",
                "name": "_profileAddress",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "type": "tuple",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "profileAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "string",
                        "name": "name",
                        "internalType": "string"
                    },
                    {
                        "type": "uint8",
                        "name": "relStatus",
                        "internalType": "enum relStatus_Contract.RelStatus"
                    },
                    {
                        "type": "address",
                        "name": "partner",
                        "internalType": "address"
                    },
                    {
                        "type": "string",
                        "name": "instID",
                        "internalType": "string"
                    }
                ],
                "internalType": "struct relStatus_Contract.Profile"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "addressExist",
        "inputs": [
            {
                "type": "address",
                "name": "_profileAddress",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "connectPartner",
        "inputs": [
            {
                "type": "address",
                "name": "_partner",
                "internalType": "address"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createProfile",
        "inputs": [
            {
                "type": "string",
                "name": "_name",
                "internalType": "string"
            },
            {
                "type": "address",
                "name": "_partner",
                "internalType": "address"
            },
            {
                "type": "string",
                "name": "_instID",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "deleteProfile",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "disconnectPartner",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "getProfiles",
        "inputs": [],
        "outputs": [
            {
                "type": "tuple[]",
                "name": "",
                "components": [
                    {
                        "type": "uint256",
                        "name": "id",
                        "internalType": "uint256"
                    },
                    {
                        "type": "address",
                        "name": "profileAddress",
                        "internalType": "address"
                    },
                    {
                        "type": "string",
                        "name": "name",
                        "internalType": "string"
                    },
                    {
                        "type": "uint8",
                        "name": "relStatus",
                        "internalType": "enum relStatus_Contract.RelStatus"
                    },
                    {
                        "type": "address",
                        "name": "partner",
                        "internalType": "address"
                    },
                    {
                        "type": "string",
                        "name": "instID",
                        "internalType": "string"
                    }
                ],
                "internalType": "struct relStatus_Contract.Profile[]"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "instExist",
        "inputs": [
            {
                "type": "string",
                "name": "_instID",
                "internalType": "string"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "owner",
        "inputs": [],
        "outputs": [
            {
                "type": "address",
                "name": "",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "partnerExist",
        "inputs": [
            {
                "type": "address",
                "name": "_partnerAddress",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "type": "bool",
                "name": "",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "profileCount",
        "inputs": [],
        "outputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "profiles",
        "inputs": [
            {
                "type": "uint256",
                "name": "",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "type": "uint256",
                "name": "id",
                "internalType": "uint256"
            },
            {
                "type": "address",
                "name": "profileAddress",
                "internalType": "address"
            },
            {
                "type": "string",
                "name": "name",
                "internalType": "string"
            },
            {
                "type": "uint8",
                "name": "relStatus",
                "internalType": "enum relStatus_Contract.RelStatus"
            },
            {
                "type": "address",
                "name": "partner",
                "internalType": "address"
            },
            {
                "type": "string",
                "name": "instID",
                "internalType": "string"
            }
        ],
        "stateMutability": "view"
    }
] as const;