import React from 'react'
import {Button} from '@/components/ui/button'
import {useNavigate} from 'react-router-dom'

function AppSuccess() {
    const navigate = useNavigate()
    function handleClick(){
        navigate('/')
    }

  return (
    <div className='flex flex-col justify-center items-center mx-auto my-28'>
        <div>
            <img src="/../../public/icons/congrats.svg" alt="Congratulations image" />
        </div>
        <div className='text-center'>
        <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>Congratulations</h1>
        <p className='text-gray-600 text-sm md:text-base lg:text-lg mt-1'>Your application has been sent out successfully</p>
        <Button className='w-40 lg:w-48 bg-base text-[#21B557] mt-1 h-4 hover:bg-base border-none' onClick={handleClick}>Back to Dashboard</Button>
        </div>
    </div>
  )
}

export default AppSuccess