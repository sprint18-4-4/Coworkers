import { createContext } from "react";

interface DropdownContextType {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

export default DropdownContext;
