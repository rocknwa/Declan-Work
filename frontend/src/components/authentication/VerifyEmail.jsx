import { useState } from "react";
import PropTypes from "prop-types";

export default function VerifyEmail({ setActive }) {
  // State to track email verification status
  const [isVerified, setIsVerified] = useState(false);

  // Function to simulate email verification process
  const verifyEmail = () => {
    setIsVerified(true);
  };

  return (
    <div className="w-[750px] mx-auto border border-gray-200 rounded-2xl p-8">
      {isVerified ? (
        // Component to show when the email is verified
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4">
            <img
              src="/icons/verified.svg" // Use your own verified icon path
              alt="Verified Icon"
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Email Verified</h2>
          <p className="text-gray-600 mb-4">
            Your email has been successfully verified.
          </p>
          <button
            className="w-full bg-green-500 text-white rounded-full py-3 font-medium text-sm"
            onClick={() => setActive("onBoarding")}
          >
            Continue
          </button>
        </div>
      ) : (
        // Component to show when email is not verified
        <div className="text-center">
          <div className="w-12 h-12 mx-auto mb-4">
            <img
              src="/icons/mail.svg" // Use your own email icon path
              alt="Email Icon"
              className="mx-auto"
            />
          </div>
          <h2 className="text-2xl font-bold mb-2">Check your email</h2>
          <p className="text-gray-600 mb-4">
            We sent a verification link to goody22@gmail.com.
          </p>
          <button
            onClick={verifyEmail}
            className="bg-green-500 md:w-[300px] text-white px-4 py-2 rounded-full"
          >
            Verify Email
          </button>
          <p className="text-gray-500 text-sm mt-2">
            Didn&apos;t receive the email?{" "}
            <button className="text-green-500 hover:underline">
              Click to resend
            </button>
          </p>
        </div>
      )}
    </div>
  );
}

VerifyEmail.propTypes = {
  setActive: PropTypes.func.isRequired,
};
