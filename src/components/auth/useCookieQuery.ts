import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useAuthStore from "./store";
import useBasketStore from "../basket/store";
import ApiClient from "../../services/apiClient";

const useCookieQuery = () => {
  const axiosInstance = new ApiClient("user");

  const { setUser, removeUser } = useAuthStore();
  const { clearBasket } = useBasketStore();

  return useQuery({
    queryKey: ["jwt", Cookies.get("token")],
    queryFn: () => axiosInstance.getUser(),
    enabled: !!Cookies.get("token"),
    retry(failureCount, error: Error) {
      if (error.message === "Unauthorized") {
        Cookies.remove("token");
        removeUser();
        clearBasket();
      }
      return failureCount <= 3;
    },
    onSuccess: (data) => {
      setUser(data);
    },
  });

};

export default useCookieQuery;
