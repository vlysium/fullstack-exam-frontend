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

  const productItem = {
    _id: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  const handleRemove = () => {
    removeFromBasket(productItem);
  }

  return (
    <button className={styles.addToBasket} onClick={handleRemove} disabled={productQuantity == undefined}>
      <Icon name="remove" />
    </button>
  )
}

export default RemoveFromBasket;