import ProductList from "./ProductList";
import styles from "./products.module.scss";
import { Icon } from "../_ui-elements";
import useProductQueryStore from "./store";
import CuisineSelector from "./CuisineSelector";
import MenuSelector from "./MenuSelector";
import SortSelector from "./SortSelector";

const ProductsPage = () => {

  const { productQuery, resetQuery } = useProductQueryStore();

  const isQuerySet = Object.keys(productQuery).length > 1; // page is always set

  return (
    <section className={styles.page}>
      <h1>ProductsPage</h1>
      <nav className={styles.filterWrapper}>
        <button className={styles.resetQueryButton} onClick={resetQuery} disabled={!isQuerySet}>
          <Icon name="ink_eraser" />
          Clear
        </button>
        <CuisineSelector />
        <MenuSelector />
        <SortSelector />
      </nav>
      <ProductList />
    </section>
  )
}

export default ProductsPage;