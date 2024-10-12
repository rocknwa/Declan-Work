import { Badge } from "../ui/badge"

const JobsSidebar = () => {
    const jobs = [
        {
            title: "Email Marketing",
            type: "contract",
            companyName: "Pitch",
            companyLocation: "Berlin, Germany",
            companyLogo: "/icons/logo-pitch.png",
            jobDescription: "Pitch is looking for Customer Manager to join marketing t ...",
            tags: ["Design", "Business"]
        },
        {
            title: "Email Marketing",
            type: "Full-time",
            companyName: "Pitch",
            companyLocation: "Berlin, Germany",
            companyLogo: "/icons/logo-r.png",
            jobDescription: "Pitch is looking for Customer Manager to join marketing t ...",
            tags: ["Design", "Business"]
        },
        {
            title: "Email Marketing",
            type: "contract",
            companyName: "Pitch",
            companyLocation: "Berlin, Germany",
            companyLogo: "/icons/logo-pitch.png",
            jobDescription: "Pitch is looking for Customer Manager to join marketing t ...",
            tags: ["Design", "Business"]
        },
        {
            title: "Email Marketing",
            type: "contract",
            companyName: "Pitch",
            companyLocation: "Berlin, Germany",
            companyLogo: "/icons/logo-pitch.png",
            jobDescription: "Pitch is looking for Customer Manager to join marketing t ...",
            tags: ["Design", "Business"]
        },
    ]
  return (
    <div className="bg-[#E9E9E9] text-sm lg:w-[497px] lg:pb-[40px] p-4 rounded-[16px]">
        <p className="font-semibold mb-4">Jobs that match your projects</p>
        <div className="grid grid-cols-2 gap-y-4 gap-x-2">
            { jobs.map(({title, type, companyLogo, companyLocation, companyName, jobDescription, tags}, id) => 
            (<JobsCard 
                key={id} 
                title={title} 
                type={type}
                companyLogo={companyLogo} 
                companyLocation={companyLocation} 
                companyName={companyName} 
                jobDescription={jobDescription} 
                tags={tags}
                />))}
        </div>
    </div>
  )
}

export default JobsSidebar;



export const JobsCard = ({title, companyLogo, type, companyLocation, companyName, jobDescription, tags, className}) => {
  return (
    <div className={`bg-white px-4 py-5 flex flex-col gap-3 rounded-[8px] ${className}`}>
        <div className="flex justify-between items-center">
            <div className="rounded-full flex items-center overflow-hidden"><img className="rounded-full" src={companyLogo} alt="" /></div>
            <Badge className="border-[#00C774] py-1.5 text-[#00C774] capitalize" variant="outline">{type}</Badge>
        </div>
        <div className="flex flex-col gap-1">
            <p className="font-semibold">{title}</p>
            <div className="flex items-center font-medium text-[13px] gap-1 text-[#989898]">
                <p className="">{companyName}</p>
                <img src="/icons/dot-grey.svg" alt="" />
                <p>{companyLocation}</p>
            </div>
        </div>
        <div>
            <p className="text-[#4D4D4D] max-w-[190px] text-[13px]">
                {jobDescription}
            </p>
        </div>
        <div className="flex items-start">
            {tags.map((tag, index)=> (
                <Badge key={index} className="bg-[#EB85331A] hover:bg-[#EB85331A] hover:cursor-default text-[#FFB836] mr-0.5">{tag}</Badge>
            ))}
            
        </div>
    </div>
  )
}