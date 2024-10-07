import axios from "axios";
import { getAuthToken } from "./authService";

const API_BASE_URL = "https://declanwork-backend.onrender.com";

const apiClient = axios.create({
    baseURL: API_BASE_URL,
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