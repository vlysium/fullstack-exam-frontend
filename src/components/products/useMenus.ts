import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import { Menu } from "../../entities/Category";
import ms from "ms";


const apiClient = new ApiClient<Menu>("menus");

const useMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("6h"),
  })
}

export default useMenus;