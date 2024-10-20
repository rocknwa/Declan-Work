import { checkOnline } from "@/lib/utils";
import apiClient from "./apiClient";
import { getUser } from "./userService";

// Function to get access token using email and password
export const getAccessToken = async (email, password) => {
  try {
    const response = await apiClient.post("/api/auth/jwt/create", {
      email,
      password,
    });
    const { access, refresh } = response.data;
    localStorage.setItem("accessToken", access);
    localStorage.setItem("refreshToken", refresh);
    return access;
  } catch (error) {
    handleError(error);
  }
};

// Function to refresh the access token using the refresh token
export const refreshAccessToken = async () => {
  const refreshToken = localStorage.getItem("refreshToken");
  if (!refreshToken) throw new Error("No refresh token available");

  try {
    const response = await apiClient.post("/api/auth/jwt/refresh/", {
      refresh: refreshToken,
    });
    const newAccessToken = response.data.access;
    localStorage.setItem("accessToken", newAccessToken); // Save the new token
    return newAccessToken;
  } catch (error) {
    handleError(error);
  }
};

// Function to verify if the current token is valid
export const verifyAccessToken = async () => {
  const accessToken = getAuthToken();
  try {
    await apiClient.post("/api/auth/jwt/verify/", { token: accessToken });
    return true;
  } catch (error) {
    if (error.response && error.response.data.code === "token_not_valid") {
      // Try refreshing the token if invalid
      return refreshAccessToken();
    }
    handleError(error);
  }
};


// Function to sign up a new user
// export const signUp = async (formData) => {
//   try {
//     const response = await apiClient.post("/api/auth/users/", formData, {
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//     });
//     return response.data;
//   } catch (err) {
//     handleError(err);
//   }
// };

export const signUp = async (
  email,
  first_name,
  last_name,
  password,
  type = "freelancer",   // Default value for type
  profession = "",       // Default value for profession
  city = "",             // Default value for city
  country = "",
  bio_title = "",
  bio_description = "",
  status = "available"    
) => {
  const userData = {
    email,
    first_name,
    last_name,
    password,
    type,
    profession,
    city,
    country,
    bio_title,
    bio_description,
    status,
  };

  try {
    const response = await apiClient.post("/api/auth/users/", userData);
    return response.data;
  } catch (err) {
    handleError(err);
  }
};


// Function to sign in a user
export const signIn = async (email, password, dispatch) => {
  try {
    await getAccessToken(email, password);
    const user = await getUser(dispatch);
    // console.log(user)
    // sessionStorage.setItem('user', JSON.stringify(user)); //store the user data in session storage
    console.log("User signed in");
    return user;
  } catch (error) {
    handleError(error);
  }
};

// Function to log out the user
export const signOut = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  console.log("User logged out");
};

// Function to get access token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem("accessToken");
};

// Error handler for network requests
export const handleError = (error) => {
  if (error.response && error.response.data) {
    const { data } = error.response;
    if (data.detail === "No active account found with the given credentials") {
      throw new Error("Incorrect email or password.");
    } else if (data.code === "token_not_valid") {
      throw new Error("Session expired. Please log in again.");
    }
  } else if (!checkOnline()) {
    throw new Error("Check your internet connection.");
  } else {
    throw new Error(error.message);
  }
};