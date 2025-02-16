
const Portfolio = ({viewOnly}) => {
  return (
    <div className='border flex flex-col gap-2 p-2 lg:p-4 rounded-[10px] '>
        <div className='flex items-center gap-3'>
            <h3 className='font-semibold text-xl'>Portfolio</h3>
            { !viewOnly  && <img src="/icons/edit-black.svg" className='w-4 h-4' alt="" />}
        </div>
        <div>
                <p className='font-semibold text-[#4D4D4D] text-xl mt-3 mb-1'>This feature is coming soon</p>
                <p className='text-sm font-medium'></p>
            </div> 
        {/* <div className=' 2xl:text-base'>
            <p className="flex text-sm sm:text-base text-wrap break-all">https://www.behance.net/izuchukwuigwe1</p>
        </div> */}
    </div>
  )
}

export default Portfolio