import DraggableDivs from './DraggableDivs'

const divs = [
    { text: "UI/UX DESIGNER", style: { top: '0.2214vh', left: '7.0703vw' }, className: "bg-red-200" },
    { text: "SOCIAL MEDIA MANAGER", style: { top: '0.2331vh', left: '78.0703vw', fontSize: `calc(1.2rem + min(0, (100vh - 400px) / 2))`}, className: "bg-blue-200" },
    { text: "FRONTEND DEVELOPER", style: { top: '60.7217vh', left: '75.5902vw' }, className: "bg-green-200" },
    { text: "BACKEND DEVELOPER", style: { top: '37.9598vh', left: '80.2797vw' }, className: "bg-yellow-200" },
    { text: "FULLSTACK DEVELOPER", style: { top: '21.5662vh', left: '79.82384vw' }, className: "bg-purple-200" },
    { text: "WORDPRESS DEVELOPER", style: { top: '81.3678vh', left: '33.084vw' }, className: "bg-pink-200" },
    { text: "PRODUCT MANAGER", style: { top: '67.8306vh', left: '3.93605vw' }, className: "bg-indigo-200" },
    { text: "ML ENGINEER", style: { top: '88.8039vh', left: '60.1598vw' }, className: "bg-gray-200" },
    { text: "QA TESTER", style: { top: '13.1663vh', left: '4.63702vw' }, className: "bg-orange-200" },
    { text: "SOLANA DEVELOPER", style: { top: '44.5073vh', left: '1.70784vw' }, className: "bg-teal-200" },
  ];

function DivContainer() {
  return (
    <div className="relative w-full  flex justify-center items-center mt-28">
        <div className="w-full h-full">
          {divs.map((div, index) => {
              return (
                <DraggableDivs
                  key={index}
                  className={` ${div.className}`}
                  style={{  position: 'absolute', ...div.style}} 
                  text={div.text}
                  />
              );
          })}
        </div>
      </div>
  )
}

export default DivContainer