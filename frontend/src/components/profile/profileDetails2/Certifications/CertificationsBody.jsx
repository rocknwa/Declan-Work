import { DialogDemo } from "@/components/Dialog"
import ButtonWithIcon from "../../ButtonWithIcon"
import CertificationsCard from "./CertificationsCard"
import { Button } from "@/components/ui/button"
import CertificationsDialogDemo from "./CertificationsDialogBody.jsx"

const CertificationsBody = ({ viewOnly, certificationData, handleSave, handleRemove}) => {
  return (
        <div className='flex mt-4 flex-col gap-4 2xl:text-base'>
            <div className="flex flex-wrap gap-x-10 gap-y-2">
                {
                    certificationData.length != 0 ? certificationData.map(({certName, provider, issueDate, expirationDate, certUrl, certId}, id) => (
                        <CertificationsCard 
                            viewOnly={viewOnly}
                            key={id} 
                            id={id} 
                            certName={certName} 
                            provider={provider} 
                            issueYear={issueDate.year} 
                            expirationYear={expirationDate.year} 
                            handleRemove={handleRemove}
                            />
                    )) :
                    <div className="mt-[-20px] w-full px-4 py-6 text-center">
                        <p className="font-semibold text-xl text-[#4b4b4b]">Add your Certifications</p>
                        <p>Help showcase your expertise, build credibility!</p>
                    </div>
                }
            </div>
            <div>
                 { !viewOnly &&<DialogDemo
                    trigger={
                        <div><ButtonWithIcon>Add Certification</ButtonWithIcon></div>
                    }
                    header={"Add Certification"}
                    body={
                        <CertificationsDialogDemo onSave={handleSave} />
                    }
                    footer={<Button form="certification-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
                />}
            </div>
        </div>
  )
}

export default CertificationsBody