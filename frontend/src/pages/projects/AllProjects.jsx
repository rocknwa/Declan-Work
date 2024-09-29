import ActiveProjects from "@/components/projects/ActiveProjects";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CompletedProjects from "./CompletedProjects";
import JobsSidebar from "@/components/projects/JobsSidebar";
import { Link, Outlet } from "react-router-dom";

const AllProjects = () => {
  const [openTab, setOpenTab] = useState("active");

  return (
    <div className="flex gap-[70px] w-full">
        <div className="w-full">
        <div className="py-4">
            <h1 className="font-semibold text-[#202020] text-2xl">My Projects</h1>
            <p className="text-[#6A6A6A] text-sm">
            View all ongoing and completed projects
            </p>
        </div>
        <div className="flex gap-4">
            <Link to="">
                <Button
                onClick={() => setOpenTab("active")}
                className={`${
                    openTab === "active" ? "text-[#21B557] font-semibold" : "text-[#989898]"
                } bg-transparent text-lg p-0 hover:bg-transparent hover:text-[#21B557]`}
                >
                Active
                </Button>
            </Link>
            <Link to="completed">
                <Button
                onClick={() => setOpenTab("completed")}
                className={`${
                    openTab === "completed" ? "text-[#21B557] font-semibold" : "text-[#989898]"
                } bg-transparent text-lg p-0 hover:bg-transparent hover:text-[#21B557]`}
                >
                Completed
                </Button>
            </Link>
            <Link to="applications">
                <Button
                onClick={() => setOpenTab("applications")}
                className={`${
                    openTab === "applications" ? "text-[#21B557] font-semibold" : "text-[#989898]"
                } bg-transparent text-lg p-0 hover:bg-transparent hover:text-[#21B557]`}
                >
                Applications
                </Button>
            </Link>
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
