import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  import { useEffect, useRef, useState } from "react"

  const cards =[
    {name: "Near", image: "/icons/near-company-icon.svg"},
    {name: "Lisk", image: "/icons/lisk-logo.svg"},
    {name: "Near", image: "/icons/near-company-icon.svg"},
    {name: "Lisk", image: "/icons/lisk-logo.svg"},
    {name: "Near", image: "/icons/near-company-icon.svg"},
    {name: "Lisk", image: "/icons/lisk-logo.svg"},
    {name: "Near", image: "/icons/near-company-icon.svg"},
    {name: "Lisk", image: "/icons/lisk-logo.svg"},
    {name: "Near", image: "/icons/near-company-icon.svg"},
    {name: "Lisk", image: "/icons/lisk-logo.svg"},
    {name: "Near", image: "/icons/near-company-icon.svg"},
    {name: "Lisk", image: "/icons/lisk-logo.svg"},
    {name: "Near", image: "/icons/near-company-icon.svg"},
    {name: "Lisk", image: "/icons/lisk-logo.svg"},
  ]

function Card({name, image}){
    return(
        <div className="flex items-center justify-center mr-2 rounded-full bg-[#E9F8EE] p-2">
            <Avatar>
                <AvatarImage src={image} alt={name} />
                <AvatarFallback>{name}</AvatarFallback>
            </Avatar>
            <h1 className="text-lg text-center">{name}</h1>
        </div>
    )
}

function TestimonialCarousel() {
    const [items, setItems] = useState(cards)
    const containerRef = useRef(null)
  
    useEffect(() => {
      const container = containerRef.current
      if (!container) return
  
      const scroll = () => {
        container.scrollLeft += 1
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0
        }
      }
  
      const intervalId = setInterval(scroll, 20)
      return () => clearInterval(intervalId)
    }, [])
    return(
        <div className="w-full max-w-8xl mx-auto p-4">
            <h2 className="text-center text-lg font-semibold text-[#0E4C25] mb-4">
                Trusted by Industry leaders
            </h2>
            <div ref={containerRef} className="flex overflow-hidden">
                <div className="flex space-x-8 animate-scroll">
                {[...items, ...items].map((item, index) => (
                    <div key={index} className="flex flex-col items-center">
                    <Card name={item.name} image={item.image} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default TestimonialCarousel