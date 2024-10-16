import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

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
              <li><a href="#" className="hover:underline">Learn How It works</a></li>
              <li><a href="#" className="hover:underline">How to Earn</a></li>
            </ul>
          </div>
          <div className="text-center">
            <h3 className=" mb-2">Employers</h3>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:underline">How it Works</a></li>
              <li><a href="#" className="hover:underline">On-chain Payments</a></li>
            </ul>
          </div>
          <div className="text-right">
            <h3 className=" mb-2">More</h3>
            <ul className="space-y-2 font-bold">
              <li><a href="#" className="hover:underline">Tokenomics</a></li>
              <li><a href="#" className="hover:underline">FAQs</a></li>
              <li><a href="#" className="hover:underline">Blog</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <img src="/icons/x-icon.svg" alt="Twitter logo" className="size-7"/>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <img src="/icons/discord-icon.svg" alt="Discord logo"/>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <img src="/icons/github-icon.svg" alt="Github logo" className="size-7"/>
            </a>
          </div>
          <div className="flex space-x-4 text-sm font-bold">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}