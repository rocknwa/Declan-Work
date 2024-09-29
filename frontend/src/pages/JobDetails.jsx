import { useEffect, useState } from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import BookmarkButton from '@/components/jobListings/BookmarkButton'
import {JobDetailsData} from '@/data/JobDetailsData'
import BreadCrumb from '@/components/jobListings/BreadCrumb'
import { Button } from '@/components/ui/button'

// TODO: Add job details from backend and remove props and the harcoded values
function JobDetails() {
  const { companyName } = useParams();
  const [job, setJob] = useState(JobDetailsData);
  const navigate = useNavigate();


  const handleNavigate = () => {
    const newPath = `/jobs/${job.companyName}/${job.jobId}/apply`;
    navigate(newPath);
  };

  // useEffect(() => {
  //   fetch(`http://localhost:3000/jobs/${jobId}`)
  //     .then(response => response.json())
  //     .then(data => setJob(data))
  //     .catch(error => console.error('Error fetching job details:', error));
  // }, [jobId]);

  return (
    <div className='flex flex-col min-h-screen p-5'>
      <div className='Apply-Section'>
        <BreadCrumb paths={['jobs', `${job.companyName}`, `${job.jobId}`]} />
        <div className='flex'>
          <div className='flex flex-row justify-start w-full items-center py-0 md:py-2 lg:py-4 pr-2 bg-white'>
            <div className='flex justify-center items-center mr-4 w-10 md:w-15 lg:w-20 custom:w-20'>
              <Avatar className="w-16 h-16 lg:w-20 lg:h-20 aspect-square">
                  <AvatarImage src={job.companyLogo} />
                <AvatarFallback>{job.companyName}</AvatarFallback>
              </Avatar>      
            </div>
            <div className="w-full">
              <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-lg md:text-xl font-bold text-gray-600">{job.jobTitle}</h1>
                <div className="w-12 h-12 flex items-center justify-center border-r-2 border-black"><BookmarkButton jobId={job.jobId} /></div>
              </div>
              <div className="w-full flex flex-col md:flex-row justify-start text-xs md:text-sm custom:text-sm text-gray-600">
                <span> {job.jobType} &nbsp;</span>
                <span>•&nbsp;{job.hours}&nbsp;</span>
                <span> •&nbsp;{job.location}</span>
              </div>
              <div className="w-full flex flex-row justify-between text-xs md:text-sm custom:text-sm">
                <span className="text-gray-800 md:mt-1 md:py-1">Posted {job.postedAt}</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col justify-between items-end m-2 py-2 text-sm lg:text-base'>
            <Button className='rounded-full text-gray-100 w-40 lg:w-48 bg-[#21b552]' onClick={handleNavigate}>Apply Now</Button>
            <div className='text-[#126430] font-bold'>{job.salary}</div>
            <div className='text-[#126430] font-bold'>{job.applicantsCount}</div>
          </div>
        </div>
      </div>
      <div className='flex flex-row text-gray-600 text-xs md:text-sm lg:text-md'>
        <div className='flex flex-col w-2/3'>
          <h1 className='text-2xl font-bold text-gray-700'>About Us</h1>
          <div>
            <p className='py-2 mb-1 pr-6'>{job.aboutUs}</p>
            <hr className="border-t border-gray-300 my-4" aria-hidden="true" />
            <h1 className='text-2xl font-bold text-gray-700 mt-1'>Job Summary</h1>
            <p className='py-2 mb-1 pr-6'>{job.jobSummary}</p>
            <hr className="border-t border-gray-300 my-4" aria-hidden="true" />
          </div>
            <h1 className='text-2xl font-bold text-gray-700 mt-1'>Key Responsibilities</h1>
            <ul className='list-disc py-2 px-6 mb-1'>
              {job.keyResponsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
        </div>
        <div className='flex flex-col gap-5 md:gap-10 w-1/3'>
          <div className='border-2 border-gray-300 rounded-lg p-4'>
            <h1 className='text-2xl font-bold text-gray-700'>Preferred Qualifications</h1>
            <ul className='list-disc py-2 px-6'>
              {job.preferredQualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </div>
          <div className='border-2 border-gray-300 rounded-lg p-4'>
            <h1 className='text-2xl font-bold text-gray-700'>Tools and Technologies</h1>
            <ul className='list-disc px-6 py-2'>
              {job.toolsAndTechnologies.map((tool, index) => (
                <li key={index}>{tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetails