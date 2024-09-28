import ButtonWithIcon from '../ButtonWithIcon'
import ProfileCard from '../ProfileCard'

const Resume = ({viewOnly}) => {
  return (
    <ProfileCard 
        header={
            <h3 className=''>Résumé</h3>
        }
        body={
            <>{!viewOnly && <div><ButtonWithIcon>Upload Resume</ButtonWithIcon></div>}</>
        }
    />)
}

export default Resume