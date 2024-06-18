import styles from "./basket.module.scss";
import { Icon } from "../_ui-elements";
import useCheckout from "../order/useCheckout";

const BasketCheckoutButton = () => {
  const { checkout } = useCheckout();

  return (
    <button className={styles.checkoutButton} onClick={checkout}>
      Checkout
      <Icon className={styles.checkoutButtonIcon} name="arrow_forward" />
    </button>
  )
}

export default BasketCheckoutButton;