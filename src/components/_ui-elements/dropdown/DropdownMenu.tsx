import { useId, useState, useRef } from "react";
import styles from "./dropdown-menu.module.scss";
import Icon from "../icon/Icon";
import useClickOutside from "./useClickOutside";

interface Props {
  text: string;
  icon: string;
  data: any;
  state: string;
  setState: (arg: string | null) => void;
}

const DropdownMenu = ({ text, icon, data, state, setState }: Props) => {
  const identifier = useId();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleChange = (value: string | null) => {
    setState(value);
    setIsOpen(false);
  }

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <button className={`${styles.dropdownButton} ${isOpen ? styles.open : ""}`} onClick={() => setIsOpen(isOpen => !isOpen)}>
        <Icon name={icon} />
        {text}
      </button>
      <div className={`${styles.dropdownMenu} ${isOpen ? styles.open : ""}`}>
        <div className={styles.dropdownMenuOptionList}>
          <label className={styles.dropdownOption}>
            All
            <input
              onChange={() => handleChange(null)}
              className={styles.dropdownOptionInput}
              type="radio"
              name={identifier}
              value="All"
              defaultChecked
            />
          </label>
          {data?.map((item: string, index: number) => (
            <label className={styles.dropdownOption} key={index}>
              {item}
              <input
                onChange={(event) => handleChange(event.target.value)}
                className={styles.dropdownOptionInput}
                type="radio"
                name={identifier}
                value={item}
                checked={state === item}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu;