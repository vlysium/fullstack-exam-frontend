import { useEffect, RefObject } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, onClickOutside: () => void) => {
  useEffect(() => {

    // function to handle click outside of the dropdown
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside();
      }
    }
    
    // bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutside]);
}

export default useClickOutside;