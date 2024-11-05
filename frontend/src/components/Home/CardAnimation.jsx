import React,{useState, useEffect} from 'react'
import JobCard from '@/components/Home/JobCard'

const jobListings = [
    {
      company: "Udacity",
      logo: "/icons/udacity-logo.png",
      position: "Brand Designer",
      location: "San Francisco",
      description: "Udacity is looking for Brand Designer to help team create beautiful and functional designs for our products.",
      tag: "Design",
      tagColor: "emerald"
    },
    {
      company: "Pitch",
      logo: "/icons/Pitch-logo.svg",
      position: "Email Marketing",
      location: "Berlin, Germany",
      description: "Pitch is looking for Customer Manager to join marketing team and drive our email campaigns to success.",
      tag: "Marketing",
      tagColor: "orange"
    },
    {
      company: "Coinbase",
      logo: "/icons/Coinbase-logo.svg",
      position: "Visual Designer",
      location: "Granada, Spain",
      description: "Quest is looking for Visual Designer to help team design stunning visuals for our cutting-edge VR experiences.",
      tag: "Design",
      tagColor: "emerald"
    }
  ]

function CardAnimation() {
    const [activeIndex, setActiveIndex] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % jobListings.length)
        }, 3000) // Change card every 3 seconds

        return () => clearInterval(timer)
    }, [])

    return (
        <div className="w-full flex items-center justify-center p-2 sm:p-4 overflow-hidden">
        <div className="mt-12 relative w-[340px] sm:w-[360px] md:w-[380px] lg:w-[400px] h-[300px] sm:h-[450px] xl:h-[500px] mx-auto">
            {jobListings.map((job, index) => (
            <JobCard
                key={index}
                job={job}
                isActive={index === activeIndex}
                direction={index === (activeIndex + 1) % jobListings.length ? 'right' : 'left'}
            />
            ))}
        </div>
        </div>
    )
}

export default CardAnimation
