// src/components/ProtectedRoute.js
import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);

  // If not authenticated, redirect to the login page
  if (!isAuthenticated) {
    return <Navigate to="/signin" />;
  }

  // If authenticated, render the children (protected route)
  return children;
};

export default ProtectedRoute;
