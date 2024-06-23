import styles from "./basket.module.scss";
import { BasketItem } from "../../entities/Basket";
import BasketControls from "./BasketControls";
import formatPrice from "../../helpers/formatPrice";

interface Props {
  item: BasketItem
}

const BasketListItem = ({ item }: Props) => {
  // console.log(item.product)

  return (
    <li>
      <article className={styles.productCard}>
        <img className={styles.productImage} src={import.meta.env.VITE_BACKEND_URL + item.product.image.src} alt={item.product.image.alt} />
        <div className={styles.productContent}>
          <div className={styles.productInfo}>
            <h3 className={styles.productName}>{item.product.name}</h3>
            <BasketControls product={item.product} compact={true}/>
          </div>
          <p className={styles.productPrice}>{formatPrice(item.product.price * item.quantity)}</p>
        </div>
      </article>
    </li>
  )
}

export default BasketListItem;