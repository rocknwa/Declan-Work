import { useState } from 'react';
import ProfileCard from '../../ProfileCard'
import EducationBody from './EducationBody'

const Education = () => {
  const data= [
      {
          certName: {
            degree: "Bsc.",
            areaOfStudy: "Computer Science"
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
      {
          certName: {
            degree: "Bsc.",
            areaOfStudy: "Computer Science"
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
      {
          certName: {
            degree: "Bsc.",
            areaOfStudy: "Computer Science"
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
    const [educationData, setEducationData] = useState(data)
    const [degree, setDegree] =useState("");
    const [areaOfStudy, setAreaOfStudy] =useState("");
    const [institution, setInstitution] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")

  const handleSave = (newDegree, newAreaOfStudy, newInstitution, newStartDate, newEndDate) => {
    if(newDegree.length != 0 && newAreaOfStudy.length !=0 && newInstitution.length !=0 && newDegree != "" && newAreaOfStudy != "" && newInstitution != "") {
      setEducationData((prev) => {
        return [...prev, {
            certName: {
              degree: newDegree,
              areaOfStudy: newAreaOfStudy
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
        }]
      }) 
    }
  };

  return (
    <ProfileCard 
        header={
            <h3 className='font-semibold text-lg'>Education</h3>
        }
        body={
            <EducationBody 
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
              educationData={educationData}
              setEducationData={setEducationData} />
        }
    />
  )
}

export default Education