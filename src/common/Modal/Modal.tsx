"use client";

import { MouseEvent, ReactNode, useEffect } from "react";
import { cn } from "@/utils";
import {
  MODAL_BASE_STYLE,
  MODAL_BODY_STYLE,
  MODAL_CLOSE_ICON_STYLE,
  MODAL_FOOTER_STYLE,
  MODAL_OVERLAY_STYLE,
} from "./MODAL_STYLE";
import Icon from "../Icon/Icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: ReactNode;
}

interface ModalContentProps {
  children: ReactNode;
  className?: string;
}

const Modal = ({ isOpen, onClose, className, children }: ModalProps) => {
  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();

    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className={MODAL_OVERLAY_STYLE} onClick={handleOverlayClick}>
      <div className={cn(MODAL_BASE_STYLE, className)}>{children}</div>
    </div>
  );
};

const ModalCloseIcon = ({ className, onClose }: { className?: string; onClose: () => void }) => {
  return (
    <button onClick={onClose}>
      <Icon name="x" className={cn(MODAL_CLOSE_ICON_STYLE, className)} />
    </button>
  );
};

const ModalBody = ({ children, className }: ModalContentProps) => {
  return <div className={cn(MODAL_BODY_STYLE, className)}>{children}</div>;
};

const ModalFooter = ({ children, className }: ModalContentProps) => {
  return <div className={cn(MODAL_FOOTER_STYLE, className)}>{children}</div>;
};

Modal.CloseIcon = ModalCloseIcon;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
