import styles from "./basket.module.scss";
import { Icon } from "../_ui-elements";

const BasketCheckoutButton = () => {
  return (
    <button className={styles.checkoutButton}>
      Checkout
      <Icon className={styles.checkoutButtonIcon} name="arrow_forward" />
    </button>
  )
}

export default BasketCheckoutButton;