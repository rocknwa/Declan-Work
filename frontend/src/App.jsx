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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<SignedInPages />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/profile" element={<Freelancer />} />
          <Route path="/public" element={<PublicProfile />} />
          <Route path="/projects" element={<Projects />}>
            <Route path="" element={< AllProjects/>}>
              <Route path="" element={< ActiveProjects/>} />
              <Route path="completed" element={< CompletedProjects/>} />
              <Route path="applications"  element={< ActiveProjects/>} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

function SignedInPages() {
  return (
    <div>
    <DashboardNav />
      <Outlet />
    </div>
  );
}
export default App;
