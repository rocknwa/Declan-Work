import { useState } from "react";
import Header from "@/components/authentication/Header";
import { TbAlertSquareRounded } from "react-icons/tb";

export default function NewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasMixedCase, setHasMixedCase] = useState(false);

  // Password validation check
  const validatePassword = (pwd) => {
    const lengthCheck = pwd.length >= 8;
    const numberCheck = /\d/.test(pwd);
    const mixedCaseCheck = /[a-z]/.test(pwd) && /[A-Z]/.test(pwd);

    setIsLengthValid(lengthCheck);
    setHasNumber(numberCheck);
    setHasMixedCase(mixedCaseCheck);

    setIsPasswordValid(lengthCheck && numberCheck && mixedCaseCheck);
  };

  const handlePasswordChange = (e) => {
    const pwd = e.target.value;
    setPassword(pwd);
    validatePassword(pwd);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword && isPasswordValid) {
      // Handle the password reset logic
      console.log("Password reset successful!");
    } else {
      console.log("Password mismatch or invalid!");
    }
  };
  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col ">
      <div className="w-[700px] mx-auto my-9 border border-[#E9E9E9] rounded-2xl p-6 text-center">
        <div className="mb-6">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-green-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.828 14.828a4 4 0 01-5.656-5.656M14 6h6m0 0v6m0-6L10 16l-4 4"
              />
            </svg>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-[#202020] mb-2">
          Password Reset Form
        </h2>
        <p className="text-gray-600 mb-6">
          Please set a new password to continue.
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 text-left relative">
            <label className="block text-sm text-black">New Password</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Create New Password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full p-3 border border-[#E9E9E9] bg-transparent text-[#0C081F] rounded-lg focus:outline-none mt-1"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-sm text-[#4D4D4D]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>

            <div className="mt-2">
              <p
                className={`text-sm flex items-center ${
                  isLengthValid ? "text-[#21B557]" : "text-[#6A6A6A]"
                }`}
              >
                <TbAlertSquareRounded className="mr-2 h-4 w-4" />
                At least 8 characters
              </p>
              <p
                className={`text-sm flex items-center ${
                  hasNumber ? "text-[#21B557]" : "text-[#6A6A6A]"
                }`}
              >
                <TbAlertSquareRounded className="mr-2 h-4 w-4" />
                At least 1 number
              </p>
              <p
                className={`text-sm flex items-center ${
                  hasMixedCase ? "text-[#21B557]" : "text-[#6A6A6A]"
                }`}
              >
                <TbAlertSquareRounded className="mr-2 h-4 w-4" />
                Both upper and lower case letters
              </p>
            </div>
          </div>

          <div className="mb-6 text-left relative">
            <label className="block text-sm text-black">
              Confirm Password
            </label>
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 border border-[#E9E9E9] bg-transparent text-[#0C081F] rounded-lg focus:outline-none mt-1"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-3 top-10 text-sm text-[#4D4D4D]"
            >
              {showConfirmPassword ? "Hide" : "Show"}
            </button>
          </div>

          <button
            type="submit"
            className={`w-full py-3 rounded-full text-white ${
              isPasswordValid && password === confirmPassword
                ? "bg-[#21B557]"
                : "bg-[#21B557]/60 cursor-not-allowed"
            }`}
            disabled={!isPasswordValid || password !== confirmPassword}
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
}
