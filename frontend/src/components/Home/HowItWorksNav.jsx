import React, {  useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'

function HowItWorksNav({selectedItem, setSelectedItem}) {
    
    const handleClickedItem = useCallback((item) => {
        setSelectedItem(item)
    }, [setSelectedItem])

  return (
    <nav className='w-full flex flex-wrap justify-center sm:justify-around items-center overflow-x-auto rounded-full bg-white py-2 px-1'>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItem === 'signup' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('signup')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Sign Up</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItem === 'job' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('job')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Job Matching</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItem === 'secure' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('secure')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Transactions</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItem === 'project' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('project')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Projects</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItem === 'feedback' ? 'bg-[#BAE8CB]' : ''}`}  onClick={()=>handleClickedItem('feedback')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Feedback</NavLink>
        </Button>
    </nav>
  )
}

export default HowItWorksNav