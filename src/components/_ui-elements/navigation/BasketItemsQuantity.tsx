import styles from "./navigation.module.scss";
import useBasketStore from "../../basket/store";

const BasketItemsQuantity = () => {
  const { basket } = useBasketStore();

  const basketQuantity = basket.items.reduce((acc, item) => acc + item.quantity, 0);

  if (basketQuantity === 0) {
    return null
  }

  return (
    <span className={styles.basketQuantity}>{basketQuantity}</span>
  )
}

export default BasketItemsQuantity