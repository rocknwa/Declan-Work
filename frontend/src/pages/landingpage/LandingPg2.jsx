import React from 'react'
import TestimonialCarousel from '../../components/Home/TestimonialCarousel'
import CardAnimation from '@/components/Home/CardAnimation'
import { Button } from '@/components/ui/button'

function LandingPg2() {
  return (
    <div className='flex flex-col justify-between items-center w-full px-5 py-2 h-fit'>
        <TestimonialCarousel />
        <div className='px-8 md:p-4 flex flex-col lg:flex-row justify-center items-center md:gap-2 lg:gap-4'>
          <div className='flex flex-col justify-center items-center w-full md:w-3/5'>
            <span className='text-[#21B557] text-2xl md:text-4xl font-bold md:w-3/5 mt-5 lg:mt-7 lg:mb-4'>A diverse range of freelancers from all over the world</span>
            <div className='w-full h-[23rem] md:h-[27rem] relative ml-6 md:ml-0'>
              <CardAnimation />
            </div>
          </div>
          <div className=' lg:w-2/5 flex flex-col justify-center items-start gap-2 md:gap-4 lg:gap-6  lg:mt-20 h-full'>
            <div className='w-full'>
              <p className='lg:w-3/5 text-[#0E4C25] text-2xl md:text-5xl font-bold'>Manage your freelance business like a pro</p>
            </div>
            <div className='text-left w-full '>
              <p className='text-gray-500 text-xl md:text-md'>Everything you need to launch, build and grow your freelance career.</p>
            </div>
            <div className=' place-self-start'>
              <Button className='bg-[#21B557] text-black size-lg sm:size-sm'>Get Started</Button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default LandingPg2
