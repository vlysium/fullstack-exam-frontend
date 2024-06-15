import { Product } from "../../entities/Product";
import useBasketStore from "./store";
import styles from "./basket-controls.module.scss";
import { Icon } from "../_ui-elements";

interface Props {
  product: Product;
}

const AddToBasket = ({ product }: Props) => {
  const { addToBasket} = useBasketStore();

  const productItem = {
    _id: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  const handleAdd = () => {
    addToBasket(productItem);
  }

  return (
    <button className={styles.addToBasket} onClick={handleAdd}>
      <Icon name="add" />
    </button>
  )
}

export default AddToBasket;