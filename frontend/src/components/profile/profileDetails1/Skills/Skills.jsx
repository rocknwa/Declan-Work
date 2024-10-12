import { DialogDemo } from '@/components/Dialog'
import ButtonWithIcon from '../../ButtonWithIcon'
import ProfileCard from '../../ProfileCard'
import SkillsDialogBody from './SkillsDialogBody'
import { Button } from '@/components/ui/button'
import SkillsBody from './SkillsBody'
import { useState } from 'react'
import { showToast } from '@/components/Sonner'

const Skills = ({viewOnly}) => {
  const initialSkills = ['3d', 'Illustration', 'Cinema 4D', 'Photo Manipulation',];
  const[skills, setSkills] = useState(initialSkills);
  const handleSave = (newSkills) => {
    if(newSkills.length == 4) {
      setSkills(newSkills)
      showToast({type: "success", message: "Skills successfully updated!"})
    } else if (newSkills.length < 4) {
      showToast({type: "error", message: "Select up to 4 skills"})
    } else if (newSkills.length > 4) {
      showToast({type: "error", message: "You can only choose 4 skills"})
    }
  }
  const addSkill = (skill) => {
    setSkills(prev => {
      if (prev.includes(skill)) {
        return prev;
      } else {
        return [...prev, skill]
      }})
  }
  const removeSkill = (skillToRemove) => {
    setSkills((prev) => prev.filter(skill => skill !== skillToRemove));
  }
  return (
      <div className='flex flex-col gap-10'>
        <ProfileCard
            icon={false}
            header={
                <h3 className=''>Skills</h3>
            }
            body={
                <div className='flex flex-col gap-4'>
                  <SkillsBody viewOnly={viewOnly} skills={skills} addSkill={addSkill} removeSkill={removeSkill} setSkills={setSkills} />
                  {!viewOnly && <DialogDemo
                    trigger={<div><ButtonWithIcon>Add Skills</ButtonWithIcon></div>}
                    header={"Add Skills "}
                    body={
                      <SkillsDialogBody onSave={handleSave} skills={skills} />
                    }
                    footer={<Button form="skills-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
                            />}
                  </div>
              }
          />
      </div>
  )
}

export default Skills