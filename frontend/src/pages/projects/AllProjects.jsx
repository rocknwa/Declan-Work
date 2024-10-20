import JobsSidebar from "@/components/projects/JobsSidebar";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const AllProjects = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col md:flex-row gap-[70px] w-full">
        <div className="w-full">
        <div className="py-4">
            <h1 className="font-bold text-[#202020] text-2xl">My Projects</h1>
            <p className="text-[#6A6A6A] text-sm">
            View all ongoing and completed projects
            </p>
        </div>
        <div className="flex gap-4">
            <NavLink
             to="active"
             end
             className={({isActive}) =>
                isActive || location.pathname === "/projects"
                  ? "text-[#21B557] font-semibold bg-transparent text-lg py-2 hover:bg-transparent hover:text-[#21B557]"
                  : "text-[#989898] font-semibold bg-transparent text-lg py-2 hover:bg-transparent hover:text-[#21B557]"
              }
            >
              Active
            </NavLink>
            <NavLink
             to="completed"
              className={({ isActive }) =>
                isActive
                  ? "text-[#21B557] font-semibold bg-transparent text-lg py-2 hover:bg-transparent hover:text-[#21B557]"
                  : "text-[#989898] font-semibold bg-transparent text-lg py-2 hover:bg-transparent hover:text-[#21B557]"
              }
            >
              Completed
            </NavLink>
            <NavLink
             to="applications"
              className={({ isActive }) =>
                isActive
                  ? "text-[#21B557] font-semibold bg-transparent text-lg py-2 hover:bg-transparent hover:text-[#21B557]"
                  : "text-[#989898] font-semibold bg-transparent text-lg py-2 hover:bg-transparent hover:text-[#21B557]"
              }
            >
              Applications
            </NavLink>
        </div>
        <div className="mt-6">
            <Outlet />
        </div>
        </div>
        <div className="py-4">
            <JobsSidebar />
        </div>
    </div>
  );
};

export default AllProjects;
