import { useId } from "react";
import useAuth from "./useAuth";

const LoginPage = () => {
  const emailId = useId();
  const passwordId = useId();
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
        <div>
          <label htmlFor={emailId}>Email</label>
          <input name="email" id={emailId} type="text" />
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <input name="password" id={passwordId} type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default LoginPage;
