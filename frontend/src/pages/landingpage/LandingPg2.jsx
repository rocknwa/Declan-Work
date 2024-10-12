import React from 'react'
import TestimonialCarousel from '../../components/Home/TestimonialCarousel'
import { JobsCard } from '@/components/projects/JobsSidebar'

function LandingPg2() {
  return (
    <div className='flex flex-col justify-center items-center w-full'>
        <TestimonialCarousel />
        <div className='flex justify-center items-center w-full'>
          <div className='flex flex-col justify-center items-center'>
            <span className='text-[#21B557]'>A diverse range of freelancers from all over the world</span>
              
          </div>
          <div>

          </div>
        </div>
    </div>
  )
}

export default LandingPg2