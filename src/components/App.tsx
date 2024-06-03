import { Navigate, Outlet } from "react-router-dom";
import Navigation from "./_ui-elements/Navigation";
import { useAuthStore } from "./auth"

const App = () => {
  const { user } = useAuthStore()

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <>
      <Navigation />
      <h1>App</h1>
      <Outlet />
    </>
  )
}

export default App;
