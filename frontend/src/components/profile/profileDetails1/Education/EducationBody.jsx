import { DialogDemo } from "@/components/Dialog"
import EducationCard from "./EducationCard"
import EducationDialogBody from "./EducationDialogBody"
import { Button } from "@/components/ui/button"
import ButtonWithIcon from "../../ButtonWithIcon"

const EducationBody = ({educationData, handleSave}) => {
  return (
    <div className='flex flex-col gap-4'>
        <div className="flex flex-wrap gap-x-10 gap-y-2">
            {
                educationData.map(({certName, institution, startDate, endDate}, id) => (
                    <EducationCard key={id} certName={certName} institution={institution} startDate={startDate} endDate={endDate} />
                ))
            }
        </div>
        <div>
            <DialogDemo
                    trigger={
                        <div><ButtonWithIcon>Add Education</ButtonWithIcon></div>
                    }
                    header={"Add Education"}
                    body={
                    <EducationDialogBody
                        onSave={handleSave} // pass the save handler
                    />
                    }
                    footer={<Button form="education-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
                    />
        </div>
    </div>
  )
}

export default EducationBody