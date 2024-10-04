import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const checkAuthStatus = () => {
        const token = localStorage.getItem("token");
        if (token) {
          setIsAuthenticated(true);
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
