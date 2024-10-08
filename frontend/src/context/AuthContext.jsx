import { getAuthToken, verifyAccessToken } from "@/api/authService";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthStatus = async () => {
        const token = getAuthToken();
        if (token) {
          const isValid = await verifyAccessToken();
          setIsAuthenticated(isValid);
        } else {
          setIsAuthenticated(false);
        }
      };

      //check auth status status on mount
      useEffect(() => {
        checkAuthStatus();
      },
        []);

  return (
    <AuthContext.Provider value={{isAuthenticated, checkAuthStatus, setIsAuthenticated}}>
        {children}
    </AuthContext.Provider>
  );
;}
