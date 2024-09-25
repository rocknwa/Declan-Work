import ButtonWithIcon from '../ButtonWithIcon'
import ProfileCard from '../ProfileCard'

const Resume = () => {
  return (
    <ProfileCard 
        header={
            <h3 className='font-semibold text-lg'>Résumé</h3>
        }
        body={
            <div><ButtonWithIcon>Upload Resume</ButtonWithIcon></div>
        }
    />)
}

export default Resume