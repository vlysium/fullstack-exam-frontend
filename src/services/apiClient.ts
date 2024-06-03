import axios from "axios";
import { User } from "../entities/User";

interface AuthResponse {
  token: string;
  user: User;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.BACKEND_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

class ApiClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  // auth endpoints

  signup = async (data: T) => {
    const response = await axiosInstance.post<AuthResponse>(`${this.endpoint}`, data);
    return response.data;
  }

  login = async (data: T) => {
    const response = await axiosInstance.post<AuthResponse>(`${this.endpoint}`, data);
    return response.data;
  }
  
}

export default ApiClient;