import { useState } from "react";
import PropTypes from "prop-types";

export default function SignUp({
  setActive,
  firstName,
  setFirstName,
  lastName,
  setLastName,
  email,
  setEmail,
  password,
  setPassword,
}) {
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

  const allCriteriaMet = isLengthValid && hasNumber && hasUpperLowerCase;

  return (
    <div className="w-[750px] mx-auto border border-gray-200 rounded-2xl p-6">
      <div className="text-center mb-6">
        <p className="text-lg text-[#6A6A6A] font-medium">
          Get started by choosing your preferred registration method.
        </p>
        <p className="text-2xl text-[#202020] font-semibold mt-2">
          Choose How You Would Like to Register on Declanwork
        </p>
      </div>

      <div className="space-y-4">
        <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
          <img
            src="/icons/google_symbol.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Sign in with Email
        </button>
        <button className="w-full flex items-center justify-center gap-2 p-3 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
          <img src="/icons/linkedIn.svg" alt="LinkedIn" className="w-5 h-5" />
          Sign in with LinkedIn
        </button>
      </div>

      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="px-4 text-gray-400">OR CONTINUE WITH</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

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
      </div>

      <div className="mt-4">
        <input
          type="email"
          placeholder="Enter Email Address"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-4 relative">
        <input
          type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
          placeholder="Create password"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-blue-500"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          type="button"
          className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide" : "Show"} {/* Toggle button text */}
        </button>
      </div>

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
      </div>

      <button
        onClick={() => {setActive("setProfile");}}
        disabled={!allCriteriaMet}
        className={`w-full mt-6 ${
          allCriteriaMet ? "bg-[#00EF8B]" : "bg-gray-300"
        } text-[#202020] rounded-full py-3 font-medium text-sm`}
      >
        Continue
      </button>

      <p className="mt-4 text-gray-500 text-sm">
        By clicking continue, you agree to our{" "}
        <a href="#" className="text-[#00EF8B]">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-[#00EF8B]">
          Privacy Policy
        </a>
        .
      </p>
    </div>
  );
}

SignUp.propTypes = {
  setActive: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  setFirstName: PropTypes.func.isRequired,
  lastName: PropTypes.string.isRequired,
  setLastName: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  setEmail: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
};
