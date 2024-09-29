import { useState } from 'react';
import { LocationComboboxDemo } from './LocationComboBox';

const LocationDialogBody = ({ onSave, setOpenCountry, setOpenRegion }) => {
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(country, region); // Pass the updated values back to the parent
    setOpenCountry(false); // Close the country popover
    setOpenRegion(false); // Close the region popover
  };

  return (
    <form id="location-form" onSubmit={handleSubmit} className="w-full flex flex-col lg:max-w-lg gap-6">
      <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-1.5">
        <LocationComboboxDemo
          country={country}
          region={region}
          setCountry={setCountry}
          setRegion={setRegion}
        />
      </div>
    </form>
  );
};

export default LocationDialogBody;
