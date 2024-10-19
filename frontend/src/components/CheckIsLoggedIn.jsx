import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const CheckIsLoggedIn = () => {
	const { isAuthenticated } = useAuth();

	if (isAuthenticated) return <Navigate to="/dashboard" />;

	return <Navigate to="/Home" />;
};

export default CheckIsLoggedIn;
