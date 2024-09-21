import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Freelancer from './pages/profile/Freelancer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Freelancer />} />
      </Routes>
    </Router>
  );
}

export default App;
