import { Button } from "@/components/ui/button"

const CertificationsCard = () => {
    const data= [
        {
            certName: "GRAPHIC DESIGN MASTERCLASS – LEARN GREAT DESIGN BY LINDSAY MARSH",
            issuedBy: "Udemy",
            startYear: 2021,
            endYear: 2022,
        },
        {
            certName: "GRAPHIC DESIGN MASTERCLASS – LEARN GREAT DESIGN BY LINDSAY MARSH",
            issuedBy: "Udemy",
            startYear: 2021,
            endYear: 2022,
        },
        {
            certName: "GRAPHIC DESIGN MASTERCLASS – LEARN GREAT DESIGN BY LINDSAY MARSH",
            issuedBy: "Udemy",
            startYear: 2021,
            endYear: 2022,
        },
    ]
  return (
    <div className="flex flex-wrap gap-x-10 gap-y-2">
        {
            data.map(({certName, issuedBy, startYear, endYear}, id) => (
                <div key={id} className="flex items-center">
                    <div className="border p-3 rounded-[10px]">
                        <p className="font-semibold text-sm uppercase w-[30ch]">{certName}</p>
                        <p className="text-[12px] font-semibold text-[#4D4D4D]">{issuedBy}</p>
                        <p className="text-[12px] font-medium">{startYear} - {endYear}</p>
                        <Button variant="ghost" className="text-[#21B557] hover:bg-transparent h-auto px-0 py-0 m-0">View Certificate  </Button>
                    </div>
                    <div className="">
                        <Button className="bg-transparent p-2 hover:bg-transparent">
                            <img src="/icons/multiply-large.svg" alt="" />
                        </Button>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default CertificationsCard