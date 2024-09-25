import { DialogDemo } from '@/components/Dialog'
import ButtonWithIcon from '../../ButtonWithIcon'
import ProfileCard from '../../ProfileCard'
import SkillsDialogBody from './SkillsDialogBody'
import { Button } from '@/components/ui/button'
import SkillsBody from './SkillsBody'

const Skills = () => {
  return (
      <div className='flex flex-col gap-10'>
        <ProfileCard
            icon={false}
            header={
                <h3 className='font-semibold text-lg'>Skills</h3>
            }
            body={
                <div className='flex flex-col gap-4'>
                  <SkillsBody />
                  <DialogDemo
                    trigger={<div><ButtonWithIcon>Add Skills</ButtonWithIcon></div>}
                    header={"Add Skills "}
                    body={
                      <SkillsDialogBody/>
                    }
                    footer={<Button form="skills-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
                            />
                  </div>
              }
          />
      </div>
  )
}

export default Skills