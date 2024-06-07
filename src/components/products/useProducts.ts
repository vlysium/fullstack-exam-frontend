import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import ApiClient from "../../services/apiClient";
import { Product } from "../../entities/Product";
import useProductQueryStore from "./store";


const apiClient = new ApiClient<Product>("products");

const useProducts = () => {
  const productQuery = useProductQueryStore((state) => state.productQuery);

  return useQuery({
    queryKey: ["products", productQuery],
    queryFn: () => apiClient.getAll({
      params: {
        page: productQuery.page,
      },
    }),
    staleTime: ms("6h"),
  })
}

export default useProducts;