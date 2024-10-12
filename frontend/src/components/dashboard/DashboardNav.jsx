import { NavLink, useLocation } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { useState } from "react";
import AccountAddress from "./AccountAddress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Hamburger from '../Hamburger';

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  return (
    <nav className="bg-white border-b border-[#E9E9E9]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/dashboard" className="flex-shrink-0">
              <img src="/icons/declan-logo-dashboard.svg" alt="Declan logo" />
            </NavLink>
          </div>
          <div className="hidden lg:ml-6 lg:flex sm:space-x-8">
            <NavLink
              to="/dashboard"
              end
              className={({ isActive }) =>
                isActive
                  ? "inline-flex items-center text-sm font-medium text-[#000]"
                  : "inline-flex items-center text-sm font-medium text-[#989898]"
              }
            >
              Dashboard
            </NavLink>
            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <div
                  className="flex items-center text-sm cursor-pointer font-medium text-[#989898] hover:text-gray-900 justify-center gap-1"
                >
                  <span className={`${location.pathname === "/jobs" ? "text-[#000]" : ""} text-sm`}>Job Matches</span>
                  <div className="w-[20px] transition-transform flex items-center justify-center">
                    <img
                      src="/icons/arrow-down-grey.svg"
                      className={cn("transition-transform", isOpen ? "rotate-180" : "rotate-0")}
                      alt="Arrow down"
                    />
                  </div>
                </div>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-[200px] rounded-2xl"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <NavLink
                  className={({ isActive }) =>
                    isActive ? " text-[#000]" : ""
                  }
                  to="/jobs"
                >
                <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
                    <img src="/icons/profile-ma.svg" className="mr-2 h-4 w-4" alt="Job Listings icon" />
                    <span className="text-zinc-950 font-normal">Job Listings</span>
                </DropdownMenuItem>
                </NavLink>
                <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "flex items-center text-[#000]" : "flex items-center"
                    }
                    to="/job-listings-ai"
                  >
                    <img src="/icons/logout-03.svg" className="mr-2 h-4 w-4" alt="AI Job Listings icon" />
                    <span className="text-zinc-950 font-normal">Job Listings (AI)</span>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "flex items-center text-[#000]" : "flex items-center"
                    }
                    to="/manage-projects"
                  >
                    <img src="/icons/logout-03.svg" className="mr-2 h-4 w-4" alt="Manage Projects icon" />
                    <span className="text-zinc-950 font-normal">Manage Projects</span>
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-sm font-medium text-[#000]" : "inline-flex items-center text-sm font-medium text-[#989898]"
              }
            >
              My Projects
            </NavLink>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-sm font-medium text-[#000]" : "inline-flex items-center text-sm font-medium text-[#989898]"
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-sm font-medium text-[#000]" : "inline-flex items-center text-sm font-medium text-[#989898]"
              }
            >
              Messages
            </NavLink>
            <NavLink
              to="/my-wallet"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-sm font-medium text-[#000]" : "inline-flex items-center text-sm font-medium text-[#989898]"
              }
            >
              My Wallet
            </NavLink>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex sm:items-center sm:space-x-4">
              <AccountAddress />
            </div>
            <div className="flex items-center lg:hidden">
              <Button variant="ghost" size="icon">
                <span className="sr-only">Open main menu</span>
                <Hamburger />
              </Button>
              
            </div>
            <div className='hidden'>
              <div></div>
            </div>
            </div>
        </div>
      </div>
    </nav>
  );
}
