
const ActiveProjectCard = ({projectTitle, client, milestones, deliveredIn}) => {
  return (
    <div className="border text-sm flex justify-between w-full rounded-[12px] p-[10px] border-[#4DC479]">
        <div className="flex flex-col gap-2">
            <p className="font-semibold text-black">{projectTitle}</p>
            <div className="flex gap-2 text-[#4D4D4D] items-center">
                <p>Client: {client}</p>
                <img src="/assets/client.png" alt="" />
            </div>
        </div>
        <div className="flex flex-col items-center gap-2">
            <p>Milestones</p>
            <p className="font-semibold text-[#6A6A6A]">{milestones.current}/{milestones.total}</p>
        </div>
        <div className="flex items-center flex-col gap-2">
            <p>Delivered In</p>
            <p className="font-semibold text-[#6A6A6A]">{deliveredIn}</p>
        </div>
    </div>
  )
}

export default ActiveProjectCard