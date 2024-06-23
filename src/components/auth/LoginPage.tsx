import useLogin, { Login } from "./useLogin";
import { InputGroup } from "../_ui-elements";
import { useState } from "react";
import styles from "./auth.module.scss";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [formData, setFormData] = useState<Login>({ email: "", password: "" });

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  const { mutate: login, isLoading } = useLogin();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(formData);
  };

  const isFormEmpty = formData.email && formData.password;

  return (
    <>
      <section className={styles.page}>
        <div className={styles.formWrapper}>
          <h1 className={styles.formHeading}>Login to your account</h1>
          <p className={styles.formSubheading}>New to the app? <Link to="/signup" className="link">Join today!</Link></p>
          <form className={styles.form} onSubmit={handleSubmit}>
            <InputGroup name="email" type="email" handleInput={handleInput} value={formData.email}>Email</InputGroup>
            <InputGroup name="password" type="password" handleInput={handleInput} value={formData.password}>Password</InputGroup>
            <input className={`${styles.submitButton} ${isLoading ? styles.loading : ""}`} type="submit" value={isLoading ? "Logging in..." : "Login"} disabled={!isFormEmpty || isLoading} />
          </form>
        </div>
        <div className={styles.backgroundImage} />
      </section>
    </>
  );
}

export default LoginPage;
