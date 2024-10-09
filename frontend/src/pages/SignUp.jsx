/* eslint-disable no-unused-vars */
import { signIn, signUp } from "@/api/authService";

import React, { useEffect, useState } from "react";
import Onboarding from "@/components/authentication/Onboarding";
import SetProfile from "@/components/authentication/SetProfile";
import SignUp from "@/components/authentication/SignUp";
import AccountType from "@/components/authentication/AccountType";
import Sidebar from "@/components/authentication/Sidebar";
import VerifyEmail from "@/components/authentication/VerifyEmail";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { setUser } from "@/redux/slices/userSlice";
import { useDispatch } from "react-redux";

const SignupPage = () => {
  const [active, setActive] = useState("accountType");
  const [accountType, setAccountType] = useState("");
  // State for form fields
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("")
   const [jobRole, setJobRole] = useState("");
   const [headline, setHeadline] = useState("");
   const [country, setCountry] = useState("");
   const [city, setCity] = useState("");
   const [bio, setBio] = useState("");
  //  const [skills, setSkills] = useState([]); // Skills array
  //  const [portfolioLink, setPortfolioLink] = useState("");
  //  const [resume, setResume] = useState(null); // Resume file upload
   const [profilePic, setProfilePic] = useState(null); // Profile picture upload
  // handle navigation
   const navigate = useNavigate();
   const location = useLocation();
   const {isAuthenticated, setIsAuthenticated} = useAuth();
   const [isLoading, setIsLoading] = useState(false);

   const dispatch = useDispatch();


   const handleSignUp = async () => {
     try {
      setIsLoading(true);
      const userInfo = await signUp (
        email, 
        firstName, 
        lastName,
        password,
        accountType,
        jobRole, 
        city, 
        country, 
        headline,
        bio, 
        "available",
        profilePic,)
        // console.log("the returned data is:", userInfo);
        return userInfo;
    } catch (err) {
        setIsLoading(false);
        throw new Error(err.message)
      } finally {
        setIsLoading(false);
      }
    };
   const handleSignIn = async () => {
    try {
      const user = await signIn (email, password, dispatch);
      setIsAuthenticated(true);
      dispatch(setUser(user));
      setTimeout(() => {
        navigate("/profile");
      }, 500);
    } catch (err) {
      setIsAuthenticated(false);
      console.log('Handle Login function failed', err.message)
      }
    };


    useEffect(()=> {
      if(isAuthenticated) {
        navigate(location.state?.from || "/dashboard", { replace: true }) //reroute if the user is signed in already
       }
    }, [isAuthenticated, location, navigate]);

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <main className="flex-grow flex justify-center items-start lg:pt-9 pt-6 lg:pl-4 relative lg:pr-[500px]">
        <div className="max-w-screen-xl mx-auto">
          {/* Card */}
          {active === "accountType" && (
            <AccountType
              setActive={setActive}
              accountType={accountType}
              setAccountType={setAccountType}
            />
          )}

          {active === "sign-up" && (
            <SignUp
              setActive={setActive}
              firstName={firstName}
              setFirstName={setFirstName}
              lastName={lastName}
              setLastName={setLastName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          )}

          {active === "setProfile" && (
            <SetProfile 
              setActive={setActive}
              jobRole={jobRole}
              setJobRole={setJobRole}
              headline={headline}
              setHeadline={setHeadline}
              country={country}
              setCountry={setCountry}
              city={city}
              setCity={setCity}
              bio={bio}
              setBio={setBio}
              // skills={skills}
              // setSkills={setSkills}
              // portfolioLink={portfolioLink}
              // setPortfolioLink={setPortfolioLink}
              // resume={resume}
              // setResume={setResume}
              profilePic={profilePic}
              setProfilePic={setProfilePic} 
              isLoading={isLoading}
              setIsLoading={setIsLoading}
              handleSignUp={handleSignUp}
              />
          )}

          {active === "verifyEmail" && <VerifyEmail setActive={setActive} />}

          {active === "onboarding" && 
            <Onboarding handleSignIn={handleSignIn} />}

          {/* Fixed  */}
          <Sidebar active={active} />
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
