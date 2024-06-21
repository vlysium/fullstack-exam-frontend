import { LogoutButton } from "../auth";
import Profile from "./Profile";
import styles from "./user.module.scss";

const UserPage = () => {
  return (
    <section className={styles.page}>
      <h1>Your profile</h1>
      <Profile />
      <LogoutButton />
    </section>
  )
}

export default UserPage;