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

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#E9E9E9]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <img src="/icons/declan-logo-dashboard.svg" alt="Declan logo" />
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Dashboard</NavLink>

            <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
              <DropdownMenuTrigger asChild>
                <div
                  className="flex items-center text-sm cursor-pointer font-medium active:text-black text-[#989898] hover:text-gray-900 justify-center gap-1"
                >
                  <span className="text-sm">Job Matches</span>
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
                <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
                  <NavLink href="/job-listings">
                    <img src="/icons/profile-ma.svg" className="mr-2 h-4 w-4" alt="Job Listings icon" />
                    <span className="text-zinc-950 font-normal">Job Listings</span>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
                  <NavLink href="/job-listings-ai">
                    <img src="/icons/logout-03.svg" className="mr-2 h-4 w-4" alt="AI Job Listings icon" />
                    <span className="text-zinc-950 font-normal">Job Listings (AI)</span>
                  </NavLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
                  <NavLink href="/manage-projects">
                    <img src="/icons/logout-03.svg" className="mr-2 h-4 w-4" alt="Manage Projects icon" />
                    <span className="text-zinc-950 font-normal">Manage Projects</span>
                  </NavLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <NavLink href="/my-projects">My Projects</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/messages">Messages</NavLink>
            <NavLink href="/my-wallet">My Wallet</NavLink>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <AccountAddress />
          </div>

          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center text-sm font-medium active:text-black text-[#989898] hover:text-gray-900"
    >
      {children}
    </a>
  );
}
