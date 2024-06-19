import { useQuery } from "@tanstack/react-query";
import ApiClient from "../../services/apiClient";
import { Order } from "../../entities/Order";
import useOrderQueryStore from "./store";



const apiClient = new ApiClient<Order>("orders");

const useOrders = () => {
  const orderQuery = useOrderQueryStore((state) => state.orderQuery);

  return useQuery({
    queryKey: ["orders", orderQuery],
    queryFn: () => apiClient.getAll({
      params: {
        page: orderQuery.page,
      },
    }),
    keepPreviousData: true, // keep previous data in view while fetching new data
  })
}

export default useOrders;