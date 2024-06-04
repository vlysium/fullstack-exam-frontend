import useAuth from "./useAuth";
import { InputGroup } from "../_ui-elements";
import { useState } from "react";

const SignupPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const { authenticate } = useAuth("signup");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticate(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputGroup name="name" type="text" handleInput={handleInput} value={formData.name}>Name</InputGroup>
        <InputGroup name="email" type="email" handleInput={handleInput} value={formData.email}>Email</InputGroup>
        <InputGroup name="password" type="password" handleInput={handleInput} value={formData.password}>Password</InputGroup>
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default SignupPage;