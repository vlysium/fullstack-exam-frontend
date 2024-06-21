import formatPrice from "../../services/formatPrice";
import { Icon } from "../_ui-elements";
import useBasketStore from "../basket/store";
import styles from "./checkout.module.scss"
import useCheckout from "./useCheckout";

const PayButton = () => {
  const { mutate: checkout, isLoading } = useCheckout();
  const { basket } = useBasketStore();

  return (
    <button className={styles.payButton} onClick={() => checkout()} disabled={isLoading}>
      <Icon className={styles.payButtonIcon} name="payments" />
      Pay DKK {formatPrice(basket.total)}
    </button>
  )
}

export default PayButton;