import SkillsTag from "./SkillsTag";

const SkillsBody = ({oneLineHeader, about}) => {
    return (
        <div className='flex flex-wrap gap-2'>
            <SkillsTag>3D</SkillsTag> <SkillsTag>Illustration</SkillsTag><SkillsTag>Illustration</SkillsTag><SkillsTag>Illustration</SkillsTag><SkillsTag>Illustration</SkillsTag> <SkillsTag>Wireframe</SkillsTag> <SkillsTag>Branding</SkillsTag>
      </div>
    )
  }
  
  export default SkillsBody;