export const BACKEND_API_BASE_URL = "https://declanwork-backend.onrender.com";
export const PASSPORT_API_BASE_URL = "https://api.passport.xyz";

export const contractAddress = "0xEd27133B24A9cDf08E2a9F05D4ba2B5f323E2dE1";

export const projectId = "b3013a5aee77ad1242d4649eb78e10dc";

export const ABI =  [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "acceptBid",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "bidIndex",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "completeGig",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "confirmGig",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createFreelancerAccount",
        "inputs": [
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "portfolioURL",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "skills",
                "type": "string[]",
                "internalType": "string[]"
            },
            {
                "name": "categories",
                "type": "string[]",
                "internalType": "string[]"
            },
            {
                "name": "verified",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "stars",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "email",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "country",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "jobCount",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createGig",
        "inputs": [
            {
                "name": "ownerEmail",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "title",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "description",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "gigTimeline",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "budget",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "createGigOwnerAccount",
        "inputs": [
            {
                "name": "gigOwner",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "gigOwnerAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "gigOwnerCompany",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "isVerified",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "stars",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "escrowerAccount",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "extendDeadline",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "newDeadline",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "freelancers",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "name",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "addr",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "portfolioURL",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "verified",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "stars",
                "type": "uint32",
                "internalType": "uint32"
            },
            {
                "name": "email",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "country",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "jobCount",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "gigOwners",
        "inputs": [
            {
                "name": "",
                "type": "address",
                "internalType": "address"
            }
        ],
        "outputs": [
            {
                "name": "gigOwner",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "gigOwnerAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "gigOwnerCompany",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "isVerified",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "stars",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "gigs",
        "inputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "owner",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "ownerEmail",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "freelancer",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "title",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "description",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "gigTimeline",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "deadline",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "budget",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "featureGig",
                "type": "bool",
                "internalType": "bool"
            },
            {
                "name": "status",
                "type": "uint8",
                "internalType": "enum Declan.GigStatus"
            },
            {
                "name": "escrower",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "escrowAmount",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "warningCount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "noOfCreatedGigs",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "noOfFreelancers",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "noOfGigOwners",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "placeBid",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "bidAmount",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "reportGig",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "updateFreelancer",
        "inputs": [
            {
                "name": "freelancerAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "portfolioURL",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "skills",
                "type": "string[]",
                "internalType": "string[]"
            },
            {
                "name": "stars",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "verifyFreelancer",
        "inputs": [
            {
                "name": "freelancerAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "stars",
                "type": "uint32",
                "internalType": "uint32"
            }
        ],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "AcceptBid",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "freelancer",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "BidPlaced",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "bidder",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "FreelancerJoined",
        "inputs": [
            {
                "name": "freelancer",
                "type": "address",
                "indexed": false,
                "internalType": "address"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "GigCreated",
        "inputs": [
            {
                "name": "gigId",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            }
        ],
        "anonymous": false
    }
];


