import { Button } from "../ui/button"

const ProfileInfo = () => {
  const data = {
    name: "Izuchukwu Igwe",
    location: "Lagos, Nigeria",
    occupation: "Product Designer",
    status: "Available",
    rating: 4.5 // Rating value
  }

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex gap-1">
        {Array(fullStars).fill().map((_, index) => (
          <img key={index} src="/icons/star.svg" alt="Full star" />
        ))}
        {hasHalfStar && <img src="/icons/star-half.svg" alt="Half star" />}
        {Array(emptyStars).fill().map((_, index) => (
          <img key={index} src="/icons/star.svg" alt="Empty star" />
        ))}
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[15px] border p-6 flex items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="relative">
              <img src="/assets/profile_img.png" alt="Profile" />
              <div className="bg-success-strong w-3 lg:w-4 lg:h-4 h-3 rounded-full absolute bottom-[1%] right-[4%] border border-white"></div>
            </div>
            <div className="">
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-semibold">{data.name}</h1>
                {renderStars(data.rating)} {/* Render stars based on rating */}
              </div>
              <div>
                <p className="font-normal">{data.occupation}</p>
              </div>
              <div className="flex items-center gap-1">
                <img src="/icons/map-marker.svg" alt="Location icon" />
                <p className="text-sm font-semibold mr-1">{data.location}</p>
                <img src="/icons/pencil-edit.svg" alt="Edit icon" />
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm text-[#21B557] font-medium">
            <p>Status: {data.status}</p>
            <img src="/icons/edit.svg" className="w-4 h-4" alt="Edit" />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full border-accent-success border-[2px]">
              View Public Profile
            </Button>
            <Button className="rounded-full bg-[#17813E] hover:bg-accent-success flex gap-2">
              <img src="/icons/share-alt.svg" alt="Share icon" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileInfo
