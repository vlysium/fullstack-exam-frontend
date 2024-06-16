import { Product } from "../../entities/Product";
import useBasketStore from "./store";
import styles from "./basket-controls.module.scss";
import { Icon } from "../_ui-elements";

interface Props {
  product: Product;
  productQuantity: number | undefined;
}

const RemoveFromBasket = ({ product, productQuantity }: Props) => {
  const { removeFromBasket } = useBasketStore();

  const handleRemove = () => {
    removeFromBasket(product);
  }

  return (
    <button className={styles.removeFromBasket} onClick={handleRemove} disabled={productQuantity == undefined}>
      <Icon name="remove" />
    </button>
  )
}

export default RemoveFromBasket;