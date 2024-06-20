import formatPrice from "../../services/formatPrice";
import { Icon } from "../_ui-elements";
import useBasketStore from "../basket/store";
import styles from "./checkout.module.scss";
import useCheckout from "./useCheckout";

const OrderSummary = () => {
  const { checkout } = useCheckout();
  const { basket } = useBasketStore();

  return (
    <div className={styles.orderSummary}>
      <h2 className={styles.orderSummaryHeading}>Order summary</h2>
      <ul className={styles.orderSummaryList}>
        {basket.items.map((item) => (
          <li key={item.product._id}>
            <article className={styles.orderSummaryListItem}>
              <img className={styles.productImage} src={import.meta.env.VITE_BACKEND_URL + item.product.image.src} alt={item.product.image.alt} />
              <p className={styles.productName}>{item.quantity} × {item.product.name}</p>
              <p className={styles.productPrice}>{formatPrice(item.quantity * item.product.price)}</p>
            </article>
          </li>
        ))}
      </ul>
      <button className={styles.payButton} onClick={checkout}>
        <Icon className={styles.payButtonIcon} name="payments" />
        Pay DKK {formatPrice(basket.total)}
      </button>
    </div>
  )
}

export default OrderSummary;