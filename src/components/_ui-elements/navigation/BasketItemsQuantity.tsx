import styles from "./navigation.module.scss";
import useBasketStore from "../../basket/store";

const BasketItemsQuantity = () => {
  const { basket } = useBasketStore();

  if (basket.items_count === 0) {
    return null
  }

  return (
    <span className={styles.basketQuantity}>{basket.items_count}</span>
  )
}

export default BasketItemsQuantity