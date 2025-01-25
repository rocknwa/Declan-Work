import React from "react";
import "./style.css";

export const ChatPage = () => {
  return (
    <div id="webcrumbs"> 
        <div className='w-screen h-screen bg-gradient-to-b from-primary-500 to-primary-700 shadow-lg rounded-lg flex flex-col overflow-hidden'>  <header className='flex items-center justify-between px-6 py-4 bg-primary-600'>
    	    <div className='flex gap-4 items-center'>
    	      <a
    	        href='/messages'
    	        className='h-[48px] w-[48px] bg-primary-800 text-primary-50 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105'
    	      >
    	        <i className='fa-solid fa-arrow-left text-xl'></i>
    	      </a>
    	      <h1 className='font-title text-2xl font-extrabold text-primary-50'>Chat with Sender 1</h1>
    	    </div>
    	    <button className='h-[48px] w-[48px] bg-primary-800 text-primary-50 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105'>
    	      <i className='fa-solid fa-phone text-xl'></i>
    	    </button>
    	  </header>
    	  <div className='flex-1 overflow-y-auto px-6 py-4 space-y-4'>
    	    {[
    	      { text: 'Message from Sender - 1', isReply: false },
    	      { text: 'Reply to Sender - 2', isReply: true },
    	      { text: 'Message from Sender - 3', isReply: false },
    	      { text: 'Reply to Sender - 4', isReply: true },
    	      { text: 'Reply to Sender - 4', isReply: true },
    	      { text: 'Reply to Sender - 4', isReply: true },
    	      { text: 'Message from Sender - 5', isReply: false },
    	      { text: 'Reply to Sender - 6', isReply: true },
    	      { text: 'Message from Sender - 7', isReply: false },
    	      { text: 'Message from Sender - 7', isReply: false },
    	      { text: 'Message from Sender - 7', isReply: false },
    	      { text: 'Message from Sender - 7', isReply: false },
    	      { text: 'Message from Sender - 7', isReply: false },
    	      { text: 'Reply to Sender - 8', isReply: true },
    	      { text: 'Message from Sender - 9', isReply: false },
    	      { text: 'Reply to Sender - 10', isReply: true },
    	      { text: 'Reply to Sender - 10', isReply: true },
    	    ].map((message, index) => (
    	      <div
    	        key={index}
    	        className={`flex ${message.isReply ? 'justify-start' : 'justify-end'}`}
    	      >
    	        <div
    	          className={`${
    	            message.isReply
    	              ? 'bg-primary-600 text-primary-50'
    	              : 'bg-neutral-100 text-neutral-950'
    	          } p-4 rounded-xl text-lg max-w-[70%] shadow-lg transform transition-transform duration-200 hover:scale-105 ${
    	            message.isReply ? 'rounded-bl-xl' : 'rounded-br-xl'
    	          }`}
    	        >
    	          {message.text}
    	        </div>
    	      </div>
    	    ))}
			{/* I used the p tag below to prevent footer from covering part of last item on the list */}
			<p style={{margin: 40}}>End of List</p>
    	  </div>
    	  <footer className='p-4 bg-white fixed bottom-0 left-0 w-full'>
    	    <div className='flex items-center gap-4'>
    	      <input
    	        type='text'
    	        placeholder='Type a message...'
    	        className='flex-1 h-[48px] px-4 border border-neutral-300 rounded-full shadow-sm text-neutral-950 text-lg outline-none focus:ring-2 focus:ring-primary-500 transition-all'
    	      />
    	      <button className='h-[48px] w-[48px] bg-gradient-to-r from-primary-600 to-primary-800 text-primary-50 rounded-full flex items-center justify-center shadow-md transition-transform duration-200 hover:scale-105'>
    	        <i className='fa-solid fa-paper-plane text-xl'></i>
    	      </button>
    	    </div>
			
    	  </footer>
    	</div> 
    </div>
  )
}

