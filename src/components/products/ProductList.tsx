import ProductCard from "./ProductCard";
import useProducts from "./useProducts";
import styles from "./products.module.scss";
import ProductCardSkeleton from "./ProductCardSkeleton";
import { Pagination } from "../_ui-elements";
import useProductQueryStore from "./store";

const ProductList = () => {
  const { data: products, isLoading } = useProducts();

  const { productQuery, setPage } = useProductQueryStore();

  const skeletons = Array.from({ length: 12 })

  if (isLoading) {
    return (
      <ul className={styles.productList}>
        {skeletons.map(
          (_, index) => (
            <ProductCardSkeleton key={index} />
          )
        )}
      </ul>
    )
  }

  return (
    <>
      <ul className={styles.productList}>
        {products?.items.map(
          (product) => (
            <ProductCard key={product._id} product={product} />
          )
        )}
      </ul>
      <Pagination data={products} query={productQuery} setPage={setPage} />
    </>
  )
}

export default ProductList;