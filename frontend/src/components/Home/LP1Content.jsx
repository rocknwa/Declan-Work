 // Start of Selection
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";

function LP1Content() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-col justify-center items-center h-full text-center my-auto sm:mb-10 px-4 sm:px-6 lg:px-8">
            <div className="w-full sm:w-4/5 lg:w-2/3">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl text-[#0E4C25] font-bold">
                    Building Bridges Between Talents and Employers
                </h1>
            </div>
            <div className="text-gray-500 text-sm sm:text-lg lg:text-xl mt-4 lg:mt-5 w-full sm:w-3/5">
                <p>
                    Discover a new way to work with Declanwork, the Web3-focused freelance platform designed to connect you with forward-thinking clients. Unlock opportunities, showcase your skills, and get paid securely—all in one place.
                </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center mt-4 lg:mt-5 space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
                <Button 
                    className="w-full sm:w-auto bg-transparent text-black hover:bg-gray-200 px-4 py-2 flex items-center justify-center"
                    onClick={() => navigate('#how-it-works')}
                >
                    <img src="/icons/play.svg" alt="play" className="w-4 h-4 inline-block mr-2"/>
                    How it Works
                </Button>
                <Button 
                    className="w-full sm:w-auto bg-[#21B557] text-black px-4 py-2 rounded-full flex items-center justify-center"
                    onClick={() => navigate('/signup')}
                >
                    Get Started
                </Button>
            </div>
        </div>
    )
}

export default LP1Content