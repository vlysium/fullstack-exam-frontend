import OrderList from "./OrderList";
import styles from "./orders.module.scss";

const OrdersPage = () => {
  return (
    <section className={styles.page}>
      <h1>Orders</h1>
      <OrderList />
    </section>
  )
}

export default OrdersPage;