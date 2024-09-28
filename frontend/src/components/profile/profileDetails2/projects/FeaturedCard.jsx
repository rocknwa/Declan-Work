
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
      // Function to render stars based on rating
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

        return (
        <div className="flex gap-1">
            {Array(fullStars).fill().map((_, index) => (
            <img key={index} className='w-3 h-3' src="/icons/star.svg" alt="Full star" />
            ))}
            {hasHalfStar && <img className='w-3 h-3' src="/icons/star-half.svg" alt="Half star" />}
            {Array(emptyStars).fill().map((_, index) => (
            <img key={index} className='w-3 h-3' src="/icons/star.svg" alt="Empty star" />
            ))}
        </div>
        );
    }
  return (
    <div className='flex flex-wrap gap-2 w-full'> 
        {
            data.map(({projectName, client, projectEnd, projectStart, rating}, id) => (
                <div key={id} className='rounded-[8px] border w-[383px] justify-between p-[10px] text-sm lg:max-h-[61px] flex flex-col lg:flex-row'> 
                    <div className='flex flex-col gap-1'>
                        <p className='font-bold'>{projectName}</p>
                        <p className=''>Client: {client}</p>
                    </div>
                    <div className='flex flex-col gap-1'>
                        <p className='text-[#989898]'>{projectStart} - {projectEnd}</p>
                        <div className='flex font-medium justify-end items-start lg:items-center gap-2'>
                            Rating
                            {renderStars(rating)}
                        </div>
                    </div>
                </div>
            ))
        }
        
    </div>
  )
}

export default FeaturedCard