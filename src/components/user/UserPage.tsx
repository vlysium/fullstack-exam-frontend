import { useAuthStore, useAuth } from "../auth";
import styles from "./user.module.scss";

const UserPage = () => {
  const { user } = useAuthStore();
  const { logout } = useAuth();

  return (
    <section className={styles.page}>
      <h1>Your profile</h1>
      <p>Name: {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </section>
  )
}

export default UserPage;