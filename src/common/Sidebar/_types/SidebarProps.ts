import { User } from "@/types";

export interface SidebarProps {
  user: User | null;
  isOpen: boolean;
  handleOpenDropdown: (prev: boolean) => void;
}
