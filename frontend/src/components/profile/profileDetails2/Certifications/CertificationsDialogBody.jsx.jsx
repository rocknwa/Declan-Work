import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useState } from "react"
import SelectMonth from "../../profileDetails1/Education/SelectMonth";
import { YearComboboxDemo } from "../../profileDetails1/Education/YearComboBox";

const CertificationsDialogDemo = ({onSave}) => {
  const [ openCertification, setOpenCertification] = useState(false);
  const [certName, setCertName] = useState("");
  const [provider, setProvider] = useState("");
  const [issueDate, setIssueDate] = useState({month: "", year: ""});
  const [expirationDate, setExpirationDate] = useState({month: "", year: ""});
  const [certId, setCertId] = useState("");
  const [certUrl, setCertUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(certName, provider, issueDate, expirationDate, certId, certUrl); // Pass the updated values back to the parent
  };
  return (
    <form id="certification-form" onSubmit={handleSubmit} className="m-auto w-full flex flex-col lg:max-w-lg gap-6">
      <div className={cn("m-auto flex flex-col gap-4", openCertification ? "hidden" : "")}>
          <Button type="button" className='border-[#21B557] border bg-transparent text-black hover:bg-accent-success-500 rounded-full'>Import from Credly</Button>
          <Button type="button" onClick={() => setOpenCertification(true)} className='bg-[#21B557] hover:bg-[#198741] rounded-full'>Add Custom</Button>
      </div>
      {
        openCertification &&
        <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-4">
          <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-4">
            <div className="lg:max-w-full flex flex-col gap-1.5 items-start justify-between">
              <Label className="ml-3 text-[#6A6A6A]" htmlFor="certName">Certification Name</Label>
              <Input
                value={certName}
                onChange={(e) => setCertName(e.target.value)}
                className="bg-[#FAFAFA] w-lg max-w-lg rounded-[8px] relative"
                maxLength={50}
                id="certName"
                placeholder="eg. ALX Software Engineering"
              />
            </div>
            <div className="lg:max-w-full flex flex-col gap-1.5 items-start justify-between">
              <Label className="ml-3 text-[#6A6A6A]" htmlFor="provider">Provider</Label>
              <Input
                value={provider}
                onChange={(e) => setProvider(e.target.value)}
                className="bg-[#FAFAFA] w-lg max-w-lg rounded-[8px] relative"
                maxLength={50}
                id="provider"
                placeholder="eg. ALX"
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <Label className="ml-3 text-[#6A6A6A]" htmlFor="dates">Issue Date</Label>
                <Label className="mr-3 text-[#6A6A6A]" htmlFor="dates">Expiration Date (Optional)</Label>
              </div>
              <div className="lg:max-w-full w-lg flex items-center justify-between">
                <div className="flex gap-1 justify-between">
                  <SelectMonth month={issueDate.month} setMonth={setIssueDate} />
                  <YearComboboxDemo year={issueDate.year} setYear={setIssueDate} />
                </div>
                <div className="flex gap-1 justify-between">
                  <SelectMonth month={expirationDate.month} setMonth={setExpirationDate} startDate={issueDate} isEndDate />
                  <YearComboboxDemo year={expirationDate.year} setYear={setExpirationDate} startDate={issueDate} isEndDate />
                </div>
              </div>
            </div>
            <div className="lg:max-w-full flex flex-col gap-1.5 items-start justify-between">
              <Label className="ml-3 text-[#6A6A6A]" htmlFor="certId">Certification ID (Optional)</Label>
              <Input
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
                className="bg-[#FAFAFA] w-lg max-w-lg rounded-[8px] relative"
                maxLength={50}
                id="certId"
                placeholder=""
              />
            </div>
            <div className="lg:max-w-full flex flex-col gap-1.5 items-start justify-between">
              <Label className="ml-3 text-[#6A6A6A]" htmlFor="certUrl">Certification Url (Optional)</Label>
              <Input
                value={certUrl}
                onChange={(e) => setCertUrl(e.target.value)}
                className="bg-[#FAFAFA] w-lg max-w-lg rounded-[8px] relative"
                maxLength={50}
                id="certUrl"
                placeholder=""
              />
            </div>
          </div>
        </div>
      }
    </form>
  )
}

export default CertificationsDialogDemo