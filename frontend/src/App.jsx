import {
	BrowserRouter as Router,
	Route,
	Routes,
	Outlet,
	useNavigate,
} from "react-router-dom";
import SignupPage from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Freelancer from "./pages/profile/Freelancer";
import Projects from "./pages/projects/Projects";
import PublicProfile from "./pages/profile/Public";
import ActiveProjects from "./components/projects/ActiveProjects";
import CompletedProjects from "./pages/projects/CompletedProjects";
import AllProjects from "./pages/projects/AllProjects";
import DashboardNav from "./components/dashboard/DashboardNav";
import Applications from "./pages/projects/Applications";
import JobListings from "./pages/jobs/JobListings";
import JobDetails from "./pages/jobs/JobDetails";
import ApplyJobs from "./pages/jobs/ApplyJobs";
import AppSuccess from "./pages/jobs/AppSuccess";
import AboutUs from "./pages/AboutUs";
import Messages from "./pages/Messages";
import MyWallet from "./pages/MyWallet";
import SignInPage from "./pages/SignIn";
import NewPassword from "./pages/NewPassword";
import Header from "./components/authentication/Header";
import ForgotPassword from "./pages/ForgotPassword";
import ProtectedRoute from "./components/ProtectedRoute";
import HomeNav from "./components/Home/HomeNav";
import HomePg from "./pages/landingpage/HomePg";
import Payments from "./pages/Payments";

import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import Providers from "@/context/Providers";

function App() {
	return (
		<Providers>
			<Router>
				<Routes>
					{/* Routes for unauthenticated pages */}
					<Route element={<HomePage />}>	
						<Route path="/" element={<div>Loading</div>} />
						<Route path="/home" element={<HomePg />} />
					</Route>
					{/* Routes for authenticated pages */}
					<Route path="/app" element={<AuthenticatedPages />}>
						<Route index element={<Dashboard />} />
						<Route path="dashboard" element={<Dashboard />} />
						<Route path="jobs" element={<JobListings />} />
						<Route path="jobs/:companyName" element={<JobListings />} />
						<Route path="jobs/:companyName/:jobId" element={<JobDetails />} />
						<Route
							path="jobs/:companyName/:jobId/apply"
							element={<ApplyJobs />}
						/>
						<Route
							path="jobs/:companyName/:jobId/congrats"
							element={<AppSuccess />}
						/>
						<Route path="profile" element={<Freelancer />} />
						<Route path="public" element={<PublicProfile />} />
						<Route path="projects" element={<Projects />}>
							<Route path="" element={<AllProjects />}>
								<Route index element={<ActiveProjects />} />
								<Route path="active" element={<ActiveProjects />} />
								<Route path="completed" element={<CompletedProjects />} />
								<Route path="applications" element={<Applications />} />
							</Route>
						</Route>
						<Route path="about-us" element={<AboutUs />} />
						<Route path="messages" element={<Messages />} />
						<Route path="my-wallet" element={<MyWallet />} />
						<Route path="payments" element={<Payments />} />
					</Route>
				</Routes>
			</Router>
		</Providers>
	);
}

function HomePage() {
	const navigate = useNavigate();
	const { isAuthenticated } = useAuth();

	useEffect(() => {
		if (!isAuthenticated) navigate("/home");
	}, [isAuthenticated, navigate]);
	return (
		<>
			<HomeNav />
			<Outlet className=" mt-20" />
		</>
	);
}

function AuthenticatedPages() {
	const {isAuthenticated } = useAuth();
	return (
		<>
			<DashboardNav />
			{ isAuthenticated ?
				<ProtectedRoute>
					<Outlet />
				</ProtectedRoute>
				:
				<div className="p-20 py-24 text-center">
					Please connect your wallet
				</div>
			}
		</>
	);
}


function PublicPages() {
	return (
		<div className="bg-[#fafafa]">
			<Header />
			<Outlet />
			<div className="text-center p-8 mt-8 text-xs text-[#0E4C25]">Need Help? [Contact Support]</div>
		</div>
	);
}
export default App;
