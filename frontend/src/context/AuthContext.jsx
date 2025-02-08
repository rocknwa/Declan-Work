import { getAuthToken, verifyAccessToken } from "@/api/authService";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	const checkAuthStatus = async () => {
		const token = getAuthToken();
		if (token) {
			try{ 
				await verifyAccessToken();
				setIsAuthenticated(true);
			} catch {
				setIsAuthenticated(false);
				console.log("get out of here");
				localStorage.removeItem("accessToken");
				localStorage.removeItem("refreshToken");
			}
		} else {
			setIsAuthenticated(false);
		}
	};

	//check auth status status on mount
	useEffect(() => {
		checkAuthStatus();
	}, [isAuthenticated]);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, checkAuthStatus, setIsAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};
