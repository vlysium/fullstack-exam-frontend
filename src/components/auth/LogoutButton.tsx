import Cookies from "js-cookie";
import useAuthStore from "./store";
import useBasketStore from "../basket/store";
import { toast } from "react-toastify";
import { Icon } from "../_ui-elements";
import styles from "./auth.module.scss";

const LogoutButton = () => {
  const { removeUser } = useAuthStore();
  const { clearBasket } = useBasketStore();

  const logout = () => {
    Cookies.remove("token");
    removeUser();
    clearBasket();
    toast.info("You have logged out");
  }

  return (
    <button className={styles.logoutButton} onClick={logout}>
      <Icon name="logout"/>
      Logout
    </button>
  )
}

export default LogoutButton;