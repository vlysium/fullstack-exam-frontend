import styles from "./pagination.module.scss";
import { Icon } from "..";
import { useLayoutEffect } from "react";

interface Props {
  data: any;
  query: {
    page: number;
  };
  setPage: (page: number) => void;
}

const Pagination = ({ data, query, setPage }: Props) => {

  // smooth scroll to the top of the page when the page changes
  useLayoutEffect(() => {
    window.scrollTo({ top: 0 });
  }, [data]);

  const handlePaginate = (action: "NEXT_PAGE" | "PREVIOUS_PAGE" | "TO_PAGE", page?: number) => {
    switch (action) {
      case "NEXT_PAGE":
        setPage(query.page + 1);
        break;
      case "PREVIOUS_PAGE":
        setPage(query.page - 1);
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
            <button className={`${styles.paginationButton} ${query.page == page ? styles.pageActive : ""}`} onClick={() => handlePaginate("TO_PAGE", page)}>
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