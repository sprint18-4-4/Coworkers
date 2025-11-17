"use client";

import { ReactNode, useState } from "react";
import { useDropdown } from "@/hooks";
import { DropdownContext } from "@/hooks";
import { cn } from "@/utils";

/**
 * @author sangin
 *
 * @example
 * 기본 정렬 드롭다운
 * ```tsx
 * <Dropdown>
 *   <Dropdown.Toggle className="flex gap-2 px-[14px] py-[10px] bg-background-primary rounded-xl">
 *     <span>{sorted}</span>
 *     <Icon name="downArrow" />
 *   </Dropdown.Toggle>
    
 *   <Dropdown.Items className="w-[120px]">
 *     {
 *       list.map(()=>(
 *         <Dropdown.Item className={}>
 *           <Dropdown.Action className={} onClick={list.onClick}>{list.label}</Dropdown.Action>
 *         </Dropdown.Item>
 *        ))
 *     }
 *   </Dropdown.Items>
 * </Dropdown>
 * ```
 *
 * @example
 * 케밥 메뉴 드롭다운
 * ```tsx
 * <Dropdown>
 *   <Dropdown.Toggle>
 *     <Icon name="kebab" />
 *   </Dropdown.Toggle>
 *   <Dropdown.Items className="w-[120px]">
 *     {
 *       list.map((item)=>(
 *         <Dropdown.Item key={} className={}>
 *           <Dropdown.Action className={} onClick={item.onClick}>{item.label}</Dropdown.Action>
 *         </Dropdown.Item>
 *        ))
 *     }
 *   </Dropdown.Items>
 * </Dropdown>
 * ```
 */

interface DropdownType {
  children: ReactNode;
  className?: string;
}

interface DropdownActionType extends DropdownType {
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
    <button className={className} onClick={onToggle}>
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

const DropdownItem = ({ children, className }: DropdownType) => {
  return <li className={cn("w-full", className)}>{children}</li>;
};

const DropdownAction = ({ children, className, onClick }: DropdownActionType) => {
  const { onClose } = useDropdown();
  const handleButtonClick = () => {
    onClick();
    onClose();
  };

  return (
    <button className={cn("w-full p-[14px]", className)} onClick={handleButtonClick}>
      {children}
    </button>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Items = DropdownItems;
Dropdown.Item = DropdownItem;
Dropdown.Action = DropdownAction;
export default Dropdown;
