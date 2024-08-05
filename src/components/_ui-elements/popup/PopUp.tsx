import { useState } from "react";
import styles from "./popup.module.scss";

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);

    // delay to allow animation to finish
    setTimeout(() => {
      sessionStorage.setItem("popup", "closed");
    }, 1000);
  }

  if (sessionStorage.getItem("popup") === "closed") {
    return null;
  }

  return (
    <dialog className={styles.dialog} open={isOpen}>
      <div className={styles.popUp}>
        <p className={styles.title}>
          Welcome to my Food Delivery demo app!
        </p>
        <p>
          The backend application is hosted on a free Render Web Service, 
          which means that the server will shut down after approximately 15 minutes of inactivity.
        </p>
        <p>
          Please allow up to one minute for the server to start up to handle authentication and data fetching, thank you!
        </p>
        <button className={styles.button} onClick={handleClose}>Understood</button>
      </div>
    </dialog>
  )
}

export default PopUp;