import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import SelectAvailability from "./SelectAvailability";
import { useState } from "react";
import Location from "./Location/Location";

const ProfileInfo = () => {
  const data = {
    name: "Izuchukwu Igwe",
    location: "Lagos, Nigeria",
    occupation: "Product Designer",
    available: true,
    rating: 4.5 // Rating value
  }

  const [available, setAvailable] = useState(data.available);
  const [isSelectOpen, setIsSelectOpen] = useState(false);

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
          <img key={index} src="/icons/star-empty.svg" alt="Empty star" />
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
              <div className="overflow-hidden rounded-full w-[50px] h-[50px]">
                <img
                  src="/assets/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#059669] w-3 lg:w-4 lg:h-4 h-3 rounded-full absolute bottom-[-1%] right-[3%] border-2 border-white"></div>
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h1 className="text-xl font-semibold">{data.name}</h1>
                {renderStars(data.rating)} {/* Render stars based on rating */}
              </div>
              <div>
                <p className="font-normal">{data.occupation}</p>
              </div>
              <Location />
            </div>
          </div>
          <div className="flex items-center relative gap-2 text-sm text-[#21B557] font-medium">
            <p>Status: {available ? "Available" : "Unavailable"}</p>
            <img
              src="/icons/edit.svg"
              className="w-4 h-4 cursor-pointer"
              alt="Edit"
              onClick={() => setIsSelectOpen((prev) => !prev)} 
            />
            <SelectAvailability
              available={available}
              onSelectChange={setAvailable} 
              isOpen={isSelectOpen}
              setIsOpen={setIsSelectOpen} 
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-full border-accent-success border-[2px]">
              <Link to='/public'>View Public Profile</Link>
            </Button>
            <Button className="rounded-full bg-[#17813E] hover:bg-accent-success flex gap-2">
              <img src="/icons/share-alt.svg" alt="Share icon" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileInfo;
