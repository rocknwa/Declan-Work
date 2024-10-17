import React, { useEffect, useCallback } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../ui/button'

function HowItWorksNav({selectedItem, setSelectedItem}) {
    
    const handleClickedItem = useCallback((item) => {
        setSelectedItem(item)
    }, [setSelectedItem])

  return (
    <nav className='w-full flex justify-around items-center rounded-full bg-white py-2 px-1 shrink'>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItem === 'signup' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('signup')}>
          <NavLink className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Sign Up and Create Profile</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItem === 'job' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('job')}>
          <NavLink className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Job Matching</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItem === 'secure' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('secure')}>
          <NavLink className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Secure Transactions</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 py-1 md:px-4 ${selectedItem === 'project' ? 'bg-[#BAE8CB]' : ''}`} onClick={()=>handleClickedItem('project')}>
          <NavLink className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Manage Projects</NavLink>
        </Button>
        <Button className={`bg-transparent hover:bg-[#BAE8CB] px-2 md:px-4 ${selectedItem === 'feedback' ? 'bg-[#BAE8CB]' : ''}`}  onClick={()=>handleClickedItem('feedback')}>
          <NavLink className={`py-2 min-h-[1900px]:px-2 text-[#093218] text-xs md:text-[1.1em] rounded-full`}>Feedbacks and Rating</NavLink>
        </Button>
    </nav>
  )
}

export default HowItWorksNav