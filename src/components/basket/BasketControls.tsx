import { Product } from "../../entities/Product";
import useBasketStore from "./store";
import styles from "./basket-controls.module.scss";
import AddToBasket from "./AddToBasket";
import RemoveFromBasket from "./RemoveFromBasket";

interface Props {
  product: Product;
}

const BasketControls = ({ product }: Props) => {
  const { basket } = useBasketStore();

  const productInBasket = basket.items.find((item) => item.product._id === product._id);

  return (
    <>
      <div className={styles.basketControls}>
        <RemoveFromBasket product={product} />
        <span className={styles.quantity}>{productInBasket ? productInBasket.quantity : 0}</span>
        <AddToBasket product={product} />
      </div>
    </>
  )
}

export default BasketControls;