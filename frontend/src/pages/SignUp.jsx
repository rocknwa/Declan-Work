import { signIn, signUp } from "@/api/authService";
import { showToast } from "@/components/Sonner";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi';
import { setUser, setWalletConnected } from "@/redux/slices/userSlice";
import { SignUpButton } from "@/onchainkit/LoginButton";
import { SignUpOnboard } from "./PrevSignUp";
import { updateProfile } from "@/api/profileService";
import MetaMask from "@/components/authentication/Metamask";

export default function SignupPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [type, setType] = useState("");
  const dispatch = useDispatch();
  
  const [passwordActive, setPasswordActive] = useState(false);
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasUpperLowerCase, setHasUpperLowerCase] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

    const { address, isConnected } = useAccount(); // Wagmi hook to get wallet info
    const { walletAddress, isWalletConnected } = useSelector((state) => state.user);
    // const { isWalletConnected, id, email, firstName, profession } = useSelector((state) => state.user);
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();

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
  const allCriteriaMet = isLengthValid && hasNumber && hasUpperLowerCase && email.length != 0 && firstName.length != 0 && lastName.length != 0;


  const handleSignUp = async () => {
    setIsError(false);// Start loading state
    setIsLoading(true);
    try {
    //  const userInfo = await updateProfile (dispatch,
      // email,
      // firstName,
      // lastName,
      // password,
    //    // Default value for type
    //   profession,       // Default value for profession
    //   city,             // Default value for city
    //   country,
    //   bio_title,
    //   bio_description,
    //   status = "available" 
    //   )
    //   showToast({type: "success", message: "Your account had been created. Logging  in"})
    //   const user = await signIn(email, password, dispatch);
    //   setIsAuthenticated(true);
    //   dispatch(setUser(user));
      navigate("/signup/onboarding");
    } catch (err) {
        setIsAuthenticated(false);
        setErrorMessage(err.message);
        setIsError(true);
        setIsLoading(false);
       throw new Error(err.message)
     } finally { 
       setIsLoading(false);
     }
   };


   const handleSignUpWithWallet = async () => {
    try {
      setEmail(`${walletAddress}@declanwork.xyz`);
      setPassword("Nonepassword");
     } catch (err) {
         setIsAuthenticated(false);
         setErrorMessage(err.message);
         setIsError(true);
         setIsLoading(false);
        throw new Error(err.message)
      }
   }

    // useEffect(() => {
    //   if (isConnected && address) {
    //     handleSignUpWithWallet();
    //     setIsAuthenticated(true);
    //     dispatch(setWalletConnected({ walletAddress: address })); // Dispatch wallet connected action
    //     navigate("/signup/onboarding");
    //   }
    // }, [isConnected, address, dispatch, navigate, setIsAuthenticated]);
    useEffect(() => {
      if (isConnected && address) {
        dispatch(setWalletConnected({ walletAddress: address })); // Dispatch wallet connected action
        handleSignUpWithWallet(); // Proceed with wallet signup if connected
      }
    }, [isConnected, address, dispatch]);
  
  return (
    <div>
   { !isWalletConnected?  
   <div className="lg:max-w-[750px] w-full lg:mx-auto border mt-9 bg-white border-gray-200 rounded-2xl p-6">
      <div className="text-center mb-6">
        <p className="text-base text-[#6A6A6A]">
          Welcome to Declanwork
        </p>
        <p className="text-2xl text-[#202020] font-semibold mt-2">
          Create your account
        </p>
      </div>

      {/* <div>
        <MetaMask />
      </div> */}

      <div className="space-y-4 flex items-center w-full">
          <div className="flex items-center mx-auto relative">
            { !address  && <img src="/icons/wallet.svg" className="absolute sm:hidden hidden md:block lg:block z-30 md:left-[34%]" alt="" /> }
          <SignUpButton text="Sign Up with a wallet"/></div>
      </div>

      <div className="flex items-center my-6">
        <div className="flex-grow border-t border-gray-300"></div>
        <p className="px-4">OR CONTINUE WITH</p>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

        <div className="flex min-w-full justify-betweeen">
          <label htmlFor={firstName} className="block text-base text-black ml-1 mb-1 ">First name</label>
          <label htmlFor={lastName} className="block text-base text-black custom:ml-[100px] ml-[120px] md:ml-[300px] mb-1 lg:ml-[280px]">Last name</label>
        </div>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Enter First Name"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter Last Name"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <div className="mt-4">
        <label className="block text-base text-black ml-1 mb-1 ">Email</label>
        <input
          type="email"
          placeholder="Enter Email Address"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div className="mt-4 relative">
        <label className="block text-base text-black ml-1 mb-1 ">Create a Password</label>
        <input
          type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
          placeholder="Create password"
          className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
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
        className={`w-full flex items-center justify-center hover:bg-[#21B557] transition-all disabled:bg-gray-300 disabled:text-[#989898] text-[#202020] rounded-full p-0 font-medium lg:text-base text-sm mt-6 ${
          allCriteriaMet ? "bg-[#00EF8B]" :  isLoading ? "bg-gray-300" : "bg-gray-300"
        }`}
        disabled={isLoading || !allCriteriaMet}
        onClick={() => handleSignUp()}
      >
        {isLoading ? (
              <img
                src="/icons/spinner.svg"
                className="w-[30px] h-[30px] my-2 spin"
                alt="Loading"
              />
            ) :
            <span className="my-3">Continue</span>
            }
      </button>
      { isError && <p className="text-red-500 text-center mt-3 text-sm">{errorMessage}</p>}
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
     : <SignUpOnboard
      email= {email}
      firstName={firstName}
      lastName={lastName}
      password={password} />
    }
    </div>
  );
}