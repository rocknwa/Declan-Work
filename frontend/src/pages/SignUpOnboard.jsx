/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Onboarding from "@/components/authentication/Onboarding";
import SetProfile from "@/components/authentication/SetProfile";
import AccountType from "@/components/authentication/AccountType";
import Sidebar from "@/components/authentication/Sidebar";
import VerifyEmail from "@/components/authentication/VerifyEmail";

export const SignUpOnboard = ({
  uid,
  userDetails, 
  onInputChange, 
  onProfilePicChange, 
  isLoading,
  isError,
  handleSignIn,
  handleSignUp
}) => {
  const [active, setActive] = useState("accountType");

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <main className="flex-grow flex justify-center items-start lg:pt-9 pt-6 lg:pl-4 relative lg:pr-[35%]">
        <div className="max-w-screen-xl mx-auto">
          {/* Card */}
          {active === "accountType" && (
            <AccountType
              setActive={setActive}
              accountType={userDetails.type}
              setAccountType={(value) => onInputChange({ target: { name: 'type', value } })}
            />
          )}
{/* 
          {active === "sign-up" && (
            <SignUpComponent
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
          )} */}

          {active === "setProfile" && (
            <SetProfile 
              setActive={setActive}
              jobRole={userDetails.profession}
              setJobRole={(value) => onInputChange({ target: { name: 'profession', value } })}
              headline={userDetails.bio_title}
              setHeadline={(value) => onInputChange({ target: { name: 'bio_title', value } })}
              country={userDetails.country}
              setCountry={(value) => onInputChange({ target: { name: 'country', value } })}
              city={userDetails.city}
              setCity={(value) => onInputChange({ target: { name: 'city', value } })}
              bio={userDetails.bio_description}
              setBio={(value) => onInputChange({ target: { name: 'bio_description', value } })}
              // skills={skills}
              // setSkills={setSkills}
              // portfolioLink={portfolioLink}
              // setPortfolioLink={setPortfolioLink}
              // resume={resume}
              // setResume={setResume}
              profilePic={userDetails.profile_img}
              profilePicFile={userDetails.profilePicFile}
              setProfilePic={(pic, file) => onProfilePicChange(pic, file)}
              isLoading={isLoading}
              isError={isError}
              handleSignUp={handleSignUp}
              />
          )}

          {active === "verifyEmail" && <VerifyEmail email={userDetails.email} password={userDetails.password} uid={uid} setActive={setActive} />}

          {active === "onboarding" && 
            <Onboarding handleSignIn={handleSignIn} />}

          {/* Fixed  */}

          <Sidebar active={active} />
        </div>
      </main>
    </div>
  );
};