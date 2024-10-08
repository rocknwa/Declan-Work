// src/components/ProtectedRoute.js
import { getAuthToken } from "@/api/authService";
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  const token = getAuthToken();

  // If not authenticated, redirect to the login page
  if (!isAuthenticated && !token) {
    return <Navigate to="/signin" />;
  }

  // If authenticated, render the children (protected route)
  return children;
};

export default ProtectedRoute;
