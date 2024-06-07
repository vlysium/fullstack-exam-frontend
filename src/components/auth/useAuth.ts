import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAuthStore from "./store";
import ApiClient from "../../services/apiClient";

const useAuth = (endpoint?: "signup" | "login") => {
  const { setToken, removeToken, setUser, removeUser } = useAuthStore();

  const authenticateMutation = useMutation(
    async (data: object) => {
      if (!endpoint) {
        throw new Error("You must provide an endpoint to useAuth");
      }
      const apiClient = new ApiClient(endpoint);
      const dataJSON = JSON.stringify(data);
      return apiClient[endpoint](dataJSON);
    },
    {
      onSuccess: (response) => {
        setToken(response.token);
        setUser(response.user);
        if (endpoint === "signup") toast.success(`Account created successfully! Welcome ${response.user.name}!`);
        if (endpoint === "login") toast.success(`Welcome back, ${response.user.name}`);
      },
      onError: (error: any) => {
        // console.error(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  );

  const authenticate = (data: object) => {
    authenticateMutation.mutate(data);
  };

  const logout = () => {
    removeToken();
    removeUser();
    useAuthStore.persist.clearStorage();
    toast.info("You have logged out");
  }

  return { authenticate, logout };
};

export default useAuth;