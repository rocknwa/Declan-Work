import React from "react";
import "./style.css";

export const GigDetail = () => {
  return (
    <div id="webcrumbs"> 
        <div className="w-full bg-gradient-to-br from-white via-gray-100 to-blue-50 rounded-lg shadow-xl p-8 transition-transform transform hover:scale-105 duration-300 ease-in-out">  <h1 className="text-3xl font-title text-neutral-950 mb-6 tracking-wide">
    	    <span className="bg-gradient-to-r from-primary-500 to-blue-500 text-transparent bg-clip-text">
    	      Gig Details
    	    </span>
    	  </h1>
    	  <div className="flex flex-col gap-8">
    	    <div className="border-b pb-4">
    	      <h2 className="text-xl font-semibold text-neutral-950">Project Title</h2>
    	      <p className="text-neutral-700">Creative Logo Design for Startup</p>
    	    </div>
    	    <div className="grid grid-cols-2 gap-6">
    	      <div className="text-center">
    	        <h3 className="text-lg font-medium text-primary-500">Budget</h3>
    	        <p className="text-neutral-700 font-normal">$500 - $1000</p>
    	      </div>
    	      <div className="text-center">
    	        <h3 className="text-lg font-medium text-primary-500">Deadline</h3>
    	        <p className="text-neutral-700 font-normal">November 15, 2023</p>
    	      </div>
    	    </div>
    	    <div>
    	      <h3 className="text-lg font-medium text-primary-500 mb-2">Description</h3>
    	      <p className="text-neutral-700 leading-relaxed">
    	        We are looking for a creative designer with experience in branding to
    	        help us design a unique and professional logo for our new startup. The
    	        ideal candidate should have a strong portfolio that showcases innovative
    	        designs and skills in brand development.
    	      </p>
    	    </div>
    	    <div>
    	      <h3 className="text-lg font-medium text-primary-500 mb-2">Skills Required</h3>
    	      <ul className="list-disc list-inside text-neutral-700 leading-relaxed">
    	        <li>Graphic Design</li>
    	        <li>Branding</li>
    	        <li>Logo Design</li>
    	        <li>Adobe Illustrator</li>
    	      </ul>
    	    </div>
    	    <button className="bg-gradient-to-r from-primary-500 to-blue-500 text-white px-8 py-3 rounded-md shadow-md hover:bg-blue-400 transform hover:translate-y-[-2px] transition-all duration-300 w-fit">
    	      Apply Now
    	    </button>
    	  </div>
    	</div> 
    </div>
  )
}

