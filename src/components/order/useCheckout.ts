import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import useBasketStore from "../basket/store";
import ApiClient from "../../services/apiClient";
import { Order } from "../../entities/Order";

const useOrderMutation = () => {
  const apiClient = new ApiClient<Order>("order");
  const { basket, clearBasket } = useBasketStore();
  
  return useMutation(
    async () => {
      const orderData: Order = {
        items: basket.items.map((item) => ({
          product: { // only send the necessary data
            _id: item.product._id,
            name: item.product.name,
            price: item.product.price,
          },
          quantity: item.quantity,
        })),
        total: basket.total,
      };

      // console.log(orderData)

      return apiClient.create(orderData);
    },
    {
      onSuccess: () => {
        clearBasket();
        toast.success("Order placed successfully!");
      },
      onError: (error: any) => {
        // console.error(error.response.data.message);
        toast.error(error.response.data.message);
      }
    }
  );

}

const useCheckout = () => {
  const orderMutation = useOrderMutation();
  const checkout = () => {
    orderMutation.mutate();
  }

  return { checkout };
};

export default useCheckout;