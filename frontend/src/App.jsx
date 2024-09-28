import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupPage from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Freelancer from './pages/profile/Freelancer';
import PublicProfile from './pages/profile/Public';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/profile" element={<Freelancer />} />
        <Route path="/public" element={<PublicProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
