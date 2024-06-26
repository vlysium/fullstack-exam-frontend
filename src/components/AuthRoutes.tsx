import { Navigate, Outlet } from "react-router-dom"
import { useAuthStore } from "./auth"

const AuthRoutes = () => {
  const { user } = useAuthStore()

  // if user is present, redirect to products page
  if (user) {
    return <Navigate to="/products" />
  }

  return (
    <main>
      <Outlet />
    </main>
  )
}

export default AuthRoutes;