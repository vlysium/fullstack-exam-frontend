import { Icon } from "../_ui-elements";
import { useAuth } from "../auth";
import Profile from "./Profile";
import styles from "./user.module.scss";

const UserPage = () => {
  const { logout } = useAuth();

  return (
    <section className={styles.page}>
      <h1>Your profile</h1>
      <Profile />
      <button className={styles.logoutButton} onClick={logout}>
        <Icon name="logout"/>
        Logout
      </button>
    </section>
  )
}

export default UserPage;