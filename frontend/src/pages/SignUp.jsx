import { useAuth } from "@/hooks/useAuth";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi';
import { SignUpOnboard } from "./SignUpOnboard";
import { signIn, signUp } from "@/api/authService";

export default function SignupPage() {
  const [userDetails, setUserDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    profession: "",
    city: "",
    country: "",
    bio_title: "",
    bio_description: "",
    type: "",
    status: "available",
    // profile_img: null,
//  const [skills, setSkills] = useState([]); // Skills array
//  const [portfolioLink, setPortfolioLink] = useState("");
//  const [resume, setResume] = useState(null); // Resume file upload
  });

  const [user, setUser] = useState(null);
  const [passwordValidation, setPasswordValidation] = useState({
    isLengthValid: false,
    hasNumber: false,
    hasUpperLowerCase: false,
    passwordActive: false,
    showPassword: false
  });

  const [uiState, setUiState] = useState({
    isLoading: false,
    isError: false,
    errorMessage: ""
  });

  const [currentStep, setCurrentStep] = useState('signup'); // 'signup' or 'onboarding'

  const dispatch = useDispatch();
  const { address, isConnected } = useAccount(); // Wagmi hook to get wallet info
  const { walletAddress, isWalletConnected } = useSelector((state) => state.user);
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate();

  // Function to handle password input and validation
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setUserDetails(prev => ({ ...prev, password: value }));
    setPasswordValidation(prev => ({
      ...prev,
      isLengthValid: value.length >= 8,
      hasNumber: /\d/.test(value),
      hasUpperLowerCase: /[a-z]/.test(value) && /[A-Z]/.test(value)
    }));
  };

  const togglePasswordVisibility = () => {
    setPasswordValidation(prev => ({ ...prev, showPassword: !prev.showPassword }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleProfilePicChange = (pic, file) => {
    setUserDetails(prev => ({
      ...prev,
      profilePic: pic,
      profilePicFile: file
    }));
  };

  const allCriteriaMet = passwordValidation.isLengthValid && 
    passwordValidation.hasNumber && 
    passwordValidation.hasUpperLowerCase && 
    userDetails.email.length !== 0 && 
    userDetails.firstName.length !== 0 && 
    userDetails.lastName.length !== 0;

  const handleSignUp = async () => {
    setUiState(prev => ({ ...prev, isError: false, isLoading: true }));
    try {
      const dataToSend = {
        email: userDetails.email,
        first_name: userDetails.firstName,
        last_name: userDetails.lastName,
        password: userDetails.password,
        type: userDetails.type || "freelancer",
        profession: userDetails.profession || "",
        city: userDetails.city || "",
        country: userDetails.country || "",
        bio_title: userDetails.bio_title || "",
        bio_description: userDetails.bio_description || "",
        status: userDetails.status || "available",
        // profile_image: userDetails.profilePic || "",
        // skills: userDetails.skills || []
      };

      const userInfo = await signUp(dataToSend);
      setUser(userInfo);
      setUiState(prev => ({ ...prev, isLoading: false }));
    } catch (err) {
      setUiState(prev => ({
        ...prev,
        isError: true,
        errorMessage: err.message || "Signup failed. Please check your details.",
        isLoading: false
      }));
      console.log("na me", err) 
      throw new Error(err.message);
    }
  };

  const handleSignIn = async () => {
    try {
      const user = await signIn(userDetails.email, userDetails.password, dispatch);
      setIsAuthenticated(true);
      dispatch(setUser(user));
      navigate("/profile");
    } catch (err) {
      setIsAuthenticated(false);
      console.error('Login failed:', err.message);
    }
  };

  // const handleSignUpWithWallet = async () => {
  //   try {
  //     setUserDetails(prev => ({
  //       ...prev,
  //       email: `${walletAddress}@declanwork.xyz`,
  //       password: "Nonepassword"
  //     }));
  //   } catch (err) {
  //     setIsAuthenticated(false);
  //     setUiState(prev => ({
  //       ...prev,
  //       isError: true,
  //       errorMessage: err.message,
  //       isLoading: false
  //     }));
  //     throw new Error(err.message);
  //   }
  // };

  // useEffect(() => {
  //   if (isConnected && address) {
  //     dispatch(setWalletConnected({ walletAddress: address })); // Dispatch wallet connected action
  //     handleSignUpWithWallet(); // Proceed with wallet signup if connected
  //   }
  // }, [isConnected, address, dispatch]);
  
  return (
    <div>
      {currentStep === 'signup' ? (
        <div className="lg:max-w-[750px] w-full lg:mx-auto border mt-9 bg-white border-gray-200 rounded-2xl p-6">
          <div className="text-center mb-6">
            <p className="text-base text-[#6A6A6A]">
              Welcome to Declanwork
            </p>
            <p className="text-2xl text-[#202020] font-semibold mt-2">
              Create your account
            </p>
          </div>

          <div className="flex min-w-full justify-betweeen">
            <label htmlFor="firstName" className="block text-base text-black ml-1 mb-1 ">First name</label>
            <label htmlFor="lastName" className="block text-base text-black custom:ml-[100px] ml-[120px] md:ml-[300px] mb-1 lg:ml-[280px]">Last name</label>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="Enter First Name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
              value={userDetails.firstName}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Enter Last Name"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
              value={userDetails.lastName}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4">
            <label className="block text-base text-black ml-1 mb-1 ">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Email Address"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
              value={userDetails.email}
              onChange={handleInputChange}
            />
          </div>

          <div className="mt-4 relative">
            <label className="block text-base text-black ml-1 mb-1 ">Create a Password</label>
            <input
              type={passwordValidation.showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
              name="password"
              placeholder="Create password"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:border-gray-500"
              value={userDetails.password}
              onChange={(e) => { setPasswordValidation(prev => ({ ...prev, passwordActive: true })); handlePasswordChange(e) }}
            />
            <button
              type="button"
              className="absolute top-[68%] right-3 transform -translate-y-1/2 text-gray-500"
              onClick={togglePasswordVisibility}
            >
              {passwordValidation.showPassword ? "Hide" : "Show"} {/* Toggle button text */}
            </button>
          </div>
          {passwordValidation.passwordActive && userDetails.password.length !== 0 &&
            <div className="mt-3 text-sm space-y-2">
              <p
                className={`flex items-center ${passwordValidation.isLengthValid ? "text-green-500" : "text-gray-500"}`}
              >
                ✔ At least 8 Characters
              </p>
              <p
                className={`flex items-center ${passwordValidation.hasNumber ? "text-green-500" : "text-gray-500"}`}
              >
                ✔ At least 1 number
              </p>
              <p
                className={`flex items-center ${passwordValidation.hasUpperLowerCase ? "text-green-500" : "text-gray-500"}`}
              >
                ✔ Both upper and lower case letter
              </p>
            </div>}

          <button
            className={`w-full flex items-center justify-center hover:bg-[#21B557] transition-all disabled:bg-gray-300 disabled:text-[#989898] text-[#202020] rounded-full p-0 font-medium lg:text-base text-sm mt-6 ${allCriteriaMet ? "bg-[#00EF8B]" : uiState.isLoading ? "bg-gray-300" : "bg-gray-300"}`}
            disabled={uiState.isLoading || !allCriteriaMet}
            onClick={() => setCurrentStep('onboarding')}
          >
              <span className="my-3">Continue</span>
          </button>
          {uiState.isError && <p className="text-red-500 text-center mt-3 text-sm">{uiState.errorMessage}</p>}
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
      ) : (
        <SignUpOnboard
          uid={user?.id}
          userDetails={userDetails}
          onInputChange={handleInputChange}
          onProfilePicChange={handleProfilePicChange}
          handleSignUp={handleSignUp}
          handleSignIn={handleSignIn}
          isLoading={uiState.isLoading}
          isError={uiState.isError}
        />
      )}
    </div>
  );
}