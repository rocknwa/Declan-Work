import { useState } from 'react';
import { LocationComboboxDemo } from './LocationComboBox';

const LocationDialogBody = ({ onSave, setOpenCountry, setOpenRegion }) => {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(country.name, city.name); // Pass the updated values back to the parent
    setOpenCountry(false); // Close the country popover
    setOpenRegion(false); // Close the city popover
  };

  return (
    <form id="location-form" onSubmit={handleSubmit} className="w-full flex flex-col lg:max-w-lg gap-6">
      <div className="grid w-full relative lg:max-w-full sm:max-w-sm items-center gap-1.5">
        <LocationComboboxDemo
          country={country}
          city={city}
          setCountry={setCountry}
          setCity={setCity}
        />
      </div>
    </form>
  );
};

export default LocationDialogBody;
