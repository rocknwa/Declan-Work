import { DialogDemo } from '@/components/Dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import LocationDialogBody from './LocationDialogBody';
import { Toaster } from '@/components/ui/sonner';

const Location = () => {
  const data = {
    country: "Nigeria",
    city: "Lagos"
  };

  const [country, setCountry] = useState(data.country);
  const [city, setCity] = useState(data.city);

  const handleSave = (newCountry, newCity) => {
    if(newCountry.length != 0 && newCity.length !=0 && newCountry != "" && newCity != "") {
      setCountry(newCountry);
    setCity(newCity);
    }
  };

  const [openCountry, setOpenCountry] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);

  return (
    <div className="flex items-center gap-1">
      <img src="/icons/map-marker.svg" alt="Location icon" />
      <Toaster />
      <p className="text-sm font-semibold mr-1 capitalize">{city}, {country}</p>
      <DialogDemo
        trigger={
          <img src="/icons/pencil-edit.svg" className='cursor-pointer' alt="Edit icon" />
        }
        header={"Select your Location"}
        body={
          <LocationDialogBody
            onSave={handleSave}
            setOpenCountry={setOpenCountry}
            setOpenRegion={setOpenRegion}
          />
        }
        footer={<Button form="location-form" className="bg-[#21B557] hover:bg-accent-success-500 rounded-full">Save</Button>}
      />
    </div>
  );
};

export default Location;
