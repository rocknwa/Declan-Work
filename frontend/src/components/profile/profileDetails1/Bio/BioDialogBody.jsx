import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const BioDialogBody = ({ initialOneLineHeader, initialAbout, onSave }) => {
  const [oneLineHeader, setOneLineHeader] = useState(initialOneLineHeader);
  const [about, setAbout] = useState(initialAbout);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(oneLineHeader, about); // Pass the updated values back to the parent
  };

  return (
    <form id="bio-form" onSubmit={handleSubmit} className="w-full flex flex-col lg:max-w-lg gap-6">
      <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-1.5">
        <Label className="ml-3 text-[#6A6A6A]" htmlFor="onelineheader">One Line Header</Label>
        <Input
          value={oneLineHeader}
          onChange={(e) => setOneLineHeader(e.target.value)}
          className="bg-[#FAFAFA] w-lg max-w-lg rounded-[8px] relative"
          maxLength={50}
          id="onelineheader"
          placeholder="e.g Product Designer with 5 years Of Experience"
        />
        <span className="absolute text-[#BABABA] text-[12px] bottom-[20%] right-[2%]">
          {50 - oneLineHeader.length}/50
        </span>
      </div>
      <div className="grid w-full lg:max-w-full sm:max-w-sm relative items-center gap-1.5">
        <Label className="ml-3 text-[#6A6A6A]" htmlFor="about">About You</Label>
        <textarea
          maxLength={600}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          className="bg-[#FAFAFA] flex w-full rounded-[8px] border border-input px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          id="about"
          placeholder="Write about yourself"
          rows="10"
        ></textarea>
        <span className="absolute text-[#BABABA] text-[12px] bottom-[2%] right-[2%]">
          {600 - about.length}/600
        </span>
      </div>
    </form>
  );
};

export default BioDialogBody;
