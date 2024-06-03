import { useId } from "react";
import useAuth from "./useAuth";

const SignupPage = () => {
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
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
        <div>
          <label htmlFor={nameId}>Name</label>
          <input name="name" id={nameId} type="text" />
        </div>
        <div>
          <label htmlFor={emailId}>Email</label>
          <input name="email" id={emailId} type="text" />
        </div>
        <div>
          <label htmlFor={passwordId}>Password</label>
          <input name="password" id={passwordId} type="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default SignupPage;