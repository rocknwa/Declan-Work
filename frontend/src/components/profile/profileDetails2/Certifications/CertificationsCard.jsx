import { Button } from "@/components/ui/button"

const CertificationsCard = ({id, certName, provider, issueYear, expirationYear, handleRemove}) => {
  return (
    <div className="flex items-start min-w-[361px]">
        <div className="flex items-center min-w-[361px]">
          <div className="border p-3 rounded-[10px]">
              <p className="font-semibold text-sm uppercase w-[30ch]">{certName}</p>
              <p className="text-[12px] font-semibold text-[#4D4D4D]">{provider}</p>
              <p className="text-[12px] font-bold">{issueYear} - {expirationYear}</p>
              <Button variant="ghost" className="text-[#21B557] hover:bg-transparent h-auto px-0 py-0 m-0">View Certificate  </Button>
          </div>
          <div className="">
              <Button onClick={() => handleRemove(id)} className="bg-transparent p-2 hover:bg-transparent">
                  <img src="/icons/multiply-large.svg" className='' alt="" />
              </Button>
          </div>
        </div>
    </div>
  )
}

export default CertificationsCard