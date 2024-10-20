  import WalletWrapper from "./WalletWrapper";

  export default function LoginButton(props) {
    return (
      <WalletWrapper
        className="min-w-full w-[350px] md:w-[700px] flex items-center font-normal bg-white justify-center gap-3 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100"
        text="Sign Up with a Wallet"
        withWalletAggregator={true}
        {...props}
      />
    );
  }