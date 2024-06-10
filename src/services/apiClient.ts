import axios, { AxiosRequestConfig } from "axios";
import { User } from "../entities/User";
import { toast } from "react-toastify";

interface AuthResponse {
  token: string;
  user: User;
}

interface FetchResponse<T> {
  count: number;
  totalCount: number;
  items: T[];
  previous?: Pagination;
  next?: Pagination;
  page: number;
  totalPages: number;
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
    try {
      const response = await axiosInstance.post<AuthResponse>(`${this.endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.code == "ERR_NETWORK") {
        toast.error("Network error, please try again later");
      }
      throw error;
    }
  }

  login = async (data: T) => {
    try {
      const response = await axiosInstance.post<AuthResponse>(`${this.endpoint}`, data);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.code == "ERR_NETWORK") {
        toast.error("Network error, please try again later");
      }
      throw error;
    }
  }

  // products endpoints

  getAll = async (config?: AxiosRequestConfig) => {
    const response = await axiosInstance.get<FetchResponse<T>>(`${this.endpoint}`, config);
    return response.data;
  }

  getOne = async (slug: string) => {
    const response = await axiosInstance.get<T>(`${this.endpoint}/${slug}`);
    return response.data;
  }
  
}

export default ApiClient;