import useAuth from "./useAuth";
import { InputGroup } from "../_ui-elements";
import { useState } from "react";
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const { authenticate } = useAuth("login");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    authenticate(formData);
  };

  const isFormEmpty = formData.email && formData.password;

  return (
    <>
      <section className={styles.page}>
        <div className={styles.formWrapper}>
          <h1 className={styles.formHeading}>Login to your account</h1>
          <p className={styles.formSubheading}>Are you a new user? <Link to="/signup" className="link">Create your account!</Link></p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <InputGroup name="email" type="email" handleInput={handleInput} value={formData.email}>Email</InputGroup>
            <InputGroup name="password" type="password" handleInput={handleInput} value={formData.password}>Password</InputGroup>
            <input className={styles.submitButton} type="submit" value="Login" disabled={!isFormEmpty} />
          </form>
        </div>
        <div className={styles.backgroundImage} />
      </section>
    </>
  );
}

export default LoginPage;
