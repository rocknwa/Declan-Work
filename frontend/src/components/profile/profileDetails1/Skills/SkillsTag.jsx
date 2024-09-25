
const SkillsTag = ({children}) => {
  return (
    <div className="flex hover:cursor-pointer ">
      <div className=" border-[2px] px-2 py-1 rounded-md text-medium hover:bg-grey-50 border-[#6acd8c]">{children}</div>
        <img src="/icons/multiply.svg" alt="" />
    </div>
  )
}

export default SkillsTag