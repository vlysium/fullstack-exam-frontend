import useAuth from "./useAuth";
import { InputGroup } from "../_ui-elements";

const LoginPage = () => {
  const { authenticate } = useAuth("login");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = JSON.stringify(Object.fromEntries(formData.entries()));
    authenticate(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup name="name" type="text">Name</InputGroup>
        <InputGroup name="password" type="password">Password</InputGroup>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
