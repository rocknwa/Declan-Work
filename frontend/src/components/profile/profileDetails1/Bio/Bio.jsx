import { DialogDemo } from '@/components/Dialog';
import ProfileCard from '../../ProfileCard';
import { Button } from '@/components/ui/button';
import BioDialogBody from './BioDialogBody';
import { useState } from 'react';
import { showToast } from '@/components/Sonner';
import BioBody from './BioBody';

const Bio = ({viewOnly}) => {
  const data = {
    oneLineHeader: "Product Designer with 5 Years of Experience",
    about: `I am a creative and detail-oriented freelance product designer with over 5 years of experience...`,
  };

  const [oneLineHeader, setOneLineHeader] = useState(data.oneLineHeader);
  const [about, setAbout] = useState(data.about);

  const handleSave = (newOneLineHeader, newAbout) => {
    if (newOneLineHeader.trim() === "" || newAbout.trim() === "") {
      // Show error toast if fields are empty
      showToast({ type: "error", message: "Please fill out all fields before saving." });
    } else {
      // Save the data if all fields are valid
      setOneLineHeader(newOneLineHeader);
      setAbout(newAbout);
      showToast({ type: "success", message: "Bio saved successfully!" });
    }
  };

  return (
    <ProfileCard
      header={
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-black">Bio</h3>
          {!viewOnly && <DialogDemo
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
            footer={<Button form="bio-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
          />}
        </div>
      }
      body={<BioBody oneLineHeader={oneLineHeader} about={about} />}
    />
  );
};

export default Bio;
