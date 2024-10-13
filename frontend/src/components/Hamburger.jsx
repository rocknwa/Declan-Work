import { signOut } from "@/api/authService";
import { useAuth } from "@/hooks/useAuth";
import { LogOut, X } from "lucide-react"
import { NavLink, useNavigate } from "react-router-dom"

function Hamburger() {
  return (
    <div>
        <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
    </div>
  )
}

export function MobileNav ({setIsHamburgerOpen}) {
    const {setIsAuthenticated} = useAuth();
    const navigate = useNavigate();
    const handleLogOut = () => {
      signOut();
      setIsAuthenticated(false);
      navigate("/signin");
    }
  return (
    <div className="fixed md:hidden m-0 top-0 left-0 p-4 z-30 w-screen h-screen overflow-hidden bg-white">
      <div className="flex justify-between items-center">
        <img src="/assets/DeclanWorkLogo.png" className="w-[150px]" alt="" />
        <X onClick={() => setIsHamburgerOpen(false)} />
      </div>
      <div className="flex mt-5 flex-col gap-4">
        <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-lg tracking-tight  font-medium text-[#000]" : "inline-flex items-center text-lg tracking-tight  font-medium text-[#989898]"
              }
              onClick={()=> setIsHamburgerOpen(false)}
            >
              Dashboard
        </NavLink>
        <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-lg tracking-tight  font-medium text-[#000]" : "inline-flex items-center text-lg tracking-tight  font-medium text-[#989898]"
              }
              onClick={()=> setIsHamburgerOpen(false)}
            >
              Job Matches
        </NavLink>
        <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-lg tracking-tight  font-medium text-[#000]" : "inline-flex items-center text-lg tracking-tight  font-medium text-[#989898]"
              }
              onClick={()=> setIsHamburgerOpen(false)}
            >
              My Projects
        </NavLink>
        <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? "inline-flex items-center text-lg tracking-tight  font-medium text-[#000]" : "inline-flex items-center text-lg tracking-tight  font-medium text-[#989898]"
              }
              onClick={()=> setIsHamburgerOpen(false)}
            >
            Profile
        </NavLink>
        <div onClick={() => handleLogOut()} className="text-lg tracking-tight  font-medium text-[#989898] flex gap-1 items-center">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Log out</span>
        </div>
      </div>
    </div>
  )
}

export default Hamburger