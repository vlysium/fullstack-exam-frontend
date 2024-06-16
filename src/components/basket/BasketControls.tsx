import { Product } from "../../entities/Product";
import useBasketStore from "./store";
import styles from "./basket-controls.module.scss";
import AddToBasket from "./AddToBasket";
import RemoveFromBasket from "./RemoveFromBasket";

interface Props {
  product: Product;
  compact?: boolean;
}

const BasketControls = ({ product, compact }: Props) => {
  const { basket } = useBasketStore();

  const productQuantity = basket.items.find((item) => item.product._id === product._id)?.quantity;

  return (
    <>
      <div className={`${styles.basketControls} ${compact ? styles.compact : ""}`}>
        <RemoveFromBasket product={product} productQuantity={productQuantity} />
        <span className={styles.quantity}>{productQuantity ? productQuantity : 0}</span>
        <AddToBasket product={product} />
      </div>
    </>
  )
}

export default BasketControls;