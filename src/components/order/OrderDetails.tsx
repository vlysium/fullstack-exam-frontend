import { Order } from "../../entities/Order";
import epochToTimeDate from "../../services/epochToTimeDate";
import formatPrice from "../../services/formatPrice";
import styles from "./orders.module.scss";

interface Props {
  order: Order;
}

const OrderDetails = ({order}: Props) => {
  // console.log(order)

  // convert created_at to a 5 digit order id
  const pseudoOrderId = (num: number) => {
    const squareroot = Math.sqrt(num);
    const rounded = Math.round(Number(squareroot.toFixed(2)) * 100);
    const lastFiveDigits = rounded.toString().slice(-5);
    return lastFiveDigits;
  }

  return (
    <details className={styles.orderDetails}>
      <summary className={styles.orderDetailsSummary}>
        <span className={styles.orderDetailsSummaryId}>{pseudoOrderId(order.created_at)}</span>
        <span className={styles.orderDetailsSummaryItemCount}>{order.items_count}</span>
        <span className={styles.orderDetailsSummaryTotal}>DKK {formatPrice(order.total)},-</span>
      </summary>
      <div className={styles.orderDetailsContent}>
        <header className={styles.orderDetailsContentHeader}>
          <p className={styles.orderDetailsProduct}>Product</p>
          <p className={styles.orderDetailsQuantity}>Quantity</p>
          <p className={styles.orderDetailsPrice}>Total price</p>
        </header>
        <ul className={styles.orderDetailsContentList}>
          {order.items.map(
            (item) => (
              <li key={item.product._id} className={styles.orderDetailsContentListItem}>
                <p className={styles.orderDetailsProduct}>{item.product.name}</p>
                <p className={styles.orderDetailsQuantity}>{item.quantity}</p>
                <p className={styles.orderDetailsPrice}>{formatPrice(item.quantity * item.product.price)}</p>
              </li>
            )
          )}
        </ul>
        <footer className={styles.orderDetailsContentFooter}>
          <p className={styles.orderDetailsTotal}>Total amount paid: DKK {formatPrice(order.total)},-</p>
          <p className={styles.orderDetailsCreatedAt}>Order placed at: {epochToTimeDate(order.created_at)}</p>
        </footer>
      </div>
    </details>
  )
}

export default OrderDetails;