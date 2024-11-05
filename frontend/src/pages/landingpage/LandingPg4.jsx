import React, {useEffect, useState, useCallback} from 'react'
import HowItWorksNav from '@/components/Home/HowItWorksNav'
import { navItems } from '@/data/LP4StaticData'

function LandingPg4() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const goToNext = useCallback(() => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % navItems.length);
  }, []);

  useEffect(() => {
    let intervalId;
    
    if (isAutoPlaying) {
      intervalId = setInterval(goToNext, 5000);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [isAutoPlaying, goToNext]);

  const handleNavSelection = (itemTitle) => {
    const newIndex = navItems.findIndex(item => item.title === itemTitle);
    if (newIndex !== -1) {
      setCurrentIndex(newIndex);
      setIsAutoPlaying(false);
    }
  };

  // Resume auto-rotation after user inactivity
  useEffect(() => {
    if (!isAutoPlaying) {
      const timeoutId = setTimeout(() => {
        setIsAutoPlaying(true);
      }, 10000);
      
      return () => clearTimeout(timeoutId);
    }
  }, [isAutoPlaying]);

  const currentItem = navItems[currentIndex];

  return (
    <div id='how-it-works' className='w-full h-full px-4 md:px-10 lg:px-14 bg-[#21B557] flex flex-col justify-around items-center'>
        <div className='w-full py-10'>
            <span className='text-4xl text-[#093218] font-bold'>How it works</span>
        </div>
        <HowItWorksNav selectedItemTitle={currentItem.title} setSelectedItemTitle={handleNavSelection} />
        <div className='flex [&>*]:min-w-[100%] md:[&>*]:min-w-[unset] flex-col-reverse md:flex-row justify- items-center text-[#093218] font-bold text-5xl w-full'>
          <div className='w-7/12 p-4'>
          <div key={currentItem.title} className='w-full md:w-4/5 text-xl sm:text-2xl md:text-4xl leading-8 md:leading-[3rem]'>
              {currentItem.content}
            </div>
          </div>
          <div className='w-5/12'>
          <img 
            src={currentItem.title === 'signup' ? '/icons/sign-in-icon.svg' : '/icons/bitcoin-wallet.svg'}
            alt={currentItem.title === 'signup' ? 'Sign in icon' : 'Bitcoin wallet logo'}
            className="block max-w-full transition-opacity duration-300 shrink"
          />
          </div>
        </div>
    </div>
  )
}

export default LandingPg4
