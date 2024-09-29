import ActiveProjectCard from "./ActiveProjectCard"

const ActiveProjects = () => {
    const activeProjects = [
        {
            projectTitle: "Mobile App Design",
            client: "Monaco FC",
            milestones: {
                current: 3,
                total: 4,
            },
            deliveredIn: "7 days"
        },
        {
            projectTitle: "Mobile App Design",
            client: "Monaco FC",
            milestones: {
                current: 3,
                total: 4,
            },
            deliveredIn: "7 days"
        },
        {
            projectTitle: "Mobile App Design",
            client: "Monaco FC",
            milestones: {
                current: 3,
                total: 4,
            },
            deliveredIn: "7 days"
        },
        {
            projectTitle: "Mobile App Design",
            client: "Monaco FC",
            milestones: {
                current: 3,
                total: 4,
            },
            deliveredIn: "7 days"
        },
        {
            projectTitle: "Mobile App Design",
            client: "Monaco FC",
            milestones: {
                current: 3,
                total: 4,
            },
            deliveredIn: "7 days"
        },
        {
            projectTitle: "Mobile App Design",
            client: "Monaco FC",
            milestones: {
                current: 3,
                total: 4,
            },
            deliveredIn: "7 days"
        },
    ]
  return (
        <div className="flex flex-col gap-4">
            {
                activeProjects.map(({projectTitle, client, milestones, deliveredIn}, id) => (
                    <ActiveProjectCard 
                        key={id} 
                        projectTitle={projectTitle} 
                        client={client} 
                        milestones={milestones}
                        deliveredIn={deliveredIn}
                          />
                ))
            }
        </div>
  )
}

export default ActiveProjects