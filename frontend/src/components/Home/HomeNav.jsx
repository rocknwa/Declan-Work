import { NavLink, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useNavigate } from 'react-router-dom';
import Hamburger from '../Hamburger';

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-white border-b border-[#E9E9E9]">
      <div className="max-w-full mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <NavLink to="/Home" className="flex-shrink-0">
              <img src="/icons/declan-logo-dashboard.svg" alt="Declan logo" />
            </NavLink>
          <div className="hidden space-x-1 md:ml-1 md:space-x-3 lg:ml-3 md:flex lg:space-x-5 lg:ml-5 xl:space-x-7">
            <NavLink
              to="/Home"
                className= "inline-flex font-bold items-center text-xs lg:text-sm text-[#0E4C25]"
              >
              Home
            </NavLink>                
            <NavLink
              to="/jobs"
              className= "inline-flex font-bold items-center text-xs lg:text-sm text-[#0E4C25]"
            >
              Job Listings
            </NavLink>
            <NavLink
              to="#how-it-works"
              className= "inline-flex font-bold items-center text-xs lg:text-sm text-[#0E4C25]"
            >
              How it Works
            </NavLink>
            <NavLink
              to="/employers"
              className= "inline-flex font-bold items-center text-xs lg:text-sm text-[#0E4C25]"
            >
              For Employers
            </NavLink>
            <NavLink
              to="#tokenomics"
              className= "inline-flex font-bold items-center text-xs lg:text-sm text-[#0E4C25]"
            >
              Our Tokenomics
            </NavLink>
          </div>
          </div>
          <div className='sm:flex justify-between items-center space-x-2 md:space-x-4 md:ml-6 '>
           <NavLink 
            to="/signin"
            className="inline-flex font-bold items-center text-sm text-[#0E4C25]">Login</NavLink>
            <Button className='text-black text-sm rounded-full bg-[#21B557] size-22' onClick={()=>navigate('/signup')}>Get Started</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
