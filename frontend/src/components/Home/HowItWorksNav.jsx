import {  useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'

function HowItWorksNav({selectedItemTitle, setSelectedItemTitle}) {
    
    const handleClickedItem = useCallback((item) => {
      setSelectedItemTitle(item)
    }, [setSelectedItemTitle])

  return (
    <nav className='flex lg:flex-wrap lg:justify-center items-center overflow-x-hidden gap-x-1 lg:gap-x-2 rounded-full bg-white lg:py-2 px-1'>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItemTitle === 'signup' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('signup')}>
          <NavLink className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Sign Up and Create Profile</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItemTitle === 'job' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('job')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Job Matching</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItemTitle === 'secure' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('secure')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Transactions</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItemTitle === 'project' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('project')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Projects</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 m-1 sm:m-0 sm:px-4 ${selectedItemTitle === 'feedback' ? 'bg-[#BAE8CB]' : ''}`}  onClick={()=>handleClickedItem('feedback')}>
          <NavLink className={`py-1 sm:py-2 text-[#093218] text-xs sm:text-sm md:text-base lg:text-lg rounded-full`}>Feedback</NavLink>
        </Button>
    </nav>
  )
}

export default HowItWorksNav
