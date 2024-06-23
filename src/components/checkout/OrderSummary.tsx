import formatPrice from "../../helpers/formatPrice";
import useBasketStore from "../basket/store";
import PayButton from "./PayButton";
import styles from "./checkout.module.scss";

const OrderSummary = () => {
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
      <PayButton />
    </div>
  )
}

export default OrderSummary;