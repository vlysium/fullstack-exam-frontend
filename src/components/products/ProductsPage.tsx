import ProductList from "./ProductList";
import styles from "./products.module.scss";
import { DropdownMenu } from "../_ui-elements";
import useCuisines from "./useCuisines";
import useProductQueryStore from "./store";
import { Cuisine } from "../../entities/Category";

const ProductsPage = () => {

  const { data } = useCuisines()

  const { productQuery, setCuisine } = useProductQueryStore();

  return (
    <section className={styles.page}>
      <h1>ProductsPage</h1>
      <DropdownMenu
        text="Cuisine"
        icon="filter_list"
        data={data}
        state={productQuery.cuisine as string}
        setState={(state) => setCuisine(state as Cuisine)}
      />
      <ProductList />
    </section>
  )
}

export default ProductsPage;