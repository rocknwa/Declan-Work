import React from "react";
import "./style.css";

export const ProposalsPage = () => {
  return (
    <div id="webcrumbs"> 
        <div className="w-full bg-white shadow rounded-lg p-6">  <h1 className="text-2xl font-title text-neutral-950 mb-4">Proposals</h1>
    	  <div className="flex flex-col gap-6">
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">Website Redesign</h2>
    	        <p className="text-sm text-neutral-600">Status: Pending</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">hourglass_top</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">E-commerce App Development</h2>
    	        <p className="text-sm text-neutral-600">Status: Interview</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">person_search</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">Mobile App Design</h2>
    	        <p className="text-sm text-neutral-600">Status: Rejected</p>
    	      </div>
    	      <span className="material-symbols-outlined text-neutral-500">cancel</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">Marketing Campaign Project</h2>
    	        <p className="text-sm text-neutral-600">Status: In Progress</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">hourglass_bottom</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">Social Media Strategy</h2>
    	        <p className="text-sm text-neutral-600">Status: Completed</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">check_circle</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">Data Analysis Report</h2>
    	        <p className="text-sm text-neutral-600">Status: Under Review</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">auto_graph</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">Creative Concept Pitch</h2>
    	        <p className="text-sm text-neutral-600">Status: Approved</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">thumb_up</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">UX Testing Plan</h2>
    	        <p className="text-sm text-neutral-600">Status: Completed</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">check_circle</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">SEO Strategy Development</h2>
    	        <p className="text-sm text-neutral-600">Status: Pending</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">hourglass_top</span>
    	    </div>
    	    <div className="flex justify-between items-center bg-neutral-100 rounded-md px-4 py-3">
    	      <div className="flex flex-col">
    	        <h2 className="text-lg font-semibold text-neutral-950">Content Marketing Plan</h2>
    	        <p className="text-sm text-neutral-600">Status: Pending Approval</p>
    	      </div>
    	      <span className="material-symbols-outlined text-primary-500">schedule</span>
    	    </div>
    	  </div>
          {/* I used the p tag below to prevent footer from covering part of last item on the list */}
			<p style={{margin: 50}}>End of List</p>
    	</div> 
    </div>
  )
}

