import { Button } from '@/components/ui/button'
import ButtonWithIcon from '../../ButtonWithIcon'
import FeaturedCard from './FeaturedCard'

const Projects = ({viewOnly}) => {
    const data = {
        projects: {
            monthly: 74,
            alltime: 0,
        }
    }
  return (
    <div className=' border flex flex-col gap-6 p-4 rounded-[10px] '>
        <div className='flex items-center gap-3'>
            <h3 className='font-semibold text-xl'>Projects</h3>
        </div>
        { data.projects.alltime == 0 ?
            <div>
                <p className='font-semibold text-[#4D4D4D] text-xl mb-1'>This feature is coming soon!</p>
                {/* <p className='text-sm font-medium'>Add a project.</p> */}
            </div> :
            <>
                <div className='text-sm 2xl:text-base flex gap-4'>
                    <div className='text-[#4D4D4D] bg-[#E9F8EE] rounded-md py-4 px-4 text-center '>
                        <p className='font-semibold text-xl mb-1'>{data.projects.monthly} projects</p>
                        <p className='text-sm font-medium'>This Month</p>
                    </div>
                    <div className='text-[#4D4D4D] bg-[#E9F8EE] rounded-md py-4 px-4 text-center '>
                        <p className='text-sm font-medium'>All time</p>
                        <p className='font-semibold text-xl mt-1'>{data.projects.alltime} projects</p>
                    </div>
                </div>
                <div>
                    <h4 className='text-sm font-semibold mb-3'><b>Featured</b></h4>
                    <FeaturedCard />
                </div>
            </>
        }
        {/* <div>
            {viewOnly && <Button className="px-4 py-2 flex items-center gap-2 hover:bg-accent-success text-white rounded-full ">View All Projects</Button> }
            {!viewOnly && <ButtonWithIcon>Add Projects to Featured</ButtonWithIcon> }
        </div> */}
    </div>
  )
}

export default Projects