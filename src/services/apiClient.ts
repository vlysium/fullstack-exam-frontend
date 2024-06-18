import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { User } from "../entities/User";
import { toast } from "react-toastify";
import Cookies from 'js-cookie';
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

class ApiClient<T> {
  endpoint: string;
  axiosInstance: AxiosInstance;

  constructor(endpoint: string) {
    this.endpoint = endpoint;

    this.axiosInstance = axios.create({
      baseURL: import.meta.env.VITE_BACKEND_URL + "/api",
      headers: {
        "Content-Type": "application/json",
      },
    });

    // request interceptor to dynamically set x-auth-token header
    this.axiosInstance.interceptors.request.use(
      (config) => {
        const token = Cookies.get("token");
        if (token) {
          config.headers["x-auth-token"] = token;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }

  // auth endpoints

  signup = async (data: T) => {
    const dataJSON = JSON.stringify(data);
    try {
      const response = await this.axiosInstance.post<AuthResponse>(`${this.endpoint}`, dataJSON);
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
    const dataJSON = JSON.stringify(data);
    try {
      const response = await this.axiosInstance.post<AuthResponse>(`${this.endpoint}`, dataJSON);
      return response.data;
    } catch (error) {
      console.error(error);
      if (error.code == "ERR_NETWORK") {
        toast.error("Network error, please try again later");
      }
      throw error;
    }
  }

  getUser = async () => {
    try {
      const response = await this.axiosInstance.get("user");
      return response.data;
    } catch (error) {
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        throw new Error("Unauthorized");
      }
      throw error;
    }
  }

  // fetch endpoints

  getAll = async (config?: AxiosRequestConfig) => {
    const response = await this.axiosInstance.get<FetchResponse<T>>(`${this.endpoint}`, config);
    return response.data;
  }

  getOne = async (slug: string) => {
    const response = await this.axiosInstance.get<T>(`${this.endpoint}/${slug}`);
    return response.data;
  }

  create = async (data: T) => {
    const dataJSON = JSON.stringify(data);
    const response = await this.axiosInstance.post<T>(`${this.endpoint}`, dataJSON);
    return response.data;
  }
  
}

export default ApiClient;