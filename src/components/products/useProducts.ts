import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../../services/apiClient";
import { Product } from "../../entities/Product";


const apiClient = new ApiClient<Product>("products");

const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => apiClient.getAll({
      params: {
        page: 1,
      },
    }),
    staleTime: ms("6h"),
  })
}

export default useProducts;