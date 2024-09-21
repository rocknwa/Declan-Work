import React from 'react'

const Portfolio = () => {
  return (
    <div className=' border flex flex-col gap-2 p-5 rounded-[15px] '>
        <div className='flex items-center gap-3'>
            <h3 className='font-semibold text-lg'>Portfolio</h3>
            <img src="/icons/edit-black.svg" className='w-4 h-4' alt="" />
        </div>
        <div className='text-sm 2xl:text-base'>
            <p>Product Designer with 5 Years of Experience</p>
        </div>
    </div>
  )
}

export default Portfolio