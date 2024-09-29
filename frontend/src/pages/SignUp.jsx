/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Onboarding from "@/components/authentication/Onboarding";
import SetProfile from "@/components/authentication/SetProfile";
import SignUp from "@/components/authentication/SignUp";
import AccountType from "@/components/authentication/AccountType";
import Sidebar from "@/components/authentication/Sidebar";
import Header from "@/components/authentication/Header";
import VerifyEmail from "@/components/authentication/verifyEmail";

const SignupPage = () => {
  const [active, setActive] = useState("accountType");
  const [accountType, setAccountType] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="min-h-screen bg-[#fafafa] flex flex-col">
      <Header />

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

          {active === "setProfile" && <SetProfile setActive={setActive} />}

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
