import React from "react";

import "./style.css";

export const ProfilePage = () => {
  return (
    <div id="webcrumbs"> 
        <div className="w-full bg-white shadow-lg rounded-lg p-4 flex flex-col gap-6 h-screen overflow-y-auto">  <header className="flex items-center justify-between">
    	    <div className="flex items-center gap-4">
    	      <img
    	        src="https://tools-api.webcrumbs.org/image-placeholder/48/48/avatars/1"
    	        alt="User avatar"
    	        width="48"
    	        height="48"
    	        className="rounded-full object-contain"
    	      />
    	      <div>
    	        <h1 className="text-neutral-950 font-title">Emanuel Richard</h1>
    	        <p className="text-neutral-500 text-sm">UI/UX Designer</p>
    	      </div>
    	    </div>
    	    <i className="fa-solid fa-bell text-neutral-500">
    	</i>
    	  </header>
    	  <div className="flex justify-between items-center">
    	    <h2 className="text-neutral-950 font-title">Top level Freelancer</h2>
    	    <span className="text-neutral-400 text-sm">31 Aug 2023</span>
    	  </div>
    	
    	  <div className="flex gap-4">
    	    <div className="w-3/5 bg-primary-500 text-primary-50 p-4 rounded-lg relative">
    	      <header className="flex justify-between items-center mb-4">
    	        <h3 className="font-title">Earnings</h3>
    	        <span className="text-sm text-primary-100">Details</span>
    	      </header>
    	      <h2 className="text-3xl font-bold">$834.12</h2>
    	      <p className="text-sm text-primary-100">Increase 8% than last month</p>
    	    </div>
    	
    	    <div className="w-2/5 flex flex-col gap-4">
    	      <div className="bg-neutral-100 rounded-lg p-4 text-center">
    	        <h4 className="font-title text-neutral-950">12</h4>
    	        <p className="text-neutral-500 text-sm">
    	          Projects
    	          <br />
    	          Delivered
    	        </p>
    	      </div>
    	      <div className="bg-neutral-100 rounded-lg p-4 text-center">
    	        <h4 className="font-title text-neutral-950">4.9/5.0</h4>
    	        <p className="text-neutral-500 text-sm">
    	          Positive
    	          <br />
    	          Rating
    	        </p>
    	      </div>
    	    </div>
    	  </div>
    	
    	  <div>
    	    <header className="flex justify-between items-center mb-4">
    	      <h3 className="text-neutral-950 font-title">Ongoing Project</h3>
    	      <span className="text-primary-500 text-sm">See more</span>
    	    </header>
    	    <div className="flex flex-col gap-4">
    	      <div className="flex items-center gap-4">
    	        <img
    	          src="https://tools-api.webcrumbs.org/image-placeholder/64/64/abstract/1"
    	          alt="Project thumbnail"
    	          width="64"
    	          height="64"
    	          className="rounded-lg object-cover"
    	        />
    	        <div>
    	          <h4 className="text-neutral-950">
    	            Redesign our design system and implement to...
    	          </h4>
    	          <div className="flex items-center gap-2 mt-1">
    	            <img
    	              src="https://tools-api.webcrumbs.org/image-placeholder/24/24/avatars/2"
    	              alt="Avatar"
    	              width="24"
    	              height="24"
    	              className="rounded-full object-contain"
    	            />
    	            <p className="text-neutral-500 text-sm">Alexander Arnold</p>
    	          </div>
    	        </div>
    	        <div className="ml-auto text-right text-neutral-950">
    	          <p className="font-bold">$1,000</p>
    	          <p className="text-neutral-400 text-sm">Sept 12, 2023</p>
    	        </div>
    	      </div>
    	    </div>
    	  </div>
    	
    	  <div className="mt-6">
    	    <form className="flex flex-col gap-4">
    	      <div>
    	        <label htmlFor="freelancerName" className="text-neutral-950">
    	          Name
    	        </label>
    	        <input
    	          id="freelancerName"
    	          name="freelancerName"
    	          type="text"
    	          className="w-full border border-neutral-300 p-2 rounded-md mt-1"
    	          placeholder="Enter name"
    	        />
    	      </div>
    	      <div>
    	        <label htmlFor="skills" className="text-neutral-950">
    	          Skills
    	        </label>
    	        <input
    	          id="skills"
    	          name="skills"
    	          type="text"
    	          className="w-full border border-neutral-300 p-2 rounded-md mt-1"
    	          placeholder="e.g., UI/UX, Web Design"
    	        />
    	      </div>
    	      <div>
    	        <label htmlFor="categories" className="text-neutral-950">
    	          Categories
    	        </label>
    	        <input
    	          id="categories"
    	          name="categories"
    	          type="text"
    	          className="w-full border border-neutral-300 p-2 rounded-md mt-1"
    	          placeholder="e.g., Design, Development"
    	        />
    	      </div>
    	      <button className="bg-primary-500 text-primary-50 p-3 rounded-md font-medium">
    	        Update Profile
    	      </button>
    	    </form>
    	  </div>
    	</div> 
    </div>
  )
}

