import { ReactNode } from "react";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

export interface ModalContentProps {
  children: ReactNode;
  className?: string;
}
