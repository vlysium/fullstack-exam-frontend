import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import { Product } from "../../entities/Product";


const apiClient = new ApiClient<Product>("products");

const useProducts = (slug: string) => {
  return useQuery({
    queryKey: ["products", slug],
    queryFn: () => apiClient.getOne(slug),
  })
}

export default useProducts;