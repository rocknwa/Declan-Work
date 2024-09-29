
const ProfileCard = ({header, body}) => {
  return (
    <div className=' border flex flex-col gap-5 p-4 rounded-[10px] '>
        <div className='font-semibold text-xl'>
            {header}
        </div>
        <div className=' 2xl:text-base'>
            {body}
        </div>
    </div>
  )
}

export default ProfileCard;