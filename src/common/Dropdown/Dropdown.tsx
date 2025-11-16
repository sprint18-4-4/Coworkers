import { ReactNode, useState } from "react";
import { useDropdown } from "@/hooks";
import { DropdownContext } from "@/hooks";
import { cn } from "@/utils";

interface DropdownType {
  children: ReactNode;
  className?: string;
}

interface DropdownItemType extends DropdownType {
  onClick: () => void;
}

const Dropdown = ({ children }: DropdownType) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <DropdownContext.Provider value={{ isOpen, onToggle, onClose }}>
      <div className="relative inline-block">{children}</div>
    </DropdownContext.Provider>
  );
};

const DropdownToggle = ({ children, className }: DropdownType) => {
  const { onToggle } = useDropdown();

  return (
    <button className={cn(className)} onClick={onToggle}>
      {children}
    </button>
  );
};

const DropdownItems = ({ children, className }: DropdownType) => {
  const { isOpen } = useDropdown();
  if (!isOpen) {
    return null;
  }

  return (
    <ul
      className={cn(
        "w-full flex flex-col-center border border-border-primary rounded-xl absolute top-full bg-background-primary",
        className,
      )}
    >
      {children}
    </ul>
  );
};

const DropdownItem = ({ children, className, onClick }: DropdownItemType) => {
  const { onClose } = useDropdown();
  const handleButtonClick = () => {
    onClick();
    onClose();
  };

  return (
    <li className="w-full">
      <button className={cn("w-full p-[14px]", className)} onClick={handleButtonClick}>
        {children}
      </button>
    </li>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Items = DropdownItems;
Dropdown.Item = DropdownItem;
export default Dropdown;
