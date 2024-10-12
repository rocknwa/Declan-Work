
import { setUser } from "@/redux/slices/userSlice";
import apiClient from "./apiClient";
import { handleError, verifyAccessToken } from "./authService";
import { toCamelCase } from "@/lib/utils";

// Get authenticated user details
export const getUser = async (dispatch) => {
    await verifyAccessToken(); // Ensure the token is valid or refresh if needed
    try {
      const userResponse = await apiClient.get("/api/auth/users/me/");
      const response = toCamelCase(userResponse.data);
      dispatch(setUser(response)); // update the store whenever the data from the api is called
      return response;
    } catch (error) {
      handleError(error);
    }
  };
