import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "./auth"

const AppAuthRoutes = () => {
  const { user } = useAuthStore()

  // if user is present, redirect to home
  if (user) {
    return <Navigate to="/home" />
  }

  return (
    <main>
      <Outlet />
    </main>
  )
}

export default AppAuthRoutes;