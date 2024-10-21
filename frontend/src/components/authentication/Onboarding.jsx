import PropTypes from "prop-types";
import { useState } from "react";
import { showToast } from "../Sonner";
import Logo from  "@/assets/DeclanWorkLogo.png"

export default function Onboarding({handleSignIn}) {
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit= async () => {
    try {
      setIsLoading(true);
      const response = await handleSignIn();
    } catch (error) {
       showToast({type: "error", message: "An error occured!"});
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div className="lg:w-[750px] mx-2 lg:mx-auto border bg-white border-gray-200 rounded-2xl px-3 py-8 lg:p-8 text-center">
      {/* Logo and Title */}
      <div className="mb-6">
        <div className="w-[127px] h-[41px] mx-auto">
          <img
            src={Logo}
            alt="DeclanWork Logo"
            className="mx-auto mb-4"
          />
        </div>
        <p className="text-2xl font-semibold mt-3 text-[#202020]">
          Welcome to DeclanWork!!! 🦸‍♀️
        </p>
        <p className="text-[#6A6A6A] mt-2 mb-6">
          Get up and running in 3 minutes
        </p>
      </div>

      {/* Video */}
      <div className="mb-6 w-full h-[300px] rounded-lg bg-slate-600 mx-auto">
        {/* <video
      className="w-full h-[300px] object-cover rounded-lg"
      controls
      src={VideoSource} // Replace with actual video URL or path
    >
      Your browser does not support the video tag.
    </video> */}
      </div>

      {/* Finish Up Button */}
      <button onClick={() => handleSubmit()} className={`w-full text-[#202020] hover:bg-[#21B557] rounded-full font-medium lg:text-base text-sm flex items-center justify-center disabled:bg-gray-300 disabled:text-[#989898] lg:mt-6 ${
          isLoading ?"bg-gray-300" : "bg-[#00EF8B]" 
        }`}
        disabled={isLoading}>
        {isLoading ? (
              <img
                src="/icons/spinner.svg"
                className="w-[30px] h-[30px] my-2 spin"
                alt="Loading"
              />
            ): 
            <span className="my-3">Finish Up</span>
            }
      </button>
    </div>
  );
}


Onboarding.propTypes  = {
  handleSignIn : PropTypes.func.isRequired
}