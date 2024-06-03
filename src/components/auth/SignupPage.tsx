import useAuth from "./useAuth";
import { InputGroup } from "../_ui-elements";

const SignupPage = () => {
  const { authenticate } = useAuth("signup");

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
        <InputGroup name="email" type="email">Email</InputGroup>
        <InputGroup name="password" type="password">Password</InputGroup>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default SignupPage;