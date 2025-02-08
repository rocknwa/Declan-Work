
  export default function LoginButton(props) {
    return (
      <div
        className="min-w-full w-[350px] md:w-[650px] flex items-center font-normal justify-center gap-3 py-2 border border-gray-300 rounded-full"
        // text={props.text}
        // withWalletAggregator={true}
        {...props}
      ></div>
    );
  }
   export function SignUpButton(props) {
    return (
      <div
        className="min-w-full w-[350px] md:w-[700px] flex items-center font-normal justify-center gap-3 py-2 border border-gray-300 rounded-full"
        text={props.text}
        withWalletAggregator={true}
        {...props}
      ></div>
    );
  }