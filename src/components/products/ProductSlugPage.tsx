import { useParams } from "react-router-dom";
import useProduct from "./useProduct";
import styles from "./product-slug.module.scss";
import { StarRating } from "../_ui-elements";
import capitalizeText from "../../services/capitalizeText";

const ProductSlugPage = () => {
  const { slug } = useParams();
  // console.log(slug);

  const { data: product } = useProduct(slug!);
  // console.log(product);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className={styles.page}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={import.meta.env.VITE_BACKEND_URL + product.image.src} />
      </div>
      <div className={styles.productContent}>
        <div className={styles.productRatingContainer}>
          <p className={styles.productRatingNumber}>{product.rating}</p>
          <StarRating rating={product.rating} />
        </div>
        <h1 className={styles.productName}>{product.name}</h1>
        <div>
          <h2 className={styles.productDescriptionLabel}>Description</h2>
          <p className={styles.productDescription}>{product.description}</p>
        </div>
        <div className={styles.productCategoryWrapper}>
          {Object.keys(product.category).map((category) => (
            <div key={category}>
              <p className={styles.productCategoryName}>{capitalizeText(category)}:</p>
              <ul className={styles.productCategoryColumn}>
                {product.category[category as "cuisine" | "menu"].map((item: string) => (
                  <li key={item} className={styles.productCategoryItem}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className={styles.productPrice}>DKK {product.price},-</p>
      </div>
    </section>
  )
}

export default ProductSlugPage;