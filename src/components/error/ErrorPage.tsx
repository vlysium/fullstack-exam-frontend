import { Icon } from "../_ui-elements";
import styles from "./error-page.module.scss";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="main-app">
      <section className={styles.page}>
        <p className={styles.errorCode}>404</p>
        <h1 className={styles.heading}>Page not found</h1>
        <h2 className={styles.subHeading}>Oops! this page is a recipe for disaster. Let's cook up something better.</h2>
        <Link to="/" className={styles.returnButton}>
          <Icon name="arrow_back" />
          Return home
        </Link>
      </section>
    </main>
  )
}

export default ErrorPage;