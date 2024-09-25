import ButtonWithIcon from '../../ButtonWithIcon'
import ProfileCard from '../../ProfileCard'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <ProfileCard 
        header={
            <h3 className='font-semibold text-lg'>Education</h3>
        }
        body={
            <div className='flex flex-col gap-4'>
              <EducationCard />
              <div>
                <ButtonWithIcon>Add Education</ButtonWithIcon>
              </div>
            </div>
        }
    />
  )
}

export default Education