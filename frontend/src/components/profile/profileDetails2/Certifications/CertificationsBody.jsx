import { DialogDemo } from "@/components/Dialog"
import ButtonWithIcon from "../../ButtonWithIcon"
import CertificationsCard from "./CertificationsCard"
import { Button } from "@/components/ui/button"
import CertificationsDialogDemo from "./CertificationsDialogBody.jsx"

const CertificationsBody = ({ certificationData, handleSave, handleRemove}) => {
  return (
        <div className='text-sm flex mt-4 flex-col gap-4 2xl:text-base'>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
                {
                    certificationData.map(({certName, provider, issueDate, expirationDate, certUrl, certId}, id) => (
                        <CertificationsCard 
                            key={id} 
                            id={id} 
                            certName={certName} 
                            provider={provider} 
                            issueYear={issueDate.year} 
                            expirationYear={expirationDate.year} 
                            handleRemove={handleRemove}
                            />
                    ))
                }
            </div>
            <div>
                <DialogDemo
                    trigger={
                        <div><ButtonWithIcon>Add Certification</ButtonWithIcon></div>
                    }
                    header={"Add Certification"}
                    body={
                        <CertificationsDialogDemo onSave={handleSave} />
                    }
                    footer={<Button form="certification-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
                />
            </div>
        </div>
  )
}

export default CertificationsBody