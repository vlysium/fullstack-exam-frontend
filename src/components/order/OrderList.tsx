import useOrders from "./useOrders";
import styles from "./orders.module.scss";
import { Pagination } from "../_ui-elements";
import useOrderQueryStore from "./store";
import OrderDetails from "./OrderDetails";

const OrderList = () => {
  const { data: orders, isLoading } = useOrders();

  const { orderQuery, setPage } = useOrderQueryStore();

  const skeletons = Array.from({ length: 5 })

  if (!orders || isLoading) {
    return (
      <>
        <div className={styles.orderListLabels}>
          <p className={styles.orderListLabelID}>Order ID</p>
          <p className={styles.orderListLabelItemCount}>Item count</p>
          <p className={styles.orderListLabelTotal}>Total</p>
        </div>
        <ul className={styles.orderList}>
          {skeletons.map(
            (_, index) => (
              <div key={index} className={styles.orderDetailsSkeleton}/>
            )
          )}
        </ul>
      </>
    )
  }

  return (
    <>
      <div className={styles.orderListLabels}>
        <p className={styles.orderListLabelID}>Order ID</p>
        <p className={styles.orderListLabelItemCount}>Item count</p>
        <p className={styles.orderListLabelTotal}>Total</p>
      </div>
      <ul className={styles.orderList}>
        {orders.items.map(
          (order) => (
            <OrderDetails key={order._id} order={order} />
          )
        )}
      </ul>
      {orders.items.length > 0 && <Pagination data={orders} query={orderQuery} setPage={setPage} />}
    </>
  )
}

export default OrderList;