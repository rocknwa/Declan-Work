import { ChevronDown } from "lucide-react";
import PropTypes from "prop-types";
import { useState } from "react";

export default function SetProfile({ 
  setActive,
  jobRole,
  setJobRole,
  headline,
  setHeadline,
  country,
  setCountry,
  city,
  setCity,
  bio,
  setBio,
  // skills,
  // setSkills,
  // portfolioLink,
  // setPortfolioLink,
  // resume,
  // setResume,
  profilePic,
  setProfilePic, 
  isLoading,
  handleSignUp,
 }) {
 

  // Sample job roles and locations
  const jobRoles = [
    "Product Designer",
    "Front-End Developer",
    "Back-End Developer",
    "Social Media Manager",
  ];
  const countries = ["Nigeria", "USA", "Canada"];
  const cities = {
    Nigeria: ["Lagos", "Abuja", "Port Harcourt"],
    USA: ["New York", "Los Angeles", "Chicago"],
    Canada: ["Toronto", "Vancouver", "Montreal"],
  };

  // const availableSkills = [
  //   "Communication",
  //   "Prototyping",
  //   "Teamwork",
  //   "Problem Solving",
  //   "Time Management",
  //   "Creativity",
  // ];

  // Function to handle profile picture upload
  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result); // Display the uploaded image
      };
      reader.readAsDataURL(file);
    }
  };

  // // Function to handle resume file upload
  // const handleResumeUpload = (e) => {
  //   setResume(e.target.files[0]);
  // };

  // // Function to handle skill input and adding to array when Enter is pressed
  // const handleSkillSelect = (e) => {
  //   const selectedSkill = e.target.value;
  //   if (selectedSkill && !skills.includes(selectedSkill)) {
  //     setSkills([...skills, selectedSkill]);
  //     e.target.value = ""; // Clear the select field
  //   }
  // };


  // // Function to remove a skill from array
  // const handleRemoveSkill = (skillToRemove) => {
  //   setSkills(skills.filter((skill) => skill !== skillToRemove));
  // };
  
  const allCriteriaMet = jobRole != "" && headline != "" && country != "" && city != "" && bio != "" && bio.length > 100;

  const [errorMessage, setErrorMessage] = useState({
    jobRole : false,
    headline : false,
    country : false,
    city : false,
    bio : false,
  });
  const [signUpError, setSignUpError] = useState("");
  const handleSubmit = async () => {
      setSignUpError("")
      if (jobRole == "") {
        setErrorMessage(prev => ({...prev, jobRole: true}));
      }; if (headline == "") {
        setErrorMessage(prev => ({...prev, headline: true}));
      }; if (country == "") {
        setErrorMessage(prev => ({...prev, country: true}));
      }; if (city == "") {
        setErrorMessage(prev => ({...prev, city: true}));
      }; if (bio == "" || bio.length < 100) {
        setErrorMessage(prev => ({...prev, bio: true}));
      }; if(allCriteriaMet) {
        try {
          const response = await handleSignUp();
          setActive("verifyEmail");
        } catch (error) {
          setSignUpError(error.message);
        }
      }
  }
 
  return (
    <div className="lg:w-[750px] mx-auto border border-gray-200 rounded-2xl p-8">
      <div className="mb-6">
        <p className="text-2xl font-semibold text-black">Profile Setup</p>
        <p className="text-gray-600 mt-2">
          A complete and well-crafted profile helps you connect with the right
          opportunities and people.
        </p>
      </div>

      {/* Profile Picture Upload */}
      <div className="mb-6">
        <p className="font-semibold text-sm text-black">Profile Picture (optional)</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="lg:w-[117px] h-[100px] max-w-[117px] w-full border border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
            {profilePic ? (
              <img
                src={profilePic}
                alt="Profile"
                className="w-full h-full object-cover rounded-lg"
              />
            ) : (
              <span className="text-xs">Upload Image</span>
            )}
          </div>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicUpload}
            className="hidden"
            id="profilePicInput"
          />
          <div className="">
          <label
            htmlFor="profilePicInput"
            className="border border-[#00EF8B] text-[#00EF8B] rounded-full px-4 py-2 text-sm cursor-pointer"
          >
            Upload Image
          </label>
        <p className="text-gray-400 mt-4 text-xs">
          JPEG, PNG, Recommended Size is 400x400 pixels
        </p>
          </div>
        </div>
      </div>

      {/* Basic Information */}
      <div className="mb-6 border p-4 rounded-md">
        <p className="font-semibold text-sm text-black">
          Enter Your Basic Information
        </p>

        <div className="mt-4">
          <label className="text-sm text-black">Job role</label>
          <div className="relative">
          <select
            value={jobRole}
            onChange={(e) => {setJobRole(e.target.value); setErrorMessage(prev => ({...prev, jobRole: false}))}}
            className="w-full mt-1 appearance-none p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none"
          >
            <option>Select your job role</option>
            {jobRoles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute inset-y-0 top-[30%] right-[4%] flex items-center pointer-events-none"  />
          </div>
          {
            errorMessage.jobRole && <p className="text-sm text-red-500 mt-1 ml-2">Select a Job role.</p>
          }
        </div>

        <div className="mt-4">
          <label className="text-sm text-black">Headline</label>
          <input
            type="text"
            value={headline}
            onChange={(e) => {setHeadline(e.target.value); setErrorMessage(pr=> ({...pr, headline:false}))}}
            placeholder='Add a brief description, e.g., "Product Designer with 5+ years of experience."'
            className="w-full mt-1 p-3 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
           {
            errorMessage.headline && <p className="text-sm text-red-500 mt-1 ml-2">This field is required.</p>
          }
        </div>

        <div className="grid gap-4 mt-4">
          <div>
            <label className="text-sm text-black">Country</label>
            <div className="relative">
            <select
              value={country}
              onChange={(e) => {setCountry(e.target.value); setErrorMessage(pr=>({...pr, country:false}))}}
              className="w-full mt-1 p-3 appearance-none bg-transparent border border-gray-300 rounded-lg focus:outline-none"
            >
              <option>Select Country</option>
              {countries.map((countryOption, index) => (
                <option key={index} value={countryOption}>
                  {countryOption}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute inset-y-0 top-[30%] right-[4%] flex items-center pointer-events-none"  />
            </div>
            {
              errorMessage.country && <p className="text-sm text-red-500 mt-1 ml-2">This field is required.</p>
            }
          </div>

          <div>
            <label className="text-sm text-black">City</label>
            <div className="relative">
            <select
              value={city}
              onChange={(e) => {setCity(e.target.value); setErrorMessage(pr=>({...pr, city: false}))}}
              className="w-full mt-1 p-3 appearance-none bg-transparent border border-gray-300 rounded-lg focus:outline-none"
            >
              <option>Select City</option>
              {country &&
                cities[country]?.map((cityOption, index) => (
                  <option key={index} value={cityOption}>
                    {cityOption}
                  </option>
                ))}
                
            </select>
            <ChevronDown className="absolute inset-y-0 top-[30%] right-[4%] flex items-center pointer-events-none"  />
            </div>
            {
              errorMessage.city && <p className="text-sm text-red-500 mt-1 ml-2">This field is required.</p>
            }
          </div>
        </div>
      </div>

      {/* Compelling Bio */}
      <div className="mb-6 border p-4 rounded-md">
        <p className="font-semibold text-sm text-[#010101]">
          Write a Compelling Bio
        </p>
        <p className="text-[#6A6A6A] text-sm my-2">
          This is your chance to showcase who you are, what you do, and what
          makes you unique. A good bio can help attract potential clients,
          partners, or employers.
        </p>
        <textarea
          value={bio}
          onChange={(e) => {setBio(e.target.value); setErrorMessage(pr=>({...pr, bio: false}))}}
          className="w-full lg:h-auto h-[200px] mt-2 p-3 bg-transparent border lg:text-base text-sm border-gray-300 rounded-lg focus:outline-none"
          placeholder="Tip: Focus on your skills, experience, and what you’re looking for on Declanwork. Aim for 150-300 words."
          rows="4"
        ></textarea>
        {
          errorMessage.bio && <p className="text-sm text-red-500 mt-1 ml-2">Bio should not be less than 20 words.</p>
        }
      </div>

      {/* Skills Section */}
      {/* <div className="mb-6 border p-4 rounded-md">
        <p className="font-semibold text-sm text-[#010101]">List Your Skills</p>
        <p className="text-[#6A6A6A] text-sm my-2">
          Add relevant skills that showcase your expertise. This helps your
          profile stand out and makes it easier for others to find you based on
          specific competencies.
        </p>

        <p className="text-black text-sm">
          Tip: Choose skills that align with your professional experience and
          goals
        </p>
        <div className="flex items-center flex-wrap gap-2 mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-200 px-3 py-1 rounded-full flex items-center space-x-2"
            >
              <span>{skill}</span>
              <button
                type="button"
                className="text-red-500"
                onClick={() => handleRemoveSkill(skill)}
              >
                &times;
              </button>
            </div>
          ))}
          <select
            onChange={handleSkillSelect}
            className="flex-grow mt-1 bg-transparent rounded-lg focus:outline-none"
          >
            <option value="">Select a skill</option>
            {availableSkills.map((skill, index) => (
              <option key={index} value={skill}>
                {skill}
              </option>
            ))}
          </select>
        </div>
      </div> */}

      {/* Upload Resume and Portfolio */}
      {/* <div className="mb-6 border rounded-md p-4">
        <p className="font-semibold text-sm text-black">
          Upload Portfolio and Resume
        </p>
        <div className="mt-2 p-3 border border-dashed border-gray-300 rounded-lg bg-gray-100 text-center">
          <input
            type="file"
            accept=".pdf,.doc,.docx,.png,.jpg"
            onChange={handleResumeUpload}
            className="hidden"
            id="resumeInput"
          />
          <label
            htmlFor="resumeInput"
            className="text-gray-500 text-sm cursor-pointer"
          >
            Click to upload or drag and drop
          </label>
          {resume && <p className="text-gray-600 mt-2">{resume.name}</p>}
          <p className="text-gray-400 text-xs mt-1">
            PDF, PNG, JPG or max size: 300-400px
          </p>
        </div>

        <div className="mt-4">
          <label className="text-sm font-semibold text-black">Portfolio Link</label>
          <input
            type="url"
            value={portfolioLink}
            onChange={(e) => setPortfolioLink(e.target.value)}
            placeholder="Enter Portfolio Link"
            className="w-full mt-1 p-3 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div> 
      </div>*/}
      {
        signUpError.length != 0 && <p className="text-red-500"> {signUpError} </p>
      }
      <button
        className={`w-full relative mt-6 ${
          allCriteriaMet ? "bg-[#00EF8B]" :  isLoading ? "bg-gray-300" : ""
        } text-[#202020] rounded-full py-3 font-medium text-sm`}
        disabled={isLoading}
        onClick={() => handleSubmit()}
      >
        Continue
        {isLoading && (
              <img
                src="/icons/spinner.svg"
                className="absolute w-[30px] h-[30px] top-[15%] left-[37%] lg:left-[40%] transition-transform transform rotate-180 repeat-infinite"
                alt="Loading"
              />
            )}
      </button>
    </div>
  );
}

SetProfile.propTypes = {
  setActive: PropTypes.func.isRequired,
  jobRole: PropTypes.string.isRequired,
  setJobRole: PropTypes.func.isRequired,
  headline: PropTypes.string.isRequired,
  setHeadline: PropTypes.func.isRequired,
  country: PropTypes.string.isRequired,
  setCountry: PropTypes.func.isRequired,
  city: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  bio: PropTypes.string.isRequired,
  setBio: PropTypes.func.isRequired,
  // skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  // setSkills: PropTypes.func.isRequired,
  // portfolioLink: PropTypes.string.isRequired,
  // setPortfolioLink: PropTypes.func.isRequired,
  // resume: PropTypes.object, // or PropTypes.instanceOf(File) if you want to be more specific
  // setResume: PropTypes.func.isRequired,
  profilePic: PropTypes.string,
  setProfilePic: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  handleSignUp: PropTypes.func.isRequired,
};
