import { Button } from "@/components/ui/button";

export default function DashboardNav() {
  return (
    <nav className="bg-white border-b border-[#E9E9E9]">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="sr-only">Your Logo</span>
              <img src="/declan-logo-dashboard.svg" alt="" />
            </a>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
            <NavLink href="/">Dashboard</NavLink>
            <NavLink href="/job-matches">
                <div className="flex items-center justify-center gap-1">
                    Job Matches
                    <img src="/arrow-down-grey.svg" alt="" />
                </div>
            </NavLink>
            <NavLink href="/my-projects">My Projects</NavLink>
            <NavLink href="/about-us">About Us</NavLink>
            <NavLink href="/messages">Messages</NavLink>
            <NavLink href="/my-wallet">My Wallet</NavLink>
          </div>
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            <Button variant="outline" className="rounded-full p-1 hover:bg-[#F0F0F0]" size="sm">
                <div className="flex items-center justify-center gap-2">
                    <img src="/Avatar.svg" alt="" />
                    <span>0x0595...PQ59</span>
                    <img src="/arrow-down-01.svg" alt="" />
                </div>
            </Button>
          </div>
          <div className="flex items-center sm:hidden">
            <Button variant="ghost" size="icon">
              <span className="sr-only">Open main menu</span>
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
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="inline-flex items-center px-1 pt-1 text-sm font-medium active:text-black text-[#989898] hover:text-gray-900"
    >
      {children}
    </a>
  );
}
