import { DialogDemo } from '@/components/Dialog';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import LocationDialogBody from './LocationDialogBody';
import { Toaster } from '@/components/ui/sonner';
import { showToast } from '@/components/Sonner';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const Location = ({viewOnly}) => {
  const user = useSelector((state) => state.user);

  const [country, setCountry] = useState(user?.country);
  const [city, setCity] = useState(user?.city);

  const handleSave = (newCountry, newCity) => {
    if(newCountry.length != 0 && newCity.length !=0 && newCountry != "" && newCity != "") {
      setCountry(newCountry);
    setCity(newCity);
    showToast({type: "success", message:"Location successfully changed"});
  } else {
    showToast({type: "error", message:"Please select all fields!"});
    }
  };

  const [openCountry, setOpenCountry] = useState(false);
  const [openRegion, setOpenRegion] = useState(false);

  useEffect(() => {
    setCountry(user?.country);
    setCity(user?.city);
  }, [user?.country, user?.city]);
  
  return (
    <div className="flex items-center gap-1">
      <img src="/icons/map-marker.svg" alt="Location icon" />
      <Toaster />
      <p className="text-sm font-semibold mr-1 capitalize">{city}, {country}</p>
      {!viewOnly && <DialogDemo
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
      />}
    </div>
  );
};

export default Location;
