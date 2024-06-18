import { useQuery } from "@tanstack/react-query";
import Cookies from "js-cookie";
import useAuthStore from "./store";
import useBasketStore from "../basket/store";
import ApiClient from "../../services/apiClient";
import { useEffect, useRef, useState } from "react";

const useCookieQuery = () => {
  const axiosInstance = new ApiClient("user");

  const initialCookie = useRef(Cookies.get("token"));
  const [isCookieChanged, setIsCookieChanged] = useState(false);

  const { setUser, removeUser } = useAuthStore();
  const { clearBasket } = useBasketStore();

  useEffect(() => {
    const handleCookieChange = () => {
      const newCookieValue = Cookies.get("token") as string;
      if (newCookieValue !== initialCookie.current) {
        setIsCookieChanged(true);
      }
    };

    // Use an interval to check for cookie changes
    const cookieCheckInterval = setInterval(handleCookieChange, 1000);

    return () => clearInterval(cookieCheckInterval);
  }, []);

  return useQuery({
    queryKey: ["jwt", Cookies.get("token")],
    queryFn: () => axiosInstance.getUser(),
    enabled: isCookieChanged,
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
