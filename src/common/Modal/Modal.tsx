"use client";

import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  children: ReactNode;
  size?: "large" | "small";
}

const Modal = ({ isOpen, children, size = "large" }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return <div>{children}</div>;
};

const ModalTitle = ({ children }: { children: ReactNode }) => {
  return <h2>{children}</h2>;
};

const ModalDescription = ({ children }: { children: ReactNode }) => {
  return <p>{children}</p>;
};

const ModalButton = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

const ModalIcon = ({ children }: { children: ReactNode }) => {
  return <span>{children}</span>;
};

Modal.Title = ModalTitle;
Modal.Description = ModalDescription;
Modal.Button = ModalButton;
Modal.Icon = ModalIcon;

export default Modal;
