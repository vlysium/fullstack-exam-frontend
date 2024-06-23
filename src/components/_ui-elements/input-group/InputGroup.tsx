import { HTMLInputTypeAttribute, MouseEvent, useState } from "react";
import styles from "./input-group.module.scss";
import Icon from "../icon/Icon";

interface Props {
  children: string;
  name: string;
  type: HTMLInputTypeAttribute;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputGroup = ({ children, name, type, handleInput, value }: Props) => {
  const [hidePassword, setHidePassword] = useState(true);

  // add toggle to hide/show password input value
  if (type === "password") {
    const handleToggle = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
      e.preventDefault();
      setHidePassword(!hidePassword);
    }

    return (
      <div className={styles.inputGroup}>
        <input className={`${styles.input} ${styles.inputPassword}`} name={name} type={hidePassword ? "password" : "text"} onChange={(event) => handleInput(event)} value={value} placeholder=" "/>
        <label className={styles.label}>{children}</label>
        <button className={styles.togglePassword} onClick={(e) => handleToggle(e)} tabIndex={-1}>
          <Icon name={hidePassword ? "visibility" : "visibility_off"} className={styles.togglePasswordIcon}/>
        </button>
      </div>
    )
  }

  return (
    <div className={styles.inputGroup}>
      <input className={styles.input} name={name} type={type} onChange={(event) => handleInput(event)} value={value} placeholder=" "/>
      <label className={styles.label}>{children}</label>
    </div>
  )
}

export default InputGroup;