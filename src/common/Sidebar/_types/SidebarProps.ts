import { User } from "@/types";

export interface SidebarProps {
  isOpen: boolean;
  handleOpenDropdown: (prev: boolean) => void;
  user: User;
}
