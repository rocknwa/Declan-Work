import PropTypes from "prop-types";
import { useState } from "react";

export default function SetProfile({ setActive }) {
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

  const availableSkills = [
    "Communication",
    "Prototyping",
    "Teamwork",
    "Problem Solving",
    "Time Management",
    "Creativity",
  ];

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

  // Function to handle resume file upload
  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  // Function to handle skill input and adding to array when Enter is pressed
  const handleSkillSelect = (e) => {
    const selectedSkill = e.target.value;
    if (selectedSkill && !skills.includes(selectedSkill)) {
      setSkills([...skills, selectedSkill]);
      e.target.value = ""; // Clear the select field
    }
  };


  // Function to remove a skill from array
  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <div className="w-[750px] mx-auto border border-gray-200 rounded-2xl p-8">
      <div className="mb-6">
        <p className="text-2xl font-semibold text-black">Profile Setup</p>
        <p className="text-gray-600 mt-2">
          A complete and well-crafted profile helps you connect with the right
          opportunities and people.
        </p>
      </div>

      {/* Profile Picture Upload */}
      <div className="mb-6">
        <p className="font-semibold text-sm text-black">Profile Picture</p>
        <div className="flex items-center gap-4 mt-2">
          <div className="w-[117px] h-[100px] border border-gray-300 rounded-lg flex items-center justify-center bg-gray-100">
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
          <select
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            className="w-full mt-1 p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none"
          >
            <option>Select your job role</option>
            {jobRoles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <label className="text-sm text-black">Headline</label>
          <input
            type="text"
            value={headline}
            onChange={(e) => setHeadline(e.target.value)}
            placeholder='Add a brief description, e.g., "Product Designer with 5+ years of experience."'
            className="w-full mt-1 p-3 border bg-transparent border-gray-300 rounded-lg focus:outline-none"
          />
        </div>

        <div className="grid gap-4 mt-4">
          <div>
            <label className="text-sm text-black">Country</label>
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full mt-1 p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none"
            >
              <option>Select Country</option>
              {countries.map((countryOption, index) => (
                <option key={index} value={countryOption}>
                  {countryOption}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm text-black">City</label>
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full mt-1 p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none"
            >
              <option>Select City</option>
              {country &&
                cities[country].map((cityOption, index) => (
                  <option key={index} value={cityOption}>
                    {cityOption}
                  </option>
                ))}
            </select>
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
          onChange={(e) => setBio(e.target.value)}
          className="w-full mt-2 p-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none"
          placeholder="Tip: Focus on your skills, experience, and what you’re looking for on Declanwork. Aim for 150-300 words."
          rows="4"
        ></textarea>
      </div>

      {/* Skills Section */}
      <div className="mb-6 border p-4 rounded-md">
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
      </div>

      {/* Upload Resume and Portfolio */}
      <div className="mb-6 border rounded-md p-4">
        <p className="font-semibold text-sm text-black">
          Upload Portfolio and Resume
        </p>
        <div className="mt-2 p-3 border border-dashed border-gray-300 rounded-lg bg-gray-100 text-center">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
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
      </div>

      <button
        className="w-full bg-gray-300 text-white rounded-full py-3 font-medium text-sm"
        onClick={() => setActive("verifyEmail")}
      >
        Continue
      </button>
    </div>
  );
}

SetProfile.propTypes = {
  setActive: PropTypes.func.isRequired,
};
