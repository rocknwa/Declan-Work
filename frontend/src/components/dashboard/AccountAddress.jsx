import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Settings, HelpCircle, LogOut } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
import { NavLink, useNavigate } from "react-router-dom";
import { cn, shortenAddress } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { useAccount, useDisconnect } from 'wagmi';
import { useSelector } from "react-redux";
import defaultImage from "@/assets/sample.png";
import MetaMask from "../authentication/Metamask";

const AccountAddress = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {isAuthenticated, setIsAuthenticated} = useAuth();
    const { address } = useAccount();
    const {disconnect} = useDisconnect();
    // Fetch user data from Redux store
    const user = useSelector((state) => state.user);
    const handleLogOut = () => {
        setIsAuthenticated(false);
        localStorage.clear();
        disconnect();
        navigate("/app", { replace: true });
        window.location.reload();
    }
    useEffect(() => {
    }, [isAuthenticated])  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        {isAuthenticated && <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full p-1 hover:bg-[#F0F0F0]" size="sm">
                <div className="flex items-center justify-center ">
                    <img className="w-[25px] h-[25px] rounded-full" src={user.profileImage || defaultImage}  alt="" />
                    <span className="ml-2">{shortenAddress(address)}</span>
                    <img src="/icons/arrow-down-01.svg" className={cn("transition-transform", isOpen ? "rotate-180" : "rotate-0")} alt="" />
                </div>
            </Button>
        </DropdownMenuTrigger>}
        { !isAuthenticated && <MetaMask />}
        <DropdownMenuContent
            align="end"
            className="w-[200px] gap-2 rounded-2xl"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <NavLink className="" to="profile">
            <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
                <img src="/icons/profile-ma.svg" className="mr-2 h-4 w-4" />
                <span>Profile Management</span>
            </DropdownMenuItem>
            </NavLink>
            <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
            <img src="/icons/logout-03.svg" className="mr-2 h-4 w-4" />
            <span>Learning Path</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
            <HelpCircle className="mr-2 h-4 w-4" />
            <span>Support</span>
            </DropdownMenuItem>
            <NavLink className="" onClick={()=> handleLogOut()}>
            <DropdownMenuItem className="focus:bg-[#f0f0f0] rounded-xl hover:cursor-pointer hover:bg-slate-300">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
            </DropdownMenuItem>
            </NavLink>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AccountAddress