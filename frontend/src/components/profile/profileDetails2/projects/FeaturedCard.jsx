import ProjectCard from "@/components/ProjectCard";

const FeaturedCard = () => {
    const data = [
        {
            projectName: "Mobile App Design",
            client: "Monaco FC",
            rating: 4.5,
            projectStart: "May, 3 2024",
            projectEnd: "June, 3 2024",
        },
        {
            projectName: "Mobile App Design",
            client: "Monaco FC",
            rating: 4.5,
            projectStart: "May, 3 2024",
            projectEnd: "June, 3 2024",
        },
        {
            projectName: "Mobile App Design",
            client: "Monaco FC",
            rating: 4.5,
            projectStart: "May, 3 2024",
            projectEnd: "June, 3 2024",
        },
        {
            projectName: "Mobile App Design",
            client: "Monaco FC",
            rating: 4.5,
            projectStart: "May, 3 2024",
            projectEnd: "June, 3 2024",
        },
    ]
  return (
    <div className='flex flex-wrap gap-2 w-full justify-between'> 
        {
            data.map(({projectName, client, projectEnd, projectStart, rating}, id) => (
                <ProjectCard key={id} projectName={projectName} client={client} projectEnd={projectEnd} projectStart={projectStart} rating={rating} />
            ))  

        }
        
    </div>
  )
}

export default FeaturedCard