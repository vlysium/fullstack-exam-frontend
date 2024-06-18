import useAuth, { Signup } from "./useAuth";
import { InputGroup } from "../_ui-elements";
import { useState } from "react";
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";

const SignupPage = () => {
  const [formData, setFormData] = useState<Signup>({ name: "", email: "", password: "" });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const { signup } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signup(formData);
  };

  const isFormEmpty = formData.name && formData.email && formData.password;

  return (
    <>
      <section className={styles.page}>
        <div className={styles.formWrapper}>
          <h1 className={styles.formHeading}>Welcome to Food Delivery</h1>
          <p className={styles.formSubheading}>Create your account or <Link to="/login" className="link">login here!</Link></p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <InputGroup name="name" type="text" handleInput={handleInput} value={formData.name}>Name</InputGroup>
            <InputGroup name="email" type="email" handleInput={handleInput} value={formData.email}>Email</InputGroup>
            <InputGroup name="password" type="password" handleInput={handleInput} value={formData.password}>Password</InputGroup>
            <input className={styles.submitButton} type="submit" value="Create account" disabled={!isFormEmpty} />
          </form>
        </div>
        <div className={styles.backgroundImage}/>
      </section>
    </>
  );
}

export default SignupPage;