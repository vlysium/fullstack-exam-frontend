import Pagination from "./Pagination";
import ProductList from "./ProductList";
import styles from "./products.module.scss";

const ProductsPage = () => {
  return (
    <section className={styles.page}>
      <h2>ProductsPage</h2>
      <ProductList />
      <Pagination />
    </section>
  )
}

export default ProductsPage;