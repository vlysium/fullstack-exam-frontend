import styles from "./pagination.module.scss";
import useProducts from "./useProducts";
import useProductQueryStore from "./store";
import { Icon } from "../_ui-elements";
import { useLayoutEffect } from "react";

const Pagination = () => {
  const { data } = useProducts();

  const { productQuery, setPage } = useProductQueryStore();

  // smooth scroll to the top of the page when the page changes
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [productQuery.page]);

  const handlePaginate = (action: "NEXT_PAGE" | "PREVIOUS_PAGE" | "TO_PAGE", page?: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll to top of page

    switch (action) {
      case "NEXT_PAGE":
        setPage(productQuery.page + 1);
        break;
      case "PREVIOUS_PAGE":
        setPage(productQuery.page - 1);
        break;
      case "TO_PAGE":
        if (page) setPage(page);
        break;
      default:
        console.error("Invalid action");
        break;
    }
  }

  return (
    <nav className={styles.paginationContainer}>
      <ul className={styles.paginationList}>
        <li>
          <button className={`${styles.paginationButton} ${styles.buttonPrevious}`} disabled={!data?.previous} onClick={() => handlePaginate("PREVIOUS_PAGE")}>
            <Icon name="arrow_back_ios" />
            <span>Previous</span>
          </button>
        </li>

        {Array.from({ length: data?.totalPages ?? 1 }).map((_, page) => (
          page += 1, // convert 0-based page to 1-based page
          <li key={page} className={styles.page}>
            <button className={`${styles.paginationButton} ${productQuery.page == page ? styles.pageActive : ""}`} onClick={() => handlePaginate("TO_PAGE", page)}>
              <span>{page}</span>
            </button>
          </li>
        ))}

        <li>
          <button className={`${styles.paginationButton} ${styles.buttonNext}`} disabled={!data?.next} onClick={() => handlePaginate("NEXT_PAGE")}>
            <span>Next</span>
            <Icon name="arrow_forward_ios" />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination;