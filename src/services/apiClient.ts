import axios, { AxiosRequestConfig } from "axios";
import { User } from "../entities/User";

interface AuthResponse {
  token: string;
  user: User;
}

interface FetchResponse<T> {
  count: number;
  items: T[];
  previous?: Pagination;
  next?: Pagination;
  page: number;
}

interface Pagination {
  page: number;
  limit: number;
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
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

  // products endpoints

  getAll = async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<FetchResponse<T>>(`${this.endpoint}`, config);
    return response.data;
  }
  
}

export default ApiClient;