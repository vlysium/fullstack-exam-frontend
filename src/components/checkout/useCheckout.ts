import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useBasketStore from "../basket/store";
import ApiClient from "../../services/apiClient";
import { CreateOrder } from "../../entities/Order";

const apiClient = new ApiClient<CreateOrder>("order");

const useCheckout = () => {
  const { basket, clearBasket } = useBasketStore();

  const orderData: CreateOrder = {
    items: basket.items.map((item) => ({
      product: { // only send the necessary data
        _id: item.product._id,
        name: item.product.name,
        price: item.product.price,
      },
      quantity: item.quantity,
    })),
    total: basket.total,
    items_count: basket.items_count,
  };
  
  return useMutation({
    mutationFn: () => apiClient.create(orderData),
    onSuccess: () => {
      clearBasket();
      toast.success("Order created successfully!");
    },
    onError: () => {
      toast.error("Failed to create order");
    },
  });
};

export default useCheckout;