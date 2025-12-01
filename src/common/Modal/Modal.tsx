"use client";

import { MouseEvent, useEffect } from "react";
import { cn } from "@/utils";
import {
  MODAL_BASE_STYLE,
  MODAL_BODY_STYLE,
  MODAL_CLOSE_ICON_STYLE,
  MODAL_FOOTER_STYLE,
  MODAL_OVERLAY_STYLE,
} from "./MODAL_STYLE";
import Icon from "../Icon/Icon";
import { ModalProps, ModalContentProps } from "./_types/ModalProps";
import Portal from "../Portal/Portal";

/**
 * @author sangin
 * CloseIcon: 필요 시 사용
 * Body: 자유롭게 모달 안 내용들 넣기 스토리 참조
 * Footer: 주로 버튼들이 들어갈 영역
 */

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
    <Portal>
      <div className={MODAL_OVERLAY_STYLE} onClick={handleOverlayClick}>
        <div className={cn(MODAL_BASE_STYLE, className)}>{children}</div>
      </div>
    </Portal>
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
