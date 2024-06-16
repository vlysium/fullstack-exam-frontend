import { Product } from "../../entities/Product";
import useBasketStore from "./store";
import styles from "./basket-controls.module.scss";
import { Icon } from "../_ui-elements";

interface Props {
  product: Product;
}

const AddToBasket = ({ product }: Props) => {
  const { addToBasket} = useBasketStore();

  const handleAdd = () => {
    addToBasket(product);
  }

  return (
    <button className={styles.addToBasket} onClick={handleAdd}>
      <Icon name="add" />
    </button>
  )
}

export default AddToBasket;