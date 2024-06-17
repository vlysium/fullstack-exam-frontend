import { Navigate, Outlet } from "react-router-dom";
import { Navigation } from "./_ui-elements";
import { useAuthStore } from "./auth"
import Cookies from "js-cookie";

const App = () => {
  const { user, removeUser } = useAuthStore();

  // if user or token is missing, redirect to login
  //! a bug occurs if the conditions are combined, which is why they are separated
  if (!user) {
    Cookies.remove("token")
    return <Navigate to="/login" />
  }
  if (!Cookies.get("token")) {
    removeUser();
    return <Navigate to="/login" />
  }

  return (
    <main className="main-app">
      <Navigation />
      <Outlet />
    </main>
  )
}

export default App;
