import formatPrice from "../../services/formatPrice";
import { Icon } from "../_ui-elements";
import useBasketStore from "../basket/store";
import { PaymentCard } from "../user";
import styles from "./checkout.module.scss";
import useCheckout from "./useCheckout";

const CheckoutForm = () => {
  const { checkout } = useCheckout();
  const { basket } = useBasketStore();

  return (
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.paymentInfo}>
          <div>
            <h1 className={styles.heading}>Payment details</h1>
          </div>
          <div>
            <p className={styles.paymentCardHeading}>Pay with Credit Card</p>
            <div className={styles.paymentCardWrapper}>
              <PaymentCard />
            </div>
          </div>
        </div>
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
      </form>
  )
}

export default CheckoutForm;