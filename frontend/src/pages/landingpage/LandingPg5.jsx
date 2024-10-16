import React,{useState, useCallback, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { topSkills } from '@/data/SkillsData'

function LandingPg5() {
    const [selectedItem, setSelectedItem] = useState('top-skills')
    const [data, setData] = useState(topSkills)
    //const [dataSize, setDataSize] = useState(0)

    useEffect(() => {
        /*
        fetch('api/top-skills').then(res => res.json()).then(data => {
            setData(data)
            if(data.length/3 > 13){ logic }
            else setDataSize(Math.ceil(data.length/3))
        })
        */
    }, [])
    const handleClick = useCallback((item) =>{
        setSelectedItem(item)
        //Data fetching logic based on the item selected
    }, [])

  return (
    <div className='w-full h-full  p-2 md:px-4 md:py-6 lg:px-10 lg:py-12 bg-[#E9F8EE] flex justify-around items-center'>
        <div className='flex flex-col justify-start items-start w-1/4 place-self-start gap-7'>
            <Button className={`bg-transparent hover:bg-transparent justify-start items-start`} onClick={()=>handleClick('top-skills')}>
                <NavLink className={`text-[#0E4C25] font-bold text-2xl md:text-3xl text-left ${selectedItem === 'top-skills' ? '' : 'opacity-45'}`}>Top Skills</NavLink>
            </Button>
            <Button className={`bg-transparent hover:bg-transparent`} onClick={()=>handleClick('trending-skills')}>
                <NavLink className={`text-[#0E4C25] font-bold text-2xl md:text-3xl ${selectedItem === 'trending-skills' ? '' : 'opacity-45'}`}>Trending Skills</NavLink>
            </Button>
            <Button className={`bg-transparent hover:bg-transparent`} onClick={()=>handleClick('project-catalog')}>
                <NavLink className={`text-[#0E4C25] font-bold text-2xl md:text-3xl ${selectedItem === 'project-catalog' ? '' : 'opacity-45'}`}>Project Catalog</NavLink>
            </Button>
            <Button className={`bg-transparent hover:bg-transparent`} onClick={()=>handleClick('regions')}>
                <NavLink className={`text-[#0E4C25] font-bold text-2xl md:text-3xl ${selectedItem === 'regions' ? '' : 'opacity-45'}`}>Regions</NavLink>
            </Button>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-3/4'>
            {data.map((item, index) => (
                <div key={index} className='py-1 md:p-1'>
                    <p className='text-[#0E4C25] font-bold text-xl text-center'>{item}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default LandingPg5