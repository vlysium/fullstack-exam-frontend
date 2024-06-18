import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useAuthStore from "./store";
import useBasketStore from "../basket/store";
import ApiClient from "../../services/apiClient";
import Cookies from "js-cookie";

export interface Login {
  email: string;
  password: string;
}

export interface Signup {
  name: string;
  email: string;
  password: string;
}

type AuthData = Login | Signup;
type MutationType = "login" | "signup";

const useAuthMutation = <T extends AuthData>(type: MutationType) => {
  const apiClient = new ApiClient(type);
  const { setUser } = useAuthStore();

  return useMutation(
    async (data: T) => {
      switch (type) {
        case "login":
          return apiClient.login(data);
        case "signup":
          return apiClient.signup(data);
      }
    },
    {
      onSuccess: (response) => {
        Cookies.set("token", response.token, { expires: 1 }); // expires in 1 day
        setUser(response.user);

        switch (type) {
          case "login":
            toast.success(`Welcome back, ${response.user.name}`);
            break;
          case "signup":
            toast.success(`Account created successfully! Welcome ${response.user.name}!`);
            break;
        }
      },
      onError: (error: any) => {
        // console.error(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  );
};

const useAuth = () => {
  const { removeUser } = useAuthStore();
  const { clearBasket } = useBasketStore();

  const loginMutation = useAuthMutation<Login>("login");
  const signupMutation = useAuthMutation<Signup>("signup");

  const login = (data: Login) => {
    loginMutation.mutate(data);
  };

  const signup = (data: Signup) => {
    signupMutation.mutate(data);
  };

  const logout = () => {
    Cookies.remove("token");
    removeUser();
    clearBasket();
    toast.info("You have logged out");
  }

  return { login, signup, logout };
};

export default useAuth;
