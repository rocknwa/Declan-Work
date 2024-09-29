
const BioBody = ({oneLineHeader, about}) => {
  return (
    <div className='flex flex-col gap-2'>
        <p className="font-medium">{oneLineHeader}</p>
        <p>{about}</p>
    </div>
  )
}

export default BioBody