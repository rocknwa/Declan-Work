import { Button } from '@/components/ui/button'
import ButtonWithIcon from '../../ButtonWithIcon'
import FeaturedCard from './FeaturedCard'

const Projects = ({viewOnly}) => {
    const data = {
        projects: {
            monthly: 74,
            alltime: 343,
        }
    }
  return (
    <div className=' border flex flex-col gap-6 p-4 rounded-[10px] '>
        <div className='flex items-center gap-3'>
            <h3 className='font-semibold text-lg'>Projects</h3>
        </div>
        <div className='text-sm 2xl:text-base flex gap-4'>
            <div className='text-[#4D4D4D] bg-[#E9F8EE] rounded-md py-4 px-2 text-center max-w-[150px]'>
                <p className='font-semibold text-xl mb-1'>{data.projects.monthly} projects</p>
                <p className='text-sm'>This Month</p>
            </div>
            <div className='text-[#4D4D4D] bg-[#E9F8EE] rounded-md py-4 px-2 text-center max-w-[150px]'>
                <p className='text-sm'>Al time</p>
                <p className='font-semibold text-xl mt-1'>{data.projects.alltime} projects</p>
            </div>
        </div>
        <div>
            <h4 className='text-sm font-semibold mb-3'><b>Featured</b></h4>
            <FeaturedCard />
        </div>
        <div>
            {viewOnly && <Button>View All Projects</Button> }
            {!viewOnly && <ButtonWithIcon>Add Projects to Featured</ButtonWithIcon> }
        </div>
    </div>
  )
}

export default Projects