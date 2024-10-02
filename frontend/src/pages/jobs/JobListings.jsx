import { useEffect, useState } from 'react'
import { JobCardData } from '@/data/JobCardData'
import { useParams } from 'react-router-dom'
import SearchJobsForm from '@/components/jobListings/SearchJobsForm'
import JobCard from '@/components/jobListings/JobCard'
import Pagination from '@/components/jobListings/Pagination'

function JobListings() {
    const [jobs, setJobs] = useState(JobCardData)
    const { companyName } = useParams()

    const [currentPage, setCurrentPage] = useState(1)
    const [jobsPerPage] = useState(6)

    const indexOfLastJob = currentPage * jobsPerPage
    const indexOfFirstJob = indexOfLastJob - jobsPerPage
    const currentJobs = jobs.slice(indexOfFirstJob, indexOfLastJob)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    useEffect(() => {
        if(companyName){
            setJobs(jobs.filter(job => job.companyName === companyName))
        }
    },[])

  return (
    <div className='min-h-screen'>
      <SearchJobsForm jobs={jobs} setJobs={setJobs}/>
      <div className='mx-5 md:mx-10  grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {currentJobs.map(job => (
            <JobCard key={job.id} {...job} />
        ))}
      </div>
      <Pagination
          jobsPerPage={jobsPerPage}
          totalJobs={jobs.length}
          paginate={paginate}
          currentPage={currentPage}
      />
    </div>
  )
}

export default JobListings