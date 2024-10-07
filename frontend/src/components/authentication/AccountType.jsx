import PropTypes from "prop-types";
import FreelancerIcon from "../../../public/assets/user.png";
import HirerIcon from "../../../public/assets/manager.png";

export default function AccountType({ setActive, accountType, setAccountType }) {
  

  const handleAccountTypeChange = (event) => {
    setAccountType(event.target.value);
  };

  const handleContinue = () => {
    if (accountType) {
      
      setActive("sign-up");
    }
  };

  return (
    <div className="lg:w-[750px] min-w-full mx-auto border border-gray-200 rounded-2xl p-6">
      <div className="mb-6">
        <p className="text-lg text-[#989898] font-medium">
          Welcome to Declanwork!
        </p>
        <p className="text-2xl text-[#202020] font-semibold mt-2">
          What type of account would you like to create?
        </p>
        <p className="text-base text-[#6A6A6A] mt-1">
          Choose the option that best suits your needs:
        </p>
      </div>

      <div className="space-y-4">
        <label
          className={`flex items-center border ${
            accountType === "freelancer"
              ? "border-[#00EF8B]"
              : "border-[#E9E9E9]"
          } rounded-xl p-4 cursor-pointer`}
        >
          <div className="flex items-center">
            <img
              src={FreelancerIcon}
              alt="Freelancer"
              className="w-10 h-10 mr-4 rounded-lg border border-gray-300 p-2"
            />
            <div>
              <p className="text-xl text-[#4D4D4D] font-medium">
                Freelancer Account
              </p>
              <p className="text-sm text-[#6A6A6A] mt-1">
                Find and apply for projects that match your skills and
                expertise.
              </p>
            </div>
          </div>
          <input
            type="radio"
            name="accountType"
            value="freelancer"
            checked={accountType === "freelancer"}
            onChange={handleAccountTypeChange}
            className="form-radio text-blue-600 h-5 w-5 ml-auto"
          />
        </label>

        <label
          className={`flex items-center border ${
            accountType === "hirer" ? "border-[#00EF8B]" : "border-[#E9E9E9]"
          } rounded-xl p-4 cursor-pointer`}
        >
          <div className="flex items-center">
            <img
              src={HirerIcon}
              alt="Hirer"
              className="w-10 h-10 mr-4 rounded-lg border border-gray-300 p-2"
            />
            <div>
              <p className="text-xl text-[#4D4D4D] font-medium">
                Hirer Account
              </p>
              <p className="text-sm text-[#6A6A6A] mt-1">
                Post projects and connect with top talent to bring your ideas to
                life.
              </p>
            </div>
          </div>
          <input
            type="radio"
            name="accountType"
            value="hirer"
            checked={accountType === "hirer"}
            onChange={handleAccountTypeChange}
            className="form-radio text-blue-600 h-5 w-5 ml-auto"
          />
        </label>
      </div>

      <button
        onClick={handleContinue}
        disabled={!accountType}
        className={`w-full mt-6 ${
          accountType ? "bg-[#00EF8B] hover:bg-[#00EF8B]" : "bg-gray-300"
        } text-[#202020] rounded-full py-3 font-medium text-sm`}
      >
        Continue
      </button>
    </div>
  );
}

AccountType.propTypes = {
  setActive: PropTypes.func.isRequired,
  accountType: PropTypes.string.isRequired,
  setAccountType: PropTypes.func.isRequired,
};
