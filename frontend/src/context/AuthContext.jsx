import { createContext, useCallback, useEffect, useState } from "react";
import { useAccount } from "wagmi";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const { isConnected } = useAccount();

	const checkAuthStatus = useCallback(async () => {
		if (isConnected) {
				setIsAuthenticated(true);
		} else {
			setIsAuthenticated(false);
		}
	}, [isConnected, setIsAuthenticated]);

	// Update auth status when wallet connection changes
	useEffect(() => {
		checkAuthStatus();
	}, [isConnected, checkAuthStatus]);
	
	return (
		<AuthContext.Provider
			value={{ isAuthenticated, checkAuthStatus, setIsAuthenticated }}
		>
			{children}
		</AuthContext.Provider>
	);
};
