import { Button } from "@/components/ui/button"

const EducationCard = ({ certName, institution, startDate, endDate, }) => {
  return (
        <div className="flex items-center">
            <div className="border p-3 rounded-[10px]">
                <p className="font-semibold text-sm uppercase w-[30ch]">{certName.degree} {certName.areaOfStudy}</p>
                <p className="text-[12px] font-semibold text-[#4D4D4D]">{institution}</p>
                <p className="text-[12px] font-medium">{startDate.year} - {endDate.year}</p>
            </div>
            <div className="">
                <Button className="bg-transparent p-2 hover:bg-transparent">
                    <img src="/icons/multiply-large.svg" alt="" />
                </Button>
            </div>
        </div>
  )
}

export default EducationCard