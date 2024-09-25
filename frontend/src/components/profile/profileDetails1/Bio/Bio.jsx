import { DialogDemo } from '@/components/Dialog';
import ProfileCard from '../../ProfileCard';
import { Button } from '@/components/ui/button';
import BioDialogBody from './BioDialogBody';
import BioBody from './BioBody';
import { useState } from 'react';

const Bio = () => {
  const data = {
    oneLineHeader: "Product Designer with 5 Years of Experience",
    about: `I am a creative and detail-oriented freelance product designer with over 5 years of experience crafting user-friendly, visually striking designs. Specializing in UI/UX, branding, and digital experiences, I turn ideas into compelling products that captivate audiences and drive results. Having worked with startups and established brands alike, I excel at delivering innovative solutions tailored to your unique needs. Lets collaborate to create something extraordinary that sets your brand apart.
    `,
  };

  const [oneLineHeader, setOneLineHeader] = useState(data.oneLineHeader);
  const [about, setAbout] = useState(data.about);

  const handleSave = (newOneLineHeader, newAbout) => {
    setOneLineHeader(newOneLineHeader);
    setAbout(newAbout);
  };

  return (
    <ProfileCard
      header={
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg text-black">Bio</h3>
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
            footer={<Button form="bio-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
          />
        </div>
      }
      body={<BioBody oneLineHeader={oneLineHeader} about={about} />}
    />
  );
};

export default Bio;
