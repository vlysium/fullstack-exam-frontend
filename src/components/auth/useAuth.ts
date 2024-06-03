import { useState } from "react";
import useAuthStore from "./store";
import ApiClient from "../../services/apiClient";

const useAuth = (endpoint: "signup" | "login") => {
  const { setToken, removeToken, setUser, removeUser } = useAuthStore();
  const [error, setError] = useState(null);

  const apiClient = new ApiClient(endpoint);

  const authenticate = async (data: string) => {
    try {
      const response = await apiClient[endpoint](data);
      setToken(response.token);
      setUser(response.user);
    } catch (error) {
      setError(error.response.data.message);
      console.error(error.response.data.message);
    }
  };

  const logout = () => {
    removeToken();
    removeUser();
    useAuthStore.persist.clearStorage();
  }

  return { authenticate, logout, error };
};

export default useAuth;