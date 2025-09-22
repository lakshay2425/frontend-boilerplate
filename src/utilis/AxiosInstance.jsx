import axios from 'axios';
import {config} from "./config"

const backendURL = config.get("VITE_BACKEND_URL");

const axiosInstance = axios.create({
  baseURL: backendURL, 
  withCredentials: true, 
  headers: {
    "Content-Type" : 'application/json'
  }
});

export default axiosInstance;