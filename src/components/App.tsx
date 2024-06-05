import { Navigate, Outlet } from "react-router-dom";
import { Navigation } from "./_ui-elements";
import { useAuthStore } from "./auth"

const App = () => {
  const { user } = useAuthStore()

  if (!user) {
    return <Navigate to="/login" />
  }

  return (
    <main className="main-app">
      <Navigation />
      <h1>App</h1>
      <Outlet />
    </main>
  )
}

export default App;
