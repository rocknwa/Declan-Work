import apiClient from "./apiClient";

//get JWT token with email and password 
export const getAccessToken = async (email, password) => {
    try {
       const response = await apiClient.post("/api/auth/jwt/create", {
        email,
        password,
       });
       const token = response.data.access;
       localStorage.setItem("token", token);
       console.log("the token has been stored woohoo");
       return token;
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("The error is:", error.response.data.detail);
        const { data } = error.response;
        if (data.detail === "No active account found with the given credentials") {
          throw new Error("Incorrect email or password.");
        } else if (data.detail === "Token expired") {
          throw new Error("Session expired. Please log in again.");
        }
      } else {
        throw new Error("An error occurred during sign-in:", error);
      }
    }
}

// get jwt token after they have been set
export const getAuthToken = () => {
    return localStorage.getItem("token");
}


// create a user
export const signUp = async (
    email, 
    first_name, 
    last_name,
    password,
    profession, 
    city, 
    country, 
    bio_title,
    bio_description, 
    status,
    profile_image,
) => {
    const userData = {
      email, 
      first_name, 
      last_name,
      password,
      profession, 
      city, 
      country, 
      bio_title,
      bio_description, 
      status,
      profile_image,
    };
    try {
        console.log("Data being sent", userData);
        const response = await apiClient.post("/api/auth/users/", userData);
        console.log("User created succesfully!");
        return response.data;
    } catch (err) {
        if (err.response && err.response.data) {
          console.log("Error during sign-up:", err.response.data);
        } else {
          console.log("Sign-up failed:", err.message);
        }
        throw err;
    }
}

//login in to a user account.......... there is inconsistency in the naming login/signin/
export const signIn = async (email, password) => {
   try {
       await getAccessToken(email, password);
       console.log("user signed in");
   } catch (error) {
        throw new Error(error.message);
   }
}

// Log out user by removing the token
export const signOut = () => {
    localStorage.removeItem('token');
  };