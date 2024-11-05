import { useState, useEffect } from 'react'
import DraggableDivs from '../../components/Home/DraggableDivs'
import LP1Content from '@/components/Home/LP1Content';
import { divs } from '@/data/DraggableDivsPositions';

export default function LandingPage() {
  const [screenSize, setScreenSize] = useState('default')

useEffect(() => {
  const updateScreenSize = () => {
    const width = window.innerWidth
    if (width < 640) setScreenSize('default')
    else if (width >= 640 && width < 1024) setScreenSize('sm')
    else if (width >= 1024 && width < 1280) setScreenSize('md')
    else setScreenSize('lg')
  }

  updateScreenSize()

  window.addEventListener('resize', () => {
    updateScreenSize()
  })

  return () => window.removeEventListener('resize', updateScreenSize)
}, [screenSize])

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      if (width < 640) setScreenSize('default')
      else if (width >= 640 && width < 1024) setScreenSize('sm')
      else if (width >= 1024 && width < 1280) setScreenSize('md')
      else setScreenSize('lg')
    }

    window.addEventListener('resize', updateScreenSize) 
    updateScreenSize()

    return () => window.removeEventListener('resize', updateScreenSize)
  }, [])
  
  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Background divs */}
      <div className="absolute inset-0 hidden md:flex z-10">
        {divs.map((div, index) => {
          const { positions } = div
          const position = positions[screenSize] || positions.default
          return (
            <DraggableDivs
              key={index}
              className={`${div.className} text-[10px] sm:text-xs md:text-sm lg:text-base transition-all duration-300 ease-in-out`}
              style={position}
              text={div.text}
            />
          )
        })}
      </div>
      <LP1Content />
    </div>
  )
}