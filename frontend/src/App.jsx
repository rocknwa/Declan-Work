import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import SignupPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Freelancer from './pages/profile/Freelancer';
import Projects from './pages/projects/Projects';
import PublicProfile from './pages/profile/Public';
import ActiveProjects from './components/projects/ActiveProjects';
import CompletedProjects from './pages/projects/CompletedProjects';
import AllProjects from './pages/projects/AllProjects';
import DashboardNav from './components/dashboard/DashboardNav';
import Applications from './pages/projects/Applications';
import JobListings from './pages/jobs/JobListings';
import JobDetails from './pages/jobs/JobDetails';
import ApplyJobs from './pages/jobs/ApplyJobs';
import AppSuccess from './pages/jobs/AppSuccess';
import AboutUs from './pages/AboutUs';
import Messages from './pages/Messages';
import MyWallet from './pages/MyWallet';
import SignInPage from './pages/SignIn';
import NewPassword from './pages/NewPassword';
import ForgotPassword from './pages/ForgotPassword';
import Header from './components/authentication/Header';
import Homepage from './pages/Homepage';
function App() {
  return (
    <Router>
      <Routes>
        {/* Routes for unauthenticated pages */}
        <Route path='/' element={<Homepage />} />
        <Route element={<PublicPages />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Route>
        {/* Routes for authenticated pages */}
        <Route element={<SignedInPages />}> 
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="jobs" element={<JobListings />} />
            <Route path="jobs/:companyName" element={<JobListings />} />
            <Route path="jobs/:companyName/:jobId" element={<JobDetails />} />
            <Route path="jobs/:companyName/:jobId/apply" element={<ApplyJobs />} />
            <Route path="jobs/:companyName/:jobId/congrats" element={<AppSuccess />} />
          <Route path="profile" element={<Freelancer />} />
          <Route path="public" element={<PublicProfile />} />
          <Route path="projects" element={<Projects />}>
            <Route path='' element={< AllProjects />}>
              <Route index element={< ActiveProjects/>} />
              <Route path="active" element={< ActiveProjects/>} />
              <Route path="completed" element={< CompletedProjects/>} />
              <Route path="applications"  element={< Applications/>} />
            </Route>
          </Route>
          <Route path='about-us' element={<AboutUs />} />
          <Route path='messages' element={<Messages />} />
          <Route path='my-wallet' element={<MyWallet />} />
        </Route>
      </Routes>
    </Router>
  );
}

function SignedInPages() {
  return (
    <>
    <DashboardNav />
      <Outlet />
    </>
  );
}
function PublicPages() {
  return (
    <>
    <Header />
      <Outlet />
    </>
  );
}
export default App;
