import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import { Menu } from "../../entities/Category";


const apiClient = new ApiClient<Menu>("menus");

const useMenus = () => {
  return useQuery({
    queryKey: ["menus"],
    queryFn: () => apiClient.getAll(),
  })
}

export default useMenus;