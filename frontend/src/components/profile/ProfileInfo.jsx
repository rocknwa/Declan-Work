import { useSelector, useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import SelectAvailability from "./SelectAvailability";
import Location from "./Location/Location";
import { showToast } from '../Sonner';
import { Button } from '../ui/button';
import { updateProfile } from '@/api/profileService';

const ProfileInfo = ({ viewOnly }) => {
  const dispatch = useDispatch();
  
  // Fetch user data from Redux store
  const user = useSelector((state) => state.user);

  // Set availability based on user status
  const [available, setAvailable] = useState(user.status === "available");
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  // Update available state when user data changes
  useEffect(() => {
    setAvailable(user.status === "available");
  }, [user]);

  const handleAvailability = async (newAvailableStatus) => {
    try {
      const updatedStatus = newAvailableStatus ? "available" : "unavailable";
      // percieved speed
      setAvailable(newAvailableStatus); // Update local state
      showToast({ type: "success", message: "Availability successfully updated" });
      // Call updateProfile with new status
      await updateProfile(dispatch, {
        status: updatedStatus,
      });
      
    } catch (error) {
      showToast({ type: "error", message: "Something went wrong" });
      setAvailable(!newAvailableStatus); // Revert local state
      console.error(error);
    }
  };

  // Function to render stars based on rating
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex gap-1">
        {Array(fullStars)
          .fill()
          .map((_, index) => (
            <img key={index} src="/icons/star.svg" alt="Full star" />
          ))}
        {hasHalfStar && <img src="/icons/star-half.svg" alt="Half star" />}
        {Array(emptyStars)
          .fill()
          .map((_, index) => (
            <img key={index} src="/icons/star-empty.svg" alt="Empty star" />
          ))}
      </div>
    );
  };

  return (
    <div>
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-[15px] box-shadow-soft border p-6 flex flex-col lg:flex-row gap-[20px] lg:gap-0 items-center justify-between">
          <div className="flex gap-6 items-center">
            <div className="relative">
              <div className="overflow-hidden rounded-full w-[50px] h-[50px]">
                <img
                  src={user.profileImage || "/assets/sample.png"} // Use user's profile image or fallback
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              {available && (
                <div className="bg-[#059669] w-3 lg:w-4 lg:h-4 h-3 rounded-full absolute bottom-[-1%] right-[3%] border-2 border-white"></div>
              )}
            </div>
            <div>
              <div className="flex lg:items-center gap-3 flex-col lg:flex-row items-start">
                <h1 className="text-xl capitalize font-semibold">{`${user.firstName} ${user.lastName}`}</h1>
                {renderStars(0)}
              </div>
              <div>
                <p className="font-normal">{user.profession}</p>
              </div>
              <Location viewOnly={viewOnly} />
            </div>
          </div>
          <div className="flex items-center relative gap-2 text-sm text-[#21B557] font-medium">
            {viewOnly ? (
              <div className="flex flex-col items-center gap-2">
                <p className="text-[#21B557]">{available ? "Available Now" : "Unavailable"}</p>
                <Button className="px-4 py-2 flex items-center gap-2 hover:bg-accent-success text-white rounded-full bg-[#17813e]">
                  <img src="/icons/sms.svg" alt="" />
                  <span>Get in Touch</span>
                </Button>
              </div>
            ) : (
              <>
                <p>Status: {available ? "Available" : "Unavailable"}</p>
                <img
                  src="/icons/edit.svg"
                  className="w-4 h-4 cursor-pointer"
                  alt="Edit"
                  onClick={() => setIsSelectOpen((prev) => !prev)}
                />
                <SelectAvailability
                  available={available}
                  onSelectChange={(newAvailableStatus) => handleAvailability(newAvailableStatus)}
                  isOpen={isSelectOpen}
                  setIsOpen={setIsSelectOpen}
                />
              </>
            )}
          </div>
          <div className="flex items-center gap-3">
            {!viewOnly && (
              <Button variant="outline" className="rounded-full text-sm sm:text-base border-accent-success border-[2px]">
                <Link to='/public'>View Public Profile</Link>
              </Button>
            )}
            <Button className="rounded-full items-center text-xs px-6 sm:text-base bg-[#17813E] hover:bg-accent-success flex gap-2">
              <img src="/icons/share-alt.svg" alt="Share icon" />
              Share
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
