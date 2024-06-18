import { useAuthStore, useAuth } from "../auth";

const UserPage = () => {
  const { user } = useAuthStore();
  const { logout } = useAuth();

  return (
    <>
      <h1>Profile</h1>
      <p>Name: {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </>
  )
}

export default UserPage;