import { useState } from 'react';
import ProfileCard from '../../ProfileCard';
import EducationBody from './EducationBody';
import { showToast } from '@/components/Sonner';

const Education = ({viewOnly}) => {
  const initialData = [
    {
      certName: {
        degree: "Bsc.",
        areaOfStudy: "Computer Science",
      },
      institution: "University of Nigeria",
      startDate: {
        month: "June",
        year: "2021",
      },
      endDate: {
        month: "July",
        year: "2022",
      },
    },
  ];

  const [educationData, setEducationData] = useState(initialData);
  const [degree, setDegree] = useState("");
  const [areaOfStudy, setAreaOfStudy] = useState("");
  const [institution, setInstitution] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // Function to handle saving new education records
  const handleSave = (newDegree, newAreaOfStudy, newInstitution, newStartDate, newEndDate) => {
    // Check if all fields are filled
    if (
      !newDegree || 
      !newAreaOfStudy || 
      !newInstitution || 
      !newStartDate || !newStartDate.month || !newStartDate.year || 
      !newEndDate || !newEndDate.month || !newEndDate.year
    ) {
      // Show error toast if any field is missing
      showToast({ type: "error", message: "Please fill in all fields before saving." });
      return;
    }

    // If all fields are valid, add the new entry to the education data
    setEducationData((prev) => [
      ...prev,
      {
        certName: {
          degree: newDegree,
          areaOfStudy: newAreaOfStudy,
        },
        institution: newInstitution,
        startDate: {
          month: newStartDate.month,
          year: newStartDate.year,
        },
        endDate: {
          month: newEndDate.month,
          year: newEndDate.year,
        },
      },
    ]);

    // Show success toast
    showToast({ type: "success", message: "Education added successfully!" });
  };

  // Function to handle removing education records
  const handleRemove = (index) => {
    const updatedData = educationData.filter((_, i) => i !== index);
    setEducationData(updatedData);
    showToast({ type: "success", message: "Education removed successfully!" });
  };

  return (
    <ProfileCard
      header={<h3 className="">Education</h3>}
      body={
        <EducationBody
          viewOnly={viewOnly}
          degree={degree}
          institution={institution}
          areaOfStudy={areaOfStudy}
          startDate={startDate}
          endDate={endDate}
          setDegree={setDegree}
          setAreaOfStudy={setAreaOfStudy}
          setInstitution={setInstitution}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleSave={handleSave}
          handleRemove={handleRemove} // Pass the remove function
          educationData={educationData}
        />
      }
    />
  );
};

export default Education;
