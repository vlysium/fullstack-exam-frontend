import { Link } from "react-router-dom";
import styles from "./orders.module.scss";

const EmptyOrders = () => {
  return (
    <Link to="/products" className={styles.emptyOrders}>
      No orders? No problem!
      <span className={styles.emptyOrdersCallToAction}>Create your first order!</span>
    </Link>
  )
}

export default EmptyOrders;