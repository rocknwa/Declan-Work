import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import BookmarkButton from "./BookmarkButton"
import {useNavigate} from "react-router-dom"

function JobCard({jobTitle, companyName, companyLogo, location, salary, postedAt, jobType, jobId}) {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/jobs/${companyName}/${jobId}`);
    }

  return (
    <div className='flex flex-row justify-start w-full items-center p-4 bg-white rounded-lg border border-gray-300'>
        <div className='flex justify-center items-center mr-4 w-10 md:w-15 lg:w-20 custom:w-20'>
        <Avatar className="w-16 h-16 aspect-square">
            <AvatarImage src={companyLogo} />
            <AvatarFallback>{companyName}</AvatarFallback>
        </Avatar>
        </div>
        <div className="w-full">
            <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-md md:text-lg font-bold text-gray-600 custom:text-lg cursor-pointer" onClick={handleClick}>{jobTitle}</h1>
                <BookmarkButton jobId={jobId} />
            </div>
            <div className="w-full flex flex-col md:flex-row justify-start text-xs md:text-sm custom:text-sm">
                <span className="ml-2 sm:ml-0 font-bold text-gray-600">{companyName}&nbsp;</span>
                <span className="text-gray-600"> •&nbsp;{jobType} </span>
                <span className='text-[#21B557] font-bold'> •&nbsp;{salary}</span>
            </div>
            <div className="w-full flex flex-row justify-between text-xs md:text-sm custom:text-sm">
                <span className="bg-gray-200 mt-1 rounded-md px-2 py-1">{location}</span>
                <span className="text-gray-500 mt-1 px-2 py-1">Posted at: {postedAt}</span>
            </div>
        </div>
    </div>
  )
}

export default JobCard