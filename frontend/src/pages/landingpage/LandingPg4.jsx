import React, {useState} from 'react'
import HowItWorksNav from '@/components/Home/HowItWorksNav'
import { navItems } from '@/data/LP4StaticData'

function LandingPg4() {
  const [selectedItem, setSelectedItem] = useState('signup')
  return (
    <div className='w-full h-full px-4 md:px-10 lg:px-14 bg-[#21B557] flex flex-col justify-around items-center'>
        <div className='w-full py-10'>
            <span className='text-4xl text-[#093218] font-bold'>How it works</span>
        </div>
        <HowItWorksNav selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        <div className='flex flex-col md:flex-row justify-center items-center text-[#093218] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full'>
          <div className='w-full lg:w-7/12 p-4'>
            {navItems.map((item) => item.title === selectedItem ? 
            <div key={item.title} className='w-full lg:w-4/5 leading-[1.5em] lg:leading-[3rem]'>{item.content}</div> : '')}
          </div>
          <div className='w-full lg:w-5/12 mt-6 lg:mt-0'>
            {selectedItem === 'signup' ? 
              <img src='/icons/sign-in-icon.svg' alt='Sign in icon' className='block max-w-full mx-auto' /> : 
              <img src="/icons/bitcoin-wallet.svg" alt="Bitcoin wallet logo" className='block max-w-full mx-auto' />
            }
          </div>
        </div>
    </div>
  )
}

export default LandingPg4