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
        <div className='flex justify- items-center text-[#093218] font-bold text-5xl w-full'>
          <div className='w-7/12 p-4'>
            {navItems.map((item) => item.title === selectedItem ? 
            <div key={item.title} className='w-4/5 leading-[3rem]'>{item.content} </div> : '') }
          </div>
          <div className='w-5/12'>
            {selectedItem === 'signup' ? <img src='/icons/sign-in-icon.svg' alt='Sign in icon' className='block max-w-full'/> : <img src="/icons/bitcoin-wallet.svg" alt="Bitcoin wallet logo" className='block max-w-full'/>}
          </div>
        </div>
    </div>
  )
}

export default LandingPg4