import { useMutation } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import useAuthStore from "./store";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface Signup {
  name: string;
  email: string;
  password: string;
}

const apiClient = new ApiClient("signup");

const useSignup = () => {
  const { setUser } = useAuthStore();

  return useMutation({
    mutationFn: (data: Signup) => apiClient.signup(data),
    onSuccess: (response) => {
      Cookies.set("token", response.token, { expires: 1 }); // expires in 1 day
      setUser(response.user);
      toast.success(`Account created successfully! Welcome ${response.user.name}!`);
    },
    onError: (error: AxiosError<{message: string}>) => {
      if (error.response?.status === 400) {
        toast.error(error.response?.data.message); // show error message from server
      } else {
        toast.error("Network error, please try again later.");
      }
    }
  })
};

export default useSignup;