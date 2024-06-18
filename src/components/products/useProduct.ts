import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import { Product } from "../../entities/Product";
import ms from "ms";


const apiClient = new ApiClient<Product>("products");

const useProducts = (slug: string) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => apiClient.getOne(slug),
    staleTime: ms("6h"),
  })
}

export default useProducts;