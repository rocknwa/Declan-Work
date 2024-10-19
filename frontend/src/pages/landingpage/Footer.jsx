import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { NavLink } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#21B257] to-[#E9F8EE] rounded-t-3xl p-8 w-10/12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="text-2xl font-bold mb-4 md:mb-0 grow">
            <img src="/icons/declan-logo-dashboard.svg" alt="Declanwork logo" className="grow"/>
          </div>
          <div className="flex items-center bg-white rounded-full p-1 w-full md:w-auto">
            <Input
              type="email"
              placeholder="Enter your email here"
              className="border-none focus:ring-0 rounded-l-full"
            />
            <Button className="bg-green-400 hover:bg-green-500 text-black rounded-full">
              Subscribe for News
              <img src="/icons/navigation.svg" alt="navigation logo" className="p-1"/>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="text-left">
            <h3 className=" mb-2 text-sm md:text-base lg:text-lg">Candidate</h3>
            <ul className="space-y-2 font-bold">
              <li><NavLink to='#how-it-works' onClick={()=>document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">Learn How It works</NavLink></li>
              <li><NavLink to='#' className="hover:underline">How to Earn</NavLink></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className=" mb-2">Employers</h3>
            <ul className="space-y-2 font-bold">
              <li><NavLink to='#how-it-works' onClick={()=>document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">How it Works</NavLink></li>
              <li><NavLink to='#' className="hover:underline">On-chain Payments</NavLink></li>
            </ul>
          </div>
          <div className="text-right">
            <h3 className=" mb-2">More</h3>
            <ul className="space-y-2 font-bold">
              <li><NavLink to='#' className="hover:underline">Tokenomics</NavLink></li>
              <li><NavLink to='#faq' onClick={()=>document.getElementById('faq')?.scrollIntoView({ behavior: 'smooth' })} className="hover:underline">FAQs</NavLink></li>
              <li><NavLink to='#' className="hover:underline">Blog</NavLink></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <NavLink to='#' className="text-gray-600 hover:text-gray-900">
              <img src="/icons/x-icon.svg" alt="Twitter logo" className="size-7"/>
            </NavLink>
            <NavLink to='#' className="text-gray-600 hover:text-gray-900">
              <img src="/icons/discord-icon.svg" alt="Discord logo"/>
            </NavLink>
            <NavLink to='#' className="text-gray-600 hover:text-gray-900">
              <img src="/icons/github-icon.svg" alt="Github logo" className="size-7"/>
            </NavLink>
          </div>
          <div className="flex space-x-4 text-sm font-bold">
            <NavLink to='#' className="hover:underline">Terms</NavLink>
            <NavLink to='#' className="hover:underline">Privacy</NavLink>
            <NavLink to='#' className="hover:underline">Cookies</NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}