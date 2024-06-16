import styles from "./basket.module.scss";
import { Link } from "react-router-dom";

const EmptyBasket = () => {
  return (
    <Link to="/products" className={styles.emptyBasket}>
      Your basket is empty
      <span className={styles.emptyBasketCallToAction}>Add some products!</span>
    </Link>
  )
}

export default EmptyBasket;