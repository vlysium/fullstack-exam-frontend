import { useAuth } from "../auth"

const Navigation = () => {
  const { logout } = useAuth();

  return (
    <nav>
      <div>Navigation</div>
      <button onClick={logout}>Logout</button>
    </nav>
  )
}

export default Navigation;