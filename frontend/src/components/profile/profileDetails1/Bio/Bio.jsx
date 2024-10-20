import { DialogDemo } from '@/components/Dialog';
import ProfileCard from '../../ProfileCard';
import { Button } from '@/components/ui/button';
import BioDialogBody from './BioDialogBody';
import { useEffect, useState } from 'react';
import { showToast } from '@/components/Sonner';
import BioBody from './BioBody';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '@/api/profileService';
import { getUser } from '@/api/userService';

const Bio = ({ viewOnly }) => {
  const user = useSelector(state => state.user);
  const [oneLineHeader, setOneLineHeader] = useState(user?.bioTitle || "");
  const [about, setAbout] = useState(user?.bioDescription || "");

  const dispatch = useDispatch();

  const handleSave = async (newOneLineHeader, newAbout) => {
    if (newOneLineHeader.trim() === "" || newAbout.trim() === "") {
      // Show error toast if fields are empty
      showToast({ type: "error", message: "Please fill out all fields before saving." });
    } else {
      try {
        // Set local state first for perceived speed
        setAbout(newAbout);
        setOneLineHeader(newOneLineHeader);

        // Perform the API update
        await updateProfile(dispatch, {
          bio_title: newOneLineHeader,
          bio_description: newAbout,
        });

        // Show success toast after successful API response
        showToast({ type: "success", message: "Bio saved successfully!" });
      } catch (error) {
        // refresh user data after failure
        await getUser(dispatch);

        // Show error toast
        showToast({ type: "error", message: "Something went wrong. Please try again." });
        console.error(error);
      }
    }
  };

  useEffect(() => {
    // Update state when user data changes
    setOneLineHeader(user?.bioTitle || "");
    setAbout(user?.bioDescription || "");
  }, [user]);

  return (
    <ProfileCard
      header={
        <div className="flex justify-between items-center">
          <h3 className="">Bio</h3>
          {!viewOnly && (
            <DialogDemo
              trigger={
                <img
                  className="w-4 h-4 cursor-pointer"
                  src="/icons/edit-black.svg"
                  alt="Edit"
                />
              }
              header={"Edit Bio"}
              body={
                <BioDialogBody
                  initialOneLineHeader={oneLineHeader}
                  initialAbout={about}
                  onSave={handleSave} // pass the save handler
                />
              }
              footer={
                <Button form="bio-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">
                  Save
                </Button>
              }
            />
          )}
        </div>
      }
      body={<BioBody oneLineHeader={oneLineHeader} about={about} />}
    />
  );
};

export default Bio;
