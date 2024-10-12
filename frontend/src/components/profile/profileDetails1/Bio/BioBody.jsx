
const BioBody = ({oneLineHeader, about}) => {
  return (
    <div className='flex flex-col gap-2'>
        <p className="font-medium break-all">{oneLineHeader}</p>
        <p className="break-words">{about}</p>
    </div>
  )
}

export default BioBody