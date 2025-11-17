import { useContext } from "react";
import DropdownContext from "./DropdownContext";

const useDropdown = () => {
  const context = useContext(DropdownContext);
  if (!context) {
    throw new Error("context undefined");
  }

  return context;
};

export default useDropdown;
