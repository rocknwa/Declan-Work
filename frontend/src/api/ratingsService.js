import { toCamelCase } from "@/lib/utils";
import apiClient from "./apiClient";
import { handleError, verifyAccessToken } from "./authService";
import { setUser } from "@/redux/slices/userSlice";

export const getUserRating = async (dispatch, id) => {
    await verifyAccessToken(); // Ensure the token is valid or refresh if needed
    try {
      const userResponse = await apiClient.get(`/api/user_ratings/${id}`);
      const response = toCamelCase(userResponse.data);
      dispatch(setUser(response)); // update the store whenever the data from the api is called
      return response;
    } catch (error) {
      handleError(error);
    }
  };
  
  