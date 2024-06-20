import { Icon } from "../_ui-elements";
import { useAuthStore } from "../auth";
import styles from "./user.module.scss";

const PaymentCard = () => {
  const { user } = useAuthStore();

  return (
    <div className={styles.paymentCard}>
      <div className={styles.cardTopRow}>
        <p>Credit Card</p>
        <Icon className={styles.verifiedIcon} name="check_circle" />
      </div>
      <div className={styles.cardNumber}>
        <p>**** **** **** 1337</p>
      </div>
      <div className={styles.cardBottomRow}>
        <div className={styles.cardHolder}>
          <p className={styles.label}>Card Holder</p>
          <p className={styles.cardHolderName}>{user?.name || ""}</p>
        </div>
        <div className={styles.cardExpiry}>
          <p className={styles.label}>Expiry</p>
          <p>12/99</p>
        </div>
      </div>
    </div>
  )
}

export default PaymentCard;