import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import { Cuisine } from "../../entities/Category";
import ms from "ms";


const apiClient = new ApiClient<Cuisine>("cuisines");

const useCuisines = () => {
  return useQuery({
    queryKey: ["cuisines"],
    queryFn: () => apiClient.getAll(),
    staleTime: ms("6h"),
  })
}

export default useCuisines;