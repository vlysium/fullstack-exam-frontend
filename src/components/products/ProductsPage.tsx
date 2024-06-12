import ProductList from "./ProductList";
import styles from "./products.module.scss";
import { DropdownMenu, Icon } from "../_ui-elements";
import useCuisines from "./useCuisines";
import useMenus from "./useMenus";
import useProductQueryStore from "./store";
import { Cuisine, Menu } from "../../entities/Category";

const ProductsPage = () => {

  const { data: cuisines } = useCuisines()
  const { data: menus } = useMenus()

  const { productQuery, resetQuery, setCuisine, setMenu } = useProductQueryStore();

  return (
    <section className={styles.page}>
      <h1>ProductsPage</h1>
      <nav className={styles.filterWrapper}>
        <button className={styles.resetQueryButton} onClick={resetQuery} disabled={!(productQuery.cuisine || productQuery.menu)}>
          <Icon name="ink_eraser" />
          Clear
        </button>
        <DropdownMenu
          text="Cuisine"
          icon="filter_list"
          data={cuisines}
          state={productQuery.cuisine as string}
          setState={(state) => setCuisine(state as Cuisine)}
        />
        <DropdownMenu
          text="Menu"
          icon="filter_list"
          data={menus}
          state={productQuery.menu as string}
          setState={(state) => setMenu(state as Menu)}
        />
      </nav>
      <ProductList />
    </section>
  )
}

export default ProductsPage;