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
import { signOut } from "@/api/authService";
import { useAuth } from "@/hooks/useAuth";
import { useAccount } from 'wagmi';
import {
    Address,
    Avatar,
    EthBalance,
    Identity,
    Name,
  } from '@coinbase/onchainkit/identity';

const AccountAddress = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const {isAuthenticated, setIsAuthenticated} = useAuth();
    const { address } = useAccount();
    const handleLogOut = () => {
        signOut();
        setIsAuthenticated(false);
        navigate("/signin");
    }
    useEffect(() => {
    }, [isAuthenticated])  
  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
        <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full p-1 hover:bg-[#F0F0F0]" size="sm">
                <div className="flex items-center justify-center gap-2">
                    <img src="/icons/Avatar.svg" alt="" />
                    <span>{shortenAddress(address)}</span>
                    <img src="/icons/arrow-down-01.svg" className={cn("transition-transform", isOpen ? "rotate-180" : "rotate-0")} alt="" />
                </div>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
            align="end"
            className="w-[200px] gap-2 rounded-2xl"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <NavLink className="" to="/profile">
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