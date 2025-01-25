import React from "react";

import "./style.css";


export const WalletConn = () => {
  return (
    <div id="webcrumbs"> 
        <div className="max-w-100 bg-white shadow-lg flex justify-between items-center px-4 py-2">
    	  <h1 className="font-title text-neutral-950 text-lg">Connect Wallet</h1>
    	  <div className="relative">
    	    <details className="relative">
    	      <summary className="bg-primary-500 text-primary-50 rounded-md px-4 py-2 flex items-center gap-2 cursor-pointer">
    	        <span className="material-symbols-outlined">account_balance_wallet</span>
    	        <span>0x3A2E...B71C</span>
    	      </summary>
    	      <div className="absolute z-10 bg-white shadow-lg rounded-lg mt-2 py-4 px-6 text-neutral-950 w-[180px] flex flex-col gap-4">
    	        <div>
    	          <strong>ETH Balance:</strong> 1.256
    	        </div>
    	        <div>
    	          <strong>LSK Balance:</strong> 204.12
    	        </div>
    	        <button className="text-red-500 bg-red-100 px-4 py-2 rounded-md w-full hover:bg-red-200">
    	          Disconnect
    	        </button>
    	      </div>
    	    </details>
    	  </div>
    	</div> 
    </div>
  )
}

