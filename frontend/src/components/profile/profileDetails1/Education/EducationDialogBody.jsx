import { useState } from "react";
import { EducationComboboxDemo } from "./EducationComboBox";
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import SelectMonth from "./SelectMonth";
import { YearComboboxDemo } from "./YearComboBox";

const EducationDialogBody = ({ onSave, }) => {
  const [degree, setDegree] =useState("");
  const [areaOfStudy, setAreaOfStudy] =useState("");
  const [institution, setInstitution] = useState("")
  const [startDate, setStartDate] = useState({ month: "", year: "" });
  const [endDate, setEndDate] = useState({ month: "", year: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(degree, areaOfStudy, institution, startDate, endDate); // Pass the updated values back to the parent
  };

  return (
    <form id="education-form" onSubmit={handleSubmit} className="w-full flex flex-col lg:max-w-lg gap-6">
      <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-6">
        <EducationComboboxDemo
            degree={degree}
            areaOfStudy={areaOfStudy}
            institution={institution}
            setDegree={setDegree}
            setAreaOfStudy={setAreaOfStudy}
            setInstitution={setInstitution}
        /> 
        {/* Start and End Date Selectors */}
        <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-4">
          <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-4">
            <div className="lg:max-w-full flex flex-col gap-1.5 items-start justify-between">
              <Label className="ml-3 text-[#6A6A6A]" htmlFor="areaOfStudy">Area of Study</Label>
              <Input
                value={areaOfStudy}
                onChange={(e) => setAreaOfStudy(e.target.value)}
                className="bg-[#FAFAFA] w-lg max-w-lg rounded-[8px] relative"
                maxLength={50}
                id="areaOfStudy"
                placeholder="Ex. Computer Science"
              />
            </div>
            <div className="lg:max-w-full flex flex-col gap-1.5 items-start justify-between">
              <Label className="ml-3 text-[#6A6A6A]" htmlFor="institution">Institution</Label>
              <Input
                value={institution}
                onChange={(e) => setInstitution(e.target.value)}
                className="bg-[#FAFAFA] w-lg max-w-lg rounded-[8px] relative"
                maxLength={50}
                id="institution"
                placeholder="Ex. Alchemy University"
              />
            </div>
            <div>
              <Label className="ml-3 text-[#6A6A6A]" htmlFor="dates">Period</Label>
              <div className="lg:max-w-full flex items-center justify-between">
                <div className="flex gap-1 justify-between">
                  <SelectMonth month={startDate.month} setMonth={setStartDate} />
                  <YearComboboxDemo year={startDate.year} setYear={setStartDate} />
                </div>
                <p>to</p>
                <div className="flex gap-1 justify-between">
                  <SelectMonth month={endDate.month} setMonth={setEndDate} startDate={startDate} isEndDate />
                  <YearComboboxDemo year={endDate.year} setYear={setEndDate} startDate={startDate} isEndDate />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EducationDialogBody;
