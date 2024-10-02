import Header from "@/components/authentication/Header";

import { useEffect, useState } from "react";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [resendTimer, setResendTimer] = useState(30); // Timer for resend link

  useEffect(() => {
    let timer;
    if (isSubmitted) {
      timer = setInterval(() => {
        setResendTimer((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, [isSubmitted]);

  const handleResend = () => {
    console.log("Resend email clicked");
    // Logic to resend email
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you would handle the logic for sending the reset password link
    console.log("Reset link sent to:", email);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col ">
      <div className="w-[700px] mx-auto my-9 border border-[#E9E9E9] rounded-2xl p-6 text-center">
        {/* Icon */}
        {!isSubmitted ? (
          <>
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

            {/* Title and description */}
            <h2 className="text-xl font-semibold text-[#202020] mb-2">
              Forgot password?
            </h2>
            <p className="text-[#6A6A6A] mb-6">
              No worries! We&apos;ll help you reset it.
            </p>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-6 text-left">
                <label className="block text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full p-3 border border-[#E9E9E9] bg-transparent rounded-lg focus:outline-none mt-1"
                />
              </div>

              <button
                type="submit"
                disabled={!email}
                className="w-full disabled:bg-[#21B557]/50 bg-[#21B557]  text-white rounded-full py-3 font-medium text-sm"
              >
                Send Reset Link
              </button>
            </form>

            {/* Back to login */}
            <p className="mt-6 text-sm text-[#667085]">
              Back to{" "}
              <span className="cursor-pointer font-medium text-[#21B557]">
                Login
              </span>
            </p>
          </>
        ) : (
          <>
            {/* Email Icon */}
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
                    d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m0 4h18m-2 4v1a2 2 0 01-2 2H7a2 2 0 01-2-2v-1m14-4H5"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-semibold text-[#202020] mb-2">
              Check your email
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              We&apos;ve sent a password reset link to <strong>{email}</strong>.
              If you don&apos;t see it, check your spam folder or try again.
            </p>

            {/* Open Mail Button */}
            <button
              onClick={() => window.open("https://mail.google.com", "_blank")}
              className="w-full bg-[#21B557] text-white rounded-full py-3 font-medium text-sm mb-4"
            >
              Open mail
            </button>

            {/* Resend Link */}
            <p className="text-sm text-gray-600">
              {resendTimer > 0 ? (
                <>
                  Didn&apos;t receive the email? Resend in{" "}
                  <strong>{resendTimer} sec</strong>
                </>
              ) : (
                <>
                  Didn&apos;t receive the email?{" "}
                  <span
                    onClick={handleResend}
                    className="text-[#21B557] font-medium cursor-pointer"
                  >
                    Resend now
                  </span>
                </>
              )}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
