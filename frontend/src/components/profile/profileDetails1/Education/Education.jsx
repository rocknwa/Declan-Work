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


  const handleSave = (newCountry, newCity) => {
    if(newCountry.length != 0 && newCity.length !=0 && newCountry != "" && newCity != "") {
      return 
    }
  };

  return (
    <ProfileCard 
        header={
            <h3 className='font-semibold text-lg'>Education</h3>
        }
        body={
            <EducationBody handleSave={handleSave} educationData={data} />
        }
    />
  )
}

export default Education