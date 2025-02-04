import React from "react";

import "./style.css";

export const MessagesPage = () => {
  return (
    <div id="webcrumbs"> 
        <div className='w-screen h-screen bg-white shadow-lg rounded-lg p-4 space-y-3'>  <h1 className='font-title text-lg font-bold text-neutral-950'>Messages</h1>
    	  <ul className='space-y-3 overflow-y-auto h-[calc(100%-64px)]'>
    	    {[...Array(10)].map((_, index) => (
    	      <li key={index}>
    	        <a href='messages/chat' className='flex items-center bg-neutral-100 hover:bg-neutral-200 rounded-lg p-4 text-neutral-950'>
    	          <div className='h-[48px] w-[48px] bg-neutral-300 rounded-full flex-shrink-0 flex justify-center items-center'>
    	            <i className='fa-solid fa-user text-primary-500 text-xl'></i>
    	          </div>
    	          <div className='ml-4'>
    	            <p className='font-title font-medium'>Sender {index + 1}</p>
    	            <p className='text-sm text-neutral-600'>Message {index + 1}</p>
    	          </div>
    	          <span className='ml-auto text-primary-500'>
    	            <i className='fa-regular fa-envelope text-lg'></i>
    	          </span>
    	        </a>
    	      </li>
    	    ))}
			{/* I used the p tag below to prevent footer from covering part of last item on the list */}
			<p style={{margin: 50}}>End of List</p>
    	  </ul>
    	</div> 
    </div>
  )
}

