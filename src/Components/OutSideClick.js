
import {useState,useEffect} from "react";
export default function OutsideClick(ref) {
    const [isClicked, setIsClicked] = useState();
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsClicked(true);
        } else {
          setIsClicked(false);
        }
      }
    
      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);
      return isClicked;
    }