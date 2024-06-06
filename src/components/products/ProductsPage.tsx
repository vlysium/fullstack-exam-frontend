import ProductList from "./ProductList";
import styles from "./products.module.scss";

const ProductsPage = () => {

  return (
    <section className={styles.page}>
      <h2>ProductsPage</h2>
      <ProductList />
    </section>
  )
}

export default ProductsPage;