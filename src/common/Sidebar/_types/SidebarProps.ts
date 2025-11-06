import { User } from "@/types";

export interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
  user: User;
}
