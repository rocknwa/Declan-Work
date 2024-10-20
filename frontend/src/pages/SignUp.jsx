import LoginButton from "@/onchainkit/LoginButton";
import { useState } from "react";

export default function SignupPage() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [type, setType] = useState("");

  const [passwordActive, setPasswordActive] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasUpperLowerCase, setHasUpperLowerCase] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

  // Function to handle password input and validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsLengthValid(value.length >= 8);
    setHasNumber(/\d/.test(value));
    setHasUpperLowerCase(/[a-z]/.test(value) && /[A-Z]/.test(value));
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const allCriteriaMet = isLengthValid && hasNumber && hasUpperLowerCase && email.length != 0;

  return (
    <div className="lg:max-w-[750px] w-full lg:mx-auto border mt-9 bg-white border-gray-200 rounded-2xl p-6">
      <div className="text-center mb-6">
        <p className="text-base text-[#6A6A6A]">
          Welcome to Declanwork
        </p>
        <p className="text-2xl text-[#202020] font-semibold mt-2">
          Create your account
        </p>
      </div>

      <div className="space-y-4 flex items-center w-full">
          <div className="flex items-center mx-auto relative">
            <img src="/icons/wallet.svg" className="absolute sm:hidden hidden md:block lg:block z-30 md:left-[35%]" alt="" />
          <LoginButton/></div>
      </div>

      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="px-4">OR CONTINUE WITH</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
{/* 
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Enter First Name"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div> */}

      <div className="mt-4">
        <label className="block text-base text-black ml-1 mb-1 ">Email</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-4 relative">
        <label className="block text-base text-black ml-1 mb-1 ">Create a Password</label>
        <input
          type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
          placeholder="Create password"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border"
          value={password}
          onChange={(e) => {setPasswordActive(true); handlePasswordChange(e)}}
        />
        <button
          type="button"
          className="absolute top-[68%] right-3 transform -translate-y-1/2 text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide" : "Show"} {/* Toggle button text */}
        </button>
      </div>
      { passwordActive && password.length !=0 &&
        <div className="mt-3 text-sm space-y-2">
          <p
            className={`flex items-center ${
              isLengthValid ? "text-green-500" : "text-gray-500"
            }`}
          >
            ✔ At least 8 Characters
          </p>
          <p
            className={`flex items-center ${
              hasNumber ? "text-green-500" : "text-gray-500"
            }`}
          >
            ✔ At least 1 number
          </p>
          <p
            className={`flex items-center ${
              hasUpperLowerCase ? "text-green-500" : "text-gray-500"
            }`}
          >
            ✔ Both upper and lower case letter
          </p>
        </div>}

      <button
        disabled={!allCriteriaMet}
        className={`w-full mt-6 ${
          allCriteriaMet ? "bg-[#00EF8B]" : "bg-gray-300"
        } text-[#202020] rounded-full py-3 font-medium text-sm`}
      > 
        Continue
      </button>

      <p className="mt-9 text-center text-sm text-[#667085]">
          Already have an account?{" "}
          <a href="/signin" className="text-[#21B557] font-medium cursor-pointer">
            Log in
          </a>
        </p>


      <p className="mt-4 text-center text-[#21B557] font-medium text-sm">
        By clicking continue, you agree to our{" "}
          Terms of Service
        and{" "}
          Privacy Policy
        .
      </p>
    </div>
  );
}