import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import JobListings from './pages/JobListings';
import JobDetails from './pages/JobDetails';
import ApplyJobs from './pages/ApplyJobs';
import AppSuccess from './pages/AppSuccess';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/jobs" element={<JobListings />} />
        <Route path="/jobs/:companyName" element={<JobListings />} />
        <Route path="/jobs/:companyName/:jobId" element={<JobDetails />} />
        <Route path="/jobs/:companyName/:jobId/apply" element={<ApplyJobs />} />
        <Route path="/jobs/:companyName/:jobId/congrats" element={<AppSuccess />} />
      </Routes>
    </Router>
  );
}

export default App;
