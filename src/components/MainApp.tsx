import { Navigate, Outlet } from "react-router-dom";
import { Navigation } from "./_ui-elements"
import Cookies from "js-cookie";
import useCookieQuery from "./auth/useCookieQuery";

const MainApp = () => {
  
  useCookieQuery();

  // if token is missing, redirect to login
  if (!Cookies.get("token")) {
    return <Navigate to="/login" />
  }

  return (
    <main className="main-app">
      <Navigation />
      <Outlet />
    </main>
  )
}

export default MainApp;
