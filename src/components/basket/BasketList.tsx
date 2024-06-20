import styles from "./basket.module.scss";
import BasketListItem from "./BasketListItem";
import useBasketStore from "./store";
import formatPrice from "../../services/formatPrice";
import EmptyBasket from "./EmptyBasket";
import { Link } from "react-router-dom";
import { Icon } from "../_ui-elements";

const BasketList = () => {
  const { basket, clearBasket } = useBasketStore();

  if (basket.items.length <= 0) {
    return <EmptyBasket />
  }

  return (
    <>
      <ul className={styles.basketList}>
        {basket.items.map(item => (
          <BasketListItem key={item.product._id} item={item} />
        ))}
      </ul>
      <div className={styles.total}>
        <p className={styles.totalLabel}>Total:</p>
        <p className={styles.totalNumber}>DKK {formatPrice(basket.total)},-</p>
      </div>
      <div className={styles.actions}>
        <button onClick={clearBasket} className={styles.clearBasketButton}>
          <Icon name="delete" />
          Clear basket
        </button>
        <Link to="/checkout" className={styles.checkoutButton}>
          Checkout
          <Icon className={styles.checkoutButtonIcon} name="arrow_forward" />
        </Link>
      </div>
    </>
  )
}

export default BasketList;