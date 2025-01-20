'use client'
import React from "react";
import "./style.css";
 
import { usePathname } from 'next/navigation'

export const Footer = () => {
	const pathname = usePathname()
  return (
    <div id="webcrumbs"> 
        <div className="w-full bg-white rounded-lg shadow p-4 flex justify-between text-neutral-500 fixed bottom-0 left-1/2 transform -translate-x-1/2">  <a
    	    href="/"
    	    className={`flex flex-col items-center ${pathname === '/' ? 'text-primary-500' : 'text-neutral-500'} transition-transform duration-200 hover:scale-110`}
    	  >
    	    <span className="material-symbols-outlined">home</span>
    	    <span>Home</span>
    	  </a>
    	  <a
    	    href="/messages"
    	    className={`flex flex-col items-center ${pathname === '/messages' ? 'text-primary-500' : 'text-neutral-500'} transition-transform duration-200 hover:scale-110`}
    	  >
    	    <span className="material-symbols-outlined">message</span>
    	    <span>Messages</span>
    	  </a>
    	  <a
    	    href="/proposals"
    	    className={`flex flex-col items-center ${pathname === '/proposals' ? 'text-primary-500' : 'text-neutral-500'} transition-transform duration-200 hover:scale-110`}
    	  >
    	    <span className="material-symbols-outlined">travel_explore</span>
    	    <span>Proposals</span>
    	  </a>
    	  <a
    	    href="/postjobs"
    	    className={`flex flex-col items-center ${pathname === '/postjobs' ? 'text-primary-500' : 'text-neutral-500'} transition-transform duration-200 hover:scale-110`}
    	  >
    	    <span className="material-symbols-outlined">work</span>
    	    <span>Post Gigs</span>
    	  </a>
    	  <a
    	    href="/profile"
    	    className={`flex flex-col items-center ${pathname === '/profile' ? 'text-primary-500' : 'text-neutral-500'} transition-transform duration-200 hover:scale-110`}
    	  >
    	    <span className="material-symbols-outlined">person</span>
    	    <span>Profile</span>
    	  </a>
    	</div> 
    </div>
  )
}

