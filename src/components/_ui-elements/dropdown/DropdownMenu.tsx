import { useId, useState, useRef } from "react";
import styles from "./dropdown-menu.module.scss";
import Icon from "../icon/Icon";
import useClickOutside from "./useClickOutside";
import { ProductQuery } from "../../products/store";

interface Props {
  text: string;
  icon: string;
  data: { name: string, slug: string }[];
  selectedOption: ProductQuery[keyof ProductQuery] | null;
  setSelectedOption: (arg: string | null) => void;
  allOption?: boolean;
}

const DropdownMenu = ({ text, icon, data, selectedOption, setSelectedOption, allOption = true }: Props) => {
  const identifier = useId();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleChange = (value: string | null) => {
    setSelectedOption(value);
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
          {allOption && <label className={styles.dropdownOption}>
            All
            <input
              onChange={() => handleChange(null)}
              className={styles.dropdownOptionInput}
              type="radio"
              name={identifier}
              value="All"
              checked={selectedOption === undefined || selectedOption === null}
            />
          </label>}
          {data?.map((item, index: number) => (
            <label className={styles.dropdownOption} key={index}>
              {item.name}
              <input
                onChange={(event) => handleChange(event.target.value)}
                className={styles.dropdownOptionInput}
                type="radio"
                name={identifier}
                value={item.slug}
                checked={selectedOption === item.slug}
              />
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DropdownMenu;