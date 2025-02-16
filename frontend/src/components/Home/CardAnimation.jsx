import React from 'react'
import { JobsCard } from '@/components/projects/JobsSidebar'
import leftJobCardSvg from '@/assets/Left-job-card.svg'
import middleJobCardSvg from '@/assets/Middle-job-card.svg'
import rightJobCardSvg from '@/assets/Right-job-card.svg'

const jobs = [
    {
        title: "Brand Designer",
        type: "Full-time",
        companyName: "Dropbox",
        companyLocation: "San Francisco, US",
        companyLogo: "/icons/Dropbox-Company-Logo.svg",
        jobDescription: "Dropbox is looking for a Brand Designer to help the team ...",
        tags: ["Design", "Business"]
    },
    {
        title: "Email Marketing",
        type: "contract",
        companyName: "Pitch",
        companyLocation: "Berlin, Germany",
        companyLogo: "/icons/logo-pitch.png",
        jobDescription: "Pitch is looking for Customer Manager to join marketing team ...",
        tags: ["Marketing"]
    },
    {
        title: "Visual Designer",
        type: "Full Time",
        companyName: "Blinkist",
        companyLocation: "Granada, Spain",
        companyLogo: "/icons/Blinkist-Company-Logo.svg",
        jobDescription: "Blinkist is looking for Visual Designer to help marketing team desi ...",
        tags: ["Marketing"]
    }
]

function CardAnimation() {
    return (
        <div className='w-full relative lg:mt-1 md:mr-7'>
            <div className='absolute left-[10%] top-16 w-80 transform  z-1 hidden md:flex'>
                <img src={leftJobCardSvg} alt="" className='block max-w-full' />
            </div>
            <div className='absolute left-[50%] top-4 w-full lg:w-[26rem] transform -translate-x-1/2 z-10'>
                <img src={middleJobCardSvg} alt="" className='block max-w-full' />
            </div>
            <div className='absolute right-[7%] top-10 rotate-3 w-92 transform  z-1 hidden md:flex'>
                <img src={rightJobCardSvg} alt="" className='block max-w-full' />
            </div>
        </div>
    )
}

export default CardAnimation
