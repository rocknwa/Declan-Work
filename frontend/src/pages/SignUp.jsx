/* eslint-disable no-unused-vars */
import { signUp } from "@/api/authService";

import React, { useState } from "react";
import Onboarding from "@/components/authentication/Onboarding";
import SetProfile from "@/components/authentication/SetProfile";
import SignUp from "@/components/authentication/SignUp";
import AccountType from "@/components/authentication/AccountType";
import Sidebar from "@/components/authentication/Sidebar";
import VerifyEmail from "@/components/authentication/VerifyEmail";

const SignupPage = () => {
  const [active, setActive] = useState("accountType");
  const [accountType, setAccountType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   // State for form fields
   const [jobRole, setJobRole] = useState("");
   const [headline, setHeadline] = useState("");
   const [country, setCountry] = useState("");
   const [city, setCity] = useState("");
   const [bio, setBio] = useState("");
   const [skills, setSkills] = useState([]); // Skills array
   const [portfolioLink, setPortfolioLink] = useState("");
   const [resume, setResume] = useState(null); // Resume file upload
   const [profilePic, setProfilePic] = useState(null); // Profile picture upload

   const handleSubmit = async () => {
    try {
      await signUp (
        firstName, 
        lastName, 
        email, 
        jobRole, 
        city, 
        country, 
        headline,
        bio, 
        "available",
        null,
        skills,
        true,
      )} catch (err) {
        console.log('Handle submit function failed')
      }
    };
      

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <main className="flex-grow flex justify-center items-start pt-9 pl-4 relative pr-[500px]">
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
              skills={skills}
              setSkills={setSkills}
              portfolioLink={portfolioLink}
              setPortfolioLink={setPortfolioLink}
              resume={resume}
              setResume={setResume}
              profilePic={profilePic}
              setProfilePic={setProfilePic} 
              handleSubmit={handleSubmit}
              />
          )}

          {active === "verifyEmail" && <VerifyEmail setActive={setActive} />}

          {active === "onboarding" && <Onboarding />}

          {/* Fixed  */}
          <Sidebar active={active} />
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
