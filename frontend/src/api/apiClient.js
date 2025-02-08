import axios from "axios";
import { getAuthToken } from "./authService";
import { BACKEND_API_BASE_URL, PASSPORT_API_BASE_URL } from "@/lib/constants";

const apiClient = axios.create({
    baseURL: BACKEND_API_BASE_URL,
});

//intercept requests to include jwt token
apiClient.interceptors.request.use((config) => {
    const token = getAuthToken(); // get token from local storage 
    if(token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default apiClient;


// const passportClient = axios.create({
//     baseURL: PASSPORT_API_BASE_URL,
// });

// passportClient.interceptors.request.use((config) => {
//     config.headers['X-API-KEY'] = import.meta.env.VITE_PASSPORT_API_KEY; // Replace with your actual API key
//     return config;
// });




