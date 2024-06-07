import ProductCard from "./ProductCard";
import useProducts from "./useProducts";
import styles from "./products.module.scss";

const ProductList = () => {

  const { data } = useProducts();
  console.log(data);

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