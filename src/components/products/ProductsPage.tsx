import ProductList from "./ProductList";
import styles from "./products.module.scss";
import { DropdownMenu } from "../_ui-elements";
import useCuisines from "./useCuisines";
import useMenus from "./useMenus";
import useProductQueryStore from "./store";
import { Cuisine, Menu } from "../../entities/Category";

const ProductsPage = () => {

  const { data: cuisines } = useCuisines()
  const { data: menus } = useMenus()

  const { productQuery, setCuisine, setMenu } = useProductQueryStore();

  return (
    <section className={styles.page}>
      <h1>ProductsPage</h1>
      <nav className={styles.filterWrapper}>
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