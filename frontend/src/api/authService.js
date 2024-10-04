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
        console.log("The error is:", error.response.data);
    }
}

// get jwt token after they have been set
export const getAuthToken = () => {
    return localStorage.getItem("token");
}


// create a user
export const signUp = async (
    first_name, 
    last_name, 
    email, 
    profession, 
    city, 
    country, 
    bio_title,
    bio_description, 
    status,
    profile_image,
    skills,
    is_active,
) => {
    const userData = {
        first_name, 
        last_name, 
        email, 
        profession, 
        city, 
        country, 
        bio_title,
        bio_description, 
        status,
        profile_image,
        skills,
        is_active,
    };
    try {
        console.log("Data being sent", userData);
        const response = await apiClient.post("/api/auth/users/", userData);
        console.log("User created succesfully!");
        return response.data;
    } catch (err) {
        console.log("Error during sign-up", err.response.data)
    }
}

//login in to a user account
export const signIn = async (email, password) => {
   getAccessToken(email, password);
   console.log("user signed in");
}

// Log out user by removing the token
export const signOut = () => {
    localStorage.removeItem('token');
  };