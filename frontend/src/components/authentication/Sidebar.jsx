import PropTypes from "prop-types";

export default function Sidebar({ active }) {
  const steps = [
    { id: "accountType", label: "Choose a type of account", description: "Choose what type of account you want to signup as" },
    { id: "sign-up", label: "Choose Registration Method", description: "Choose how you would like to register on Declanwork." },
    { id: "setProfile", label: "Profile Setup", description: "Please provide your name and email" },
    { id: "verifyEmail", label: "Enter Registration Details", description: "You are needed to enter the required information" },
    { id: "onboarding", label: "Welcome Declanwork", description: "" },
  ];

  return (
    <div className="lg:absolute lg:block hidden top-0 right-0 w-1/3 h-full px-6 py-10 bg-white mr-auto">
      <ul className="relative ml-6">
        {steps.map((step, index) => {
          const isActive = active === step.id; // The currently active step
          const isCompleted = index < steps.findIndex(s => s.id === active); // Steps completed

          return (
            <li key={step.id} className="mb-10 ml-6">
              <span
                className={`absolute flex items-center justify-center w-7 h-7 rounded-full -left-4 ring-2 ${
                  isActive ? "ring-[#21B557]" : isCompleted ? "ring-[#21B557]" : "ring-[#EAECF0]"
                }`}
              >
                {isCompleted ? (
                  <p className="text-[#00EF8B] text-lg">&#x2713;</p>
                ) : (
                  <div
                    className={`w-3 h-3 ${isActive ? "bg-[#00EF8B]" : "bg-[#EAECF0]"} rounded-full`}
                  />
                )}
              </span>
              <h3
                className={`leading-tight font-semibold mx-2 text-[16px] ${isActive ? "text-[#17813E]" : "text-[#202020]"}`}
              >
                {step.label}
              </h3>
              <p
                className={`text-sm mx-2 ${isActive ? "text-[#1EA54F]" : "text-[#6A6A6A]"}`}
              >
                {step.description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Sidebar.propTypes = {
  active: PropTypes.string.isRequired,
};
