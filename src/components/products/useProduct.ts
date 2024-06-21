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
    retry(failureCount, error: any) {
      if (error.response.status === 404) {
        return false; // don't retry 404 errors
      }
      return failureCount <= 3;
    },
  })
}

export default useProducts;