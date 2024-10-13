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
import Header from './components/authentication/Header';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import HomeNav from './components/Home/HomeNav';
import HomePg from './pages/landingpage/HomePg';

import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getUser } from './api/userService';
import { useAuth } from './hooks/useAuth';

function App() {
  const dispatch = useDispatch();
  const {isAuthenticated} = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
        getUser(dispatch);
    }
}, [isAuthenticated, dispatch]);

  return (
    <AuthProvider>
    <Router>
      <Routes>
        {/* Routes for unauthenticated pages */}
        <Route element={<HomePage />}>
          <Route path="/Home" element={<HomePg />} />
        </Route>
        <Route element={<PublicPages />}>
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/new-password" element={<NewPassword />} />
        </Route>
        {/* Routes for authenticated pages */}
        <Route element={<SignedInPages />}> 
          <Route path='/' element={<Dashboard />} />
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
    </AuthProvider>
  );
}

function HomePage(){
  return (
    <>
      <HomeNav />
      <Outlet className=' mt-20'/>
    </>
  );
}

function SignedInPages() {
  return (
    <>
    <ProtectedRoute>
    <DashboardNav />
      <Outlet />
    </ProtectedRoute>
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
