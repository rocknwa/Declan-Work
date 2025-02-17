// src/components/ProtectedRoute.js
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== '/app') {
      navigate('/app', { replace: true });
    }
  }, [isAuthenticated, location.pathname, navigate]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
