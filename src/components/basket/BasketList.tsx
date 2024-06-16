import styles from "./basket.module.scss";
import BasketListItem from "./BasketListItem";
import useBasketStore from "./store";
import formatPrice from "../../services/formatPrice";
import EmptyBasket from "./EmptyBasket";

const BasketList = () => {
  const { basket } = useBasketStore();

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
    </>
  )
}

export default BasketList;