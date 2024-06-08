import styles from "./products.module.scss";

const ProductCardSkeleton = () => {
  return (
    <li>
      <div className={styles.productItemSkeleton}>
        <div className={styles.productCardSkeleton}>
          <div className={styles.productCardImageWrapper}>
            <div className={styles.productCardImageSkeleton} />
          </div>
          <div className={styles.productCardContent}>
            <div className={styles.productCardContentSkeleton} />
          </div>
        </div>
      </div>
    </li>
  )
}

export default ProductCardSkeleton;