import React from "react";

import "./style.css";

export const HomePage = () => {
  return (
    <div id="webcrumbs"> 
        <div className="w-full h-screen bg-white shadow-lg rounded-lg p-4 space-y-4 text-neutral-950 overflow-y-auto scrollbar-thin scrollbar-thumb-primary-500">
    	  <header className="flex items-center justify-between">
    	    <h1 className="font-title text-xl">Discover Jobs</h1>
    	    <a
				href="postjobs"
				className="bg-primary-500 text-white text-sm px-4 py-2 rounded-md"
				>
				Post Gigs
				</a>
    	  </header>
    	  
    	  <div className="relative">
    	    <input 
    	      type="text" 
    	      className="w-full rounded-md border border-neutral-300 pl-10 pr-16 h-[40px] focus:outline-none focus:ring-2 focus:ring-primary-500" 
    	      placeholder="Search for job" 
    	    />
    	    <button className="absolute top-1/2 right-3 -translate-y-1/2 text-primary-500">
    	      <span className="material-symbols-outlined">search</span>
    	    </button>
    	  </div>
    	  
    	  <nav className="flex items-center space-x-4 border-b border-neutral-300 pb-2">
    	    <a href="#" className="text-primary-500 border-b-2 border-primary-500">Best Match</a>
    	    <a href="#" className="text-neutral-500">Most Recent</a>
    	  </nav>
    	  
    	  <div className="space-y-4">
    	    {[
    	      {
    	        name: "Alexander Arnold",
    	        time: "5 hours ago",
    	        description:
    	          "Redesign our Design agency website to more attractive than before",
    	        budget: "Budget: $1,000 - $2,000",
    	        level: "Min Freelancer level: Intermediate",
    	        tags: ["UI/UX Design", "Layout Design", "Website Design"],
    	        avatar:
    	          "https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/1",
    	      },
    	      {
    	        name: "John Connor",
    	        time: "5 hours ago",
    	        description: "Create Digital marketing website and develop using Webflow",
    	        budget: "Budget/Hourly: $35/h",
    	        level: "Min Freelancer level: Top Level",
    	        tags: ["UI/UX Design", "Website Design", "Layout Design"],
    	        avatar:
    	          "https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/2",
    	      },
    	      
    	      {
    	        name: "Freelancer 4",
    	        time: "2 hours ago",
    	        description: "Create a landing page for a new product using React.js",
    	        budget: "Budget: $500 - $1,000",
    	        level: "Min Freelancer level: Beginner",
    	        tags: ["React.js", "Frontend Development"],
    	        avatar:
    	          "https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/4",
    	      },
    	      {
    	        name: "Freelancer 5",
    	        time: "1 day ago",
    	        description: "Develop a cross-platform mobile app for a delivery service",
    	        budget: "Budget: $5,000 - $10,000",
    	        level: "Min Freelancer level: Expert",
    	        tags: ["Mobile Development", "Cross-Platform", "UI/UX Design"],
    	        avatar:
    	          "https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/5",
    	      },
			  {
    	        name: "Freelancer 5",
    	        time: "1 day ago",
    	        description: "Develop a cross-platform mobile app for a delivery service",
    	        budget: "Budget: $5,000 - $10,000",
    	        level: "Min Freelancer level: Expert",
    	        tags: ["Mobile Development", "Cross-Platform", "UI/UX Design"],
    	        avatar:
    	          "https://tools-api.webcrumbs.org/image-placeholder/40/40/avatars/5",
    	      },
    	    ].map((job, index) => (
    	      <a
    	        key={index}
    	        href="/gigdetails"
    	        className="block p-4 bg-neutral-50 rounded-md hover:shadow-md"
    	      >
    	        <div className="flex items-center space-x-3 mb-3">
    	          <img
    	            src={job.avatar}
    	            alt={`Avatar ${job.name}`}
    	            className="w-[40px] h-[40px] rounded-full object-contain"
    	          />
    	          <div>
    	            <h2 className="text-sm font-semibold text-neutral-950">
    	              {job.name}
    	            </h2>
    	            <p className="text-xs text-neutral-500">{job.time}</p>
    	          </div>
    	        </div>
    	        <p className="text-sm text-neutral-950 mb-2">{job.description}</p>
    	        {job.budget && (
    	          <p className="text-sm text-neutral-950 mb-2">
    	            <strong>{job.budget.split(":")[0]}:</strong> {job.budget.split(":")[1]}
    	          </p>
    	        )}
    	        {job.level && (
    	          <p className="text-sm text-neutral-950 mb-2">
    	            <strong>{job.level.split(":")[0]}:</strong> {job.level.split(":")[1]}
    	          </p>
    	        )}
    	        {job.tags && (
    	          <div className="flex flex-wrap gap-2">
    	            {job.tags.map((tag, idx) => (
    	              <span
    	                key={idx}
    	                className="px-3 py-1 bg-primary-50 text-primary-950 text-xs rounded-md"
    	              >
    	                {tag}
    	              </span>
    	            ))}
    	          </div>
    	        )}
    	      </a>
    	    ))}

			{/* I used the p tag below to prevent footer from covering part of last item on the list */}
			<p style={{margin: 50}}>End of List</p>
    	  </div>


    	</div> 
    </div>
  )
}

