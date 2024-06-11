import { Link, useLocation } from "react-router-dom";
// import { useAuth } from "../../auth";
import styles from "./navigation.module.scss";
import Icon from "./../icon/Icon";

export interface NavigationItem {
  label: string;
  href: string;
  icon: string;
}

const Navigation = () => {
  // const { logout } = useAuth();

  const location = useLocation()

  const navigationItems: NavigationItem[] = [
    { label: "Home", href: "/home", icon: "home" },
    { label: "Menu", href: "/products", icon: "restaurant" },
    { label: "Basket", href: "/basket", icon: "shopping_bag" },
    { label: "Profile", href: "/profile", icon: "person" },
  ]

  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigationMenu}>
        {navigationItems.map(
          (item) => (
            <li key={item.label} className={styles.navigationLi}>
              <Link to={item.href} className={`${styles.navigationItem} ${location.pathname.includes(item.href) && styles.active}`}>
                <Icon name={item.icon} className={styles.icon}/>
                <span className={styles.navigationItemLabel}>{item.label}</span>
              </Link>
            </li>
          )
        )}
      </ul>
      {/* <button onClick={logout}>Logout</button> */}
    </nav>
  )
}

export default Navigation;