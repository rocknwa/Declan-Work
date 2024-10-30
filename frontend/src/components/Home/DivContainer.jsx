import { useState, useEffect } from 'react';
import DraggableDivs from './DraggableDivs'

// const divs = [
//   { text: "UI/UX DESIGNER", style: { top: '0.2214vh', left: '7.0703vw' }, className: "bg-red-200" },
//   { text: "SOCIAL MEDIA MANAGER", style: { top: '0.2331vh', left: '78.0703vw', fontSize: `calc(1.2rem + min(0, (100vh - 400px) / 2))` }, className: "bg-blue-200 hidden md:block md:top-0" },
//   { text: "FRONTEND DEVELOPER", style: { top: '60.7217vh', left: '75.5902vw' }, className: "bg-green-200" },
//   { text: "BACKEND DEVELOPER", style: { top: '37.9598vh', left: '80.2797vw' }, className: "bg-yellow-200" },
//   { text: "FULLSTACK DEVELOPER", style: { top: '21.5662vh', left: '79.82384vw' }, className: "bg-purple-200 hidden md:block" },
//   { text: "WORDPRESS DEVELOPER", style: { top: '81.3678vh', left: '33.084vw' }, className: "bg-pink-200" },
//   { text: "PRODUCT MANAGER", style: { top: '67.8306vh', left: '3.93605vw' }, className: "bg-indigo-200" },
//   { text: "ML ENGINEER", style: { top: '88.8039vh', left: '60.1598vw' }, className: "bg-gray-200" },
//   { text: "QA TESTER", style: { top: '13.1663vh', left: '4.63702vw' }, className: "bg-orange-200" },
//   { text: "SOLANA DEVELOPER", style: { top: '44.5073vh', left: '1.70784vw' }, className: "bg-teal-200" },
// ];

const divs = [
  {
    text: "UI/UX DESIGNER",
    positions: {
      default: { top: '0.2214vh', left: '7.0703vw' },
      sm: { top: '-2rem', left: '5vw', },
      md: { top: '0.5vh', left: '6vw' },
      lg: { top: '0.2214vh', left: '7.0703vw' }
    },
    className: "bg-red-200 hidden md:block"
  },
  {
    text: "SOCIAL MEDIA MANAGER",
    positions: {
      default: { top: '0.2331vh', left: '78.0703vw' },
      sm: { top: '2vh', left: '50vw' },
      md: { top: '1.5vh', left: '60vw' },
      lg: { top: '0.2331vh', left: '78.0703vw' }
    },
    className: "bg-blue-200 hidden md:block"
  },
  {
    text: "FRONTEND DEVELOPER",
     positions: {
    default: { top: '60.7217vh', left: '75.5902vw' },
    // sm: { top: '1vh', left: '5vw' },
    sm: { top: '-2.3rem', right: '5vw' },
    md: { top: '0.5vh', left: '6vw' },
    lg: { top: '60.7217vh', left: '75.5902vw' }
  },
    className: "bg-green-200 hidden md:block"
  },
  {
    text: "BACKEND DEVELOPER",
    positions: {
      default: { top: '37.9598vh', left: '80.2797vw' },
      sm: { top: '15rem', right: '5vw' },
      md: { top: '38vh', left: '60vw' },
      lg: { top: '37.9598vh', left: '80.2797vw' }
    },
    className: "bg-yellow-200 hidden md:block"
  },
  {
    text: "FULLSTACK DEVELOPER",
    positions: {
      default: { top: '25vh', left: '75vw' },
      sm: { top: '20vh', left: '5vw' },
      md: { top: '22vh', left: '60vw' },
      lg: { top: '25vh', left: '75vw' }
    },
    className: "bg-purple-200 hidden md:block"
  },
  {
    text: "WORDPRESS DEVELOPER",
    positions: {
      default: { top: '80vh', left: '30vw' },
      sm: { top: '70vh', left: '5vw' },
      md: { top: '75vh', left: '20vw' },
      lg: { top: '80vh', left: '30vw' }
    },
    className: "bg-pink-200 hidden md:block"
  },
  {
    text: "PRODUCT MANAGER",
    positions: {
      default: { top: '68vh', left: '5vw' },
      sm: { top: '60vh', left: '10vw' },
      md: { top: '63vh', left: '15vw' },
      lg: { top: '68vh', left: '5vw' }
    },
    className: "bg-indigo-200 hidden md:block"
  },
  {
    text: "ML ENGINEER",
    positions: {
      default: { top: '85vh', left: '60vw' },
      sm: { top: '75vh', left: '40vw' },
      md: { top: '80vh', left: '55vw' },
      lg: { top: '85vh', left: '60vw' }
    },
    className: "bg-gray-200 hidden md:block"
  },
  {
    text: "QA TESTER",
    positions: {
      default: { top: '15vh', left: '10vw' },
      sm: { top: '5rem', left: '8vw' },
      md: { top: '12vh', left: '12vw' },
      lg: { top: '15vh', left: '10vw' }
    },
    className: "bg-orange-200 hidden md:block"
  },
  {
    text: "SOLANA DEVELOPER",
    positions: {
      default: { top: '45vh', left: '3vw' },
      sm: { top: '38vh', left: '6vw' },
      md: { top: '42vh', left: '8vw' },
      lg: { top: '45vh', left: '3vw' }
    },
    className: "bg-teal-200 hidden md:block"
  },
];


function DivContainer() {
  const [screenSize, setScreenSize] = useState('default');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      if (width < 640) setScreenSize('sm');
      else if (width >= 640 && width < 1024) setScreenSize('md');
      else setScreenSize('lg');
    };

    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  return (
    <div className="relative w-full h-full flex justify-center items-center mt-28">
      <div className="w-full h-full">
        {divs.map((div, index) => {
          const { positions } = div;
          const position = positions[screenSize] || positions.default;

          return (
            <DraggableDivs
              key={index}
              className={`${div.className} text-sm md:text-base`}
              style={{ position: 'absolute', ...position }}
              text={div.text}
            />
          );
        })}
      </div>
    </div>
  );
}

export default DivContainer;
