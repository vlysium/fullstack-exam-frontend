import { Link } from "react-router-dom";
import { Product } from "../../entities/Product";
import styles from "./products.module.scss";
import { StarRating } from "../_ui-elements";
import formatPrice from "../../services/formatPrice";

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {

  // console.log(product)

  return (
    <li>
      <Link className={styles.productItem} to={`/product/${product.slug}`}>
        <article className={styles.productCard}>
          <div className={styles.productCardImageWrapper}>
            <img className={styles.productCardImage} src={import.meta.env.VITE_BACKEND_URL + product.image.src} alt={product.image.alt} loading="lazy"/>
          </div>
          <div className={styles.productCardContent}>
            <p className={styles.productPrice}>DKK {formatPrice(product.price)},-</p>
            <h3 className={styles.productName}>{product.name}</h3>
            <div className={styles.productRatingContainer}>
              <p className={styles.productRatingNumber}>{product.rating}</p>
              <StarRating rating={product.rating} />
            </div>
          </div>
        </article>
      </Link>
    </li>
  )
}

export default ProductCard;