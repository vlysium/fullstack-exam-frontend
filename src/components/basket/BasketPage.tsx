import BasketList from "./BasketList";
import styles from "./basket.module.scss";

const BasketPage = () => {
  return (
    <section className={styles.page}>
      <h1>Basket</h1>
      <BasketList />
    </section>
  )
}

export default BasketPage;