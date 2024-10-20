import { Button } from "@/components/ui/button"
import logo_nu from '@/assets/logo-nu.png'
import { NavLink } from "react-router-dom"

const Applications = () => {
    const projectApplicationsData = [
        // {
        //     jobTitle: "Interactive Developer",
        //     company: "MAZA",
        //     type: "Contract",
        //     salaryRange: "$900,00 - $1000,00",
        //     location: "Lagos, Nigeria",
        //     timePosted: "3 mins. ago",
        //     logoUrl: logo_nu,
        // },
        // {
        //     jobTitle: "Interactive Developer",
        //     company: "MAZA",
        //     type: "Contract",
        //     salaryRange: "$900,00 - $1000,00",
        //     location: "Lagos, Nigeria",
        //     timePosted: "3 mins. ago",
        //     logoUrl: logo_nu,
        // },
        // {
        //     jobTitle: "Interactive Developer",
        //     company: "MAZA",
        //     type: "Contract",
        //     salaryRange: "$900,00 - $1000,00",
        //     location: "Lagos, Nigeria",
        //     timePosted: "3 mins. ago",
        //     logoUrl: logo_nu,
        // },
        // {
        //     jobTitle: "Interactive Developer",
        //     company: "MAZA",
        //     type: "Contract",
        //     salaryRange: "$900,00 - $1000,00",
        //     location: "Lagos, Nigeria",
        //     timePosted: "3 mins. ago",
        //     logoUrl: logo_nu,
        // },
        // {
        //     jobTitle: "Interactive Developer",
        //     company: "MAZA",
        //     type: "Contract",
        //     salaryRange: "$900,00 - $1000,00",
        //     location: "Lagos, Nigeria",
        //     timePosted: "3 mins. ago",
        //     logoUrl: logo_nu,
        // },
        // {
        //     jobTitle: "Interactive Developer",
        //     company: "MAZA",
        //     type: "Contract",
        //     salaryRange: "$900,00 - $1000,00",
        //     location: "Lagos, Nigeria",
        //     timePosted: "3 mins. ago",
        //     logoUrl: logo_nu,
        // },
    ]
    return (
        <div className="flex flex-col gap-2 w-full">
            {
                projectApplicationsData.length != 0 ?
                <div>
                    {projectApplicationsData.map(({ jobTitle, company, type, salaryRange, location, timePosted, logoUrl }, id) => (
                        <JobCard key={id} jobTitle={jobTitle} company={company} type={type} salaryRange={salaryRange} location={location} timePosted={timePosted} logoUrl={logoUrl} />
                    ))}
                </div> :
                <div className="w-full min-h-full flex flex-col gap-2 py-10 lg:p-20 items-center">
                    <p className="text-2xl text-center font-semibold">You have not applied to any opportunity</p>
                    <NavLink to="/jobs"><Button className="hover:bg-[#277042]">Find jobs</Button></NavLink>
                </div>
            }
        </div>
    )
}

export default Applications


const JobCard = ({ jobTitle, company, type, salaryRange, location, timePosted, logoUrl }) => {
    return (
        <div className="flex gap-6 bg-[#fff] w-full items-center md:flex-row ">
            <div className="flex flex-col md:flex-row justify-between max-w-[600px] w-full border border-[#E9E9E9] gap-4 p-4 rounded-[8px]">
                <div className="flex gap-2">
                    <div className="rounded-full w-[70px] h-[70px] overflow-hidden">
                        <img src={logoUrl} className="rounded-full" alt="Company logo" />
                    </div>
                    <div className="flex flex-col items-start gap-1.5">
                        <p className="font-semibold text-xl">{jobTitle}</p>
                        <div className="flex text-sm text-[#515B6F] gap-2">
                            <p className="font-bold uppercase">{company}</p>
                            <img src="/icons/dot.svg" alt="" />
                            <p>{type}</p>
                            <img src="/icons/dot.svg" alt="" />
                            <p className="text-[#126430] font-semibold">{salaryRange}</p>
                        </div>
                        <div className="bg-[#F4F4F5] text-[#4D4D4D] text-sm px-2 items-center flex rounded">{location}</div>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    <div className="cursor-pointer rounded-full flex items-center justify-center">
                        <img src="/icons/bookmark.svg" alt="" />
                    </div>
                    <p className="text-[12px] text-[#515B6F]">Posted: {timePosted}</p>
                </div>
            </div>
            <div>
                <Button className="px-8 hover:bg-[#17813E] py-2">Cancel</Button>
            </div>
        </div>
    )
}
