import { useWriteContract, useAccount } from "wagmi";
import { contractAddress, ABI } from "./constants";
import { liskSepolia } from "viem/chains";

class WalletService {
    constructor() {
    }

    /**
     * @param {Event} e 
     * @param {string} functionName 
     * @param {Array} args 
     * @param {Object} chain 
     */
    async handleSubmit(e, functionName, args, chain = liskSepolia) {
        e.preventDefault();

        const { writeContract } = useWriteContract();
        const { address: account } = useAccount();

        if (!account) {
            console.error("No account connected.");
            return;
        }

        try {
            await writeContract({
                address: contractAddress,
                abi: ABI,
                functionName,
                args,
                chain,
                account,
            });
        } catch (error) {
            console.error(`Error executing ${functionName}:`, error);
        }
    }

    getFormArgs(formData, keys) {
        return keys.map((key) => formData.get(key));
    }

    async createFreelancerAccount(e) {
        const formData = new FormData(e.target);
        const args = this.getFormArgs(formData, ["name", "bio", "skills", "portfolio", "isActive", "rating", "image", "location", "experience"]);
        await this.handleSubmit(e, "createFreelancerAccount", args);
    }

    async createGigOwnerAccount(e) {
        const formData = new FormData(e.target);
        const args = this.getFormArgs(formData, ["name", "address", "company", "isVerified", "stars"]);
        await this.handleSubmit(e, "createGigOwnerAccount", args);
    }

    // ...existing code for other methods...

    async createGig(e) {
        const formData = new FormData(e.target);
        const args = this.getFormArgs(formData, ["title", "description", "requirements", "budget", "deadline"])
            .map((arg, i) => (i > 2 ? BigInt(arg) : arg));
        await this.handleSubmit(e, "createGig", args);
    }
}

export default WalletService;
