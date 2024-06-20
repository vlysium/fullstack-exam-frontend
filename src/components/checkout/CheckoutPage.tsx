import { Navigate } from "react-router-dom";
import useBasketStore from "../basket/store";
import CheckoutForm from "./CheckoutForm";
import styles from "./checkout.module.scss";

const CheckoutPage = () => {
  const { basket } = useBasketStore();

  // redirect to products page if basket is empty
  if (basket.items.length <= 0) {
    return <Navigate to="/products" />
  }

  return (
    <section className={styles.page}>
      <CheckoutForm />
    </section>
  )
}

export default CheckoutPage;