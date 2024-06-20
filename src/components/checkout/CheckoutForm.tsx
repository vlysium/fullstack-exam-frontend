import { PaymentCard } from "../user";
import OrderSummary from "./OrderSummary";
import styles from "./checkout.module.scss";

const CheckoutForm = () => {
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
        <OrderSummary />
      </form>
  )
}

export default CheckoutForm;