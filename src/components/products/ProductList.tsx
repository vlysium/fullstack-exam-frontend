import ProductCard from "./ProductCard";
import useProducts from "./useProducts";
import styles from "./products.module.scss";
import ProductCardSkeleton from "./ProductCardSkeleton";

const ProductList = () => {

  const { data, isLoading } = useProducts();

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
    <ul className={styles.productList}>
      {data?.items.map(
        (product) => (
          <ProductCard key={product._id} product={product} />
        )
      )}
    </ul>
  )
}

export default ProductList;