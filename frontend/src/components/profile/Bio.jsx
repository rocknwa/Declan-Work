import React from 'react'

const Bio = () => {
  return (
    <div className=' border flex flex-col gap-2 p-5 rounded-[15px] '>
        <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-lg'>Bio</h3>
            <img className='w-4 h-4' src="/icons/edit-black.svg" alt="" />
        </div>
        <div className='text-sm 2xl:text-base'>
            <p>Product Designer with 5 Years of Experience</p>
            <p>I am a creative and detail-oriented freelance product designer with over 5 years of experience crafting user-friendly, visually striking designs. Specializing in UI/UX, branding, and digital experiences, I turn ideas into compelling products that captivate audiences and drive results.

            Having worked with startups and established brands alike, I excel at delivering innovative solutions tailored to your unique needs. Let's collaborate to create something extraordinary that sets your brand apart.</p>
        </div>
    </div>
  )
}

export default Bio