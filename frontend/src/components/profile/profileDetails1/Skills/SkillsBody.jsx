
const SkillsBody = ({viewOnly, skills, removeSkill,}) => {
    return (
        <div className='flex flex-wrap min-w-full gap-2'>
            {
              skills.map((skill, id) => (
                <div key={id} className="flex">
                  <div className=" border-[2px] px-2 py-1 rounded-md hover:bg-transparent text-sm lg:text-base border-[#6acd8c]">{skill}</div>
                    { !viewOnly && <img src="/icons/multiply.svg" onClick={() => removeSkill(skill)} className="cursor-pointer " alt="" />}
                </div>
              ))
            }
      </div>
    )
}
  
  export default SkillsBody;

 