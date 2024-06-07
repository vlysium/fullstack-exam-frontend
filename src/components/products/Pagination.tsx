import styles from "./pagination.module.scss";
import useProducts from "./useProducts";
import useProductQueryStore from "./store";
import { Icon } from "../_ui-elements";

const Pagination = () => {
  const { data } = useProducts();

  const { productQuery, setPage } = useProductQueryStore();

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.paginationList}>
        <li>
          <button className={`${styles.paginationButton} ${styles.buttonPrevious}`} disabled={!data?.previous} onClick={() => setPage(productQuery.page - 1)}>
            <Icon name="arrow_back_ios" />
            <span>Previous</span>
          </button>
        </li>

        {Array.from({ length: data?.totalPages ?? 1 }).map((_, index) => (
          <li key={index} className={styles.page}>
            <button className={`${styles.paginationButton} ${productQuery.page == index + 1 ? styles.pageActive : ""}`} onClick={() => setPage(index + 1)}>
              <span>{index + 1}</span>
            </button>
          </li>
        ))}

        <li>
          <button className={`${styles.paginationButton} ${styles.buttonNext}`} disabled={!data?.next} onClick={() => setPage(productQuery.page + 1)}>
            <span>Next</span>
            <Icon name="arrow_forward_ios" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;