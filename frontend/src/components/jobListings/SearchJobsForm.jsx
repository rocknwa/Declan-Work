import {useState, useRef} from 'react'
import { Button } from "@/components/ui/button"
import { Search, MapPin } from "lucide-react"
import { LoaderCircle } from 'lucide-react';
import CustomInputDropdown from '../CustomInputDropdown';
import CustomDropdown from '../CustomDropdown';
import CustomDatePicker from '../CustomDatePicker';
import { useForm, Controller } from 'react-hook-form';


function SearchJobsForm({jobs, setJobs, className}) {
    const {control, handleSubmit, reset} = useForm()

    const onSubmit = async (data) => {
        //call api to get various job data
        //const jobs = await getJobs(data)
        //setJobs(jobs)
        //console.log(data)
    }

    const clearAll = () => {
        reset()
    }
    
  return (
    <div className={`flex flex-col m-1 sm:m-2 md:m-4 p-2 ${className}`}>
        <form onSubmit={handleSubmit(onSubmit)}>
        <div className='flex flex-col items-start justify-center p-2 md:p-4'>
            <b className='text-2xl '>Job Matches</b>
            {jobs && <p className='text-sm  text-gray-500'>We found {jobs.length} jobs that match your profile</p>}
        </div>
        <div className='flex custom:flex-col flex-col border-2 border-gray-300 rounded-lg md:m-4 p-2 md:p-4 '>
            <div className='flex custom:flex-col flex-col md:flex-row lg:flex-row items-start justify-between'>
                <div className='flex flex-col md:flex-row place-items-start justify-center w-full md:w-3/5  my-0.5 md:ml-3'>
                    <CustomInputDropdown
                        name="jobTitle"
                        control={control}
                            defaultText="Search job"
                            Icon={SearchComponent}
                            initialOptions={jobData}
                            className="w-full"
                    />
                    <CustomInputDropdown
                        name="location"
                        control={control}
                        defaultText="Work Location"
                        Icon={LocationComponent}
                        initialOptions={locationData}
                        className="w-full"
                    />
                </div>
                <div className='flex items-start justify-center mt-2 md:mt-4 ml-1 md:ml-4'>
                    <Button className='bg-[#21B557] text-white px-4 py-0.5 w-32 rounded-full' type='submit'>Search</Button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-start justify-between py-2 md:py-2 md:px-4'>
                <div className='w-full md:w-3/5 flex '>
                <div className='flex flex-col md:flex-row justify-center mr-1 w-full'>
                    <CustomDropdown control={control} name="company" label="Company" options={["Remote", "In-Office", "Hybrid"]} className="m-1 md:mx-0.5" />
                    <CustomDropdown control={control} name="salaryRange" label="Salary Range" options={["1k-5k", "5k-10k", "10k-15k", "15k-20k", "20k-25k", "25k-30k", "30k-35k", "35k-40k", "40k-45k", "45k-50k"]} className="m-1 md:mx-0.5" />
                </div>
                <div className='flex flex-col md:flex-row justify-center mr-1 w-full'>
                    <CustomDropdown control={control} name="experience" label="Experience" options={["Entry Level", "Mid Level", "Senior Level"]} className="m-1 md:mx-0.5" />
                    <CustomDatePicker control={control} name="datePosted" label="Date Posted" className="m-1 md:mx-0.5 w-full" />
                </div>
                </div>
                <div className='flex justify-end'>
                    <Button className='bg-transparent text-[#21B557] w-16 px-4 py-0.5 hover:bg-transparent focus:bg-transparent active:bg-transparent' onClick={clearAll}>Clear All</Button>
                </div>
            </div>
        </div>
        </form>
        <div className='flex items-center m-4'>
            <span className='mr-2'>All matched {jobs.length} jobs for your experience</span>
            <div className='flex items-start justify-center'>
                <Button className='bg-[#21B557] text-white mx-2 py-0.5 w-32 rounded-full' type='submit'>View Saved</Button>
            </div>
        </div>
    </div>
  )
}

function SearchComponent() {
    return <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
}

function LocationComponent() {
    return <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
}



export default SearchJobsForm