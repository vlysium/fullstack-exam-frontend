import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import { Cuisine } from "../../entities/Category";


const apiClient = new ApiClient<Cuisine>("cuisines");

const useCuisines = () => {
  return useQuery({
    queryKey: ["cuisines"],
    queryFn: () => apiClient.getAll(),
  })
}

export default useCuisines;