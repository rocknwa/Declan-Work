import React from 'react';
import USFlag from '@/assets/USAFlag.png'

const CountrySelector = () => {
  return (
    <div className="flex items-center space-x-2 bg-[#F0F0F0] rounded-full p-1 w-24 h-[50px] sm:mx-16">
      <div className="w-10 h-10 rounded-full overflow-hidden mx-1">
        <img src={USFlag} alt="Country Flag" className="w-full h-full object-cover" />
      </div>
      <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 1.00005C13 1.00005 8.5811 7 7 7C5.4188 7 1 1 1 1" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );
};

export default CountrySelector;
