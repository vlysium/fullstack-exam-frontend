import { HTMLInputTypeAttribute } from "react";
import styles from "./input-group.module.scss";

interface Props {
  children: string;
  name: string;
  type: HTMLInputTypeAttribute;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const InputGroup = ({ children, name, type, handleInput, value }: Props) => {

  return (
    <div className={styles.inputGroup}>
      <input className={styles.input} name={name} type={type} onChange={(event) => handleInput(event)} value={value} placeholder=" "/>
      <label className={styles.label}>{children}</label>
    </div>
  )
}

export default InputGroup;