 // Start of Selection
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function LP1Content() {
  const navigate = useNavigate();
  return (
    <div className="relative z-1 flex flex-col justify-center items-center  px-4 py-8 mt-10 md:mt-0 md:min-h-screen text-center">
        <div className="w-full max-w-4xl bg-white  backdrop-blur-sm rounded-xl p-4 sm:p-6 md:p-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-[#0E4C25] font-bold leading-tight">
            Building Bridges Between Talents and Employers
          </h1>
          <p className="text-gray-700 text-xs sm:text-sm md:text-base lg:text-lg mt-2 sm:mt-4 md:mt-6 max-w-2xl mx-auto">
            Discover a new way to work with Declanwork, the Web3-focused freelance platform designed to connect you with
            forward-thinking clients. Unlock opportunities, showcase your skills, and get paid securely—all in one place.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center mt-4 sm:mt-6 md:mt-8 space-y-2 sm:space-y-0 sm:space-x-4">
            <Button className="w-8/12 sm:w-auto bg-transparent text-black hover:bg-gray-200 px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base flex items-center justify-center border border-gray-300" onClick={() => {
                navigate('#how-it-works')
                document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })
              }}>
              <img src="/icons/play.svg" alt="play" className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
              How it Works
            </Button>
            <Button className="w-8/12 sm:w-auto bg-[#21B557] text-white hover:bg-[#1a9046] px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base rounded-full" onClick={() => navigate('/signup')}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
  )
}

export default LP1Content
