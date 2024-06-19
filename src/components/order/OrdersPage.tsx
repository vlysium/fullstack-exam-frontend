import EmptyOrders from "./EmptyOrders";
import OrderList from "./OrderList";
import styles from "./orders.module.scss";
import useOrders from "./useOrders";

const OrdersPage = () => {
  const { data: order } = useOrders();

  return (
    <section className={styles.page}>
      <h1>Your orders</h1>
      {order?.items.length === 0 ? <EmptyOrders /> : <OrderList /> }
    </section>
  )
}

export default OrdersPage;