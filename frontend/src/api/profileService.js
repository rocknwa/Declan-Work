import { toCamelCase } from "@/lib/utils";
import apiClient from "./apiClient";
import { handleError, verifyAccessToken } from "./authService";
import { setUser } from "@/redux/slices/userSlice";


// GETS
export const getSkills = async (dispatch, body) => {
  await verifyAccessToken(); // Ensure the token is valid or refresh if needed
  try {
    const userResponse = await apiClient.get("/api/auth/users/me/", body);
    const response = toCamelCase(userResponse.data);
    dispatch(setUser(response)); // update the store whenever the data from the api is called
    return response;
  } catch (error) {
    handleError(error);
  }
};




// UPDATES

export const updateProfile = async (dispatch, body) => {
    await verifyAccessToken(); // Ensure the token is valid or refresh if needed
    try {
      const userResponse = await apiClient.patch("/api/auth/users/me/", body);
      const response = toCamelCase(userResponse.data);
      dispatch(setUser(response)); // update the store whenever the data from the api is called
      return response;
    } catch (error) {
      handleError(error);
      throw new Error('Failed to update bio');
    }
  };
  
