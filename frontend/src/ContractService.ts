import { useWriteContract, useAccount } from "wagmi";
import { contractAddress, ABI } from "@/lib/constants";
import { liskSepolia } from "viem/chains";

class WalletService {
  constructor() {
  }


  /**
   * 
   * @param e 
   * @param functionName 
   * @param args 
   * @param chain 
   * @returns
   * @notice each function needs the args as specified in the arguments here so it should be gotten from the form or passed to it feel free to hit up incase of any confusion 
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

  async placeBid(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["gigId", "bidAmount"]).map((arg) => BigInt(arg));
    await this.handleSubmit(e, "placeBid", args);
  }

  async acceptBid(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["gigId", "bidIndex"]).map((arg) => BigInt(arg));
    await this.handleSubmit(e, "acceptBid", args);
  }

  async completeGig(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["gigId"]).map((arg) => BigInt(arg));
    await this.handleSubmit(e, "completeGig", args);
  }

  async confirmGig(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["gigId"]).map((arg) => BigInt(arg));
    await this.handleSubmit(e, "confirmGig", args);
  }

  async extendDeadline(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["gigId", "newDeadline"]).map((arg) => BigInt(arg));
    await this.handleSubmit(e, "extendDeadline", args);
  }

  async reportGig(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["gigId"]).map((arg) => BigInt(arg));
    await this.handleSubmit(e, "reportGig", args);
  }

  async verifyFreelancer(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["freelancerAddress", "stars"]);
    args[1] = parseInt(args[1]); // Convert stars to number
    await this.handleSubmit(e, "verifyFreelancer", args);
  }

  async updateFreelancer(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["freelancerAddress", "portfolioURL", "skills", "stars"]);
    args[3] = parseInt(args[3]); // Convert stars to number
    await this.handleSubmit(e, "updateFreelancer", args);
  }

  async createGig(e) {
    const formData = new FormData(e.target);
    const args = this.getFormArgs(formData, ["title", "description", "requirements", "budget", "deadline"]).map((arg, i) => (i > 2 ? BigInt(arg) : arg));
    await this.handleSubmit(e, "createGig", args);
  }
}

export default WalletService;
