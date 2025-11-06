"use client";

import { cn } from "@/utils";
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown";
import SidebarLink from "../SidebarLink/SidebarLink";

type LeftMobileProps = {
  isOpen: boolean;
  onClose: () => void;
};

const LeftMobile = ({ isOpen, onClose }: LeftMobileProps) => {
  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/30 transition-opacity duration-200",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        )}
        onClick={onClose}
        aria-hidden={!isOpen}
      />

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-[260px] max-w-[85vw] bg-white border-r border-[#E2E8F0] p-4 flex flex-col gap-4",
          "transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-full",
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between">
          <span className="text-lg-semibold text-slate-700">메뉴</span>
          <button className="w-6 h-6 bg-gray-300" onClick={onClose} aria-label="사이드바 닫기" />
        </div>

        <div className="min-w-0">
          <SidebarDropdown isOpen />
          <button
            type="button"
            className="w-full h-[40px] px-3 flex items-center justify-center gap-[4px] rounded-[8px] border border-[#5189FA] text-lg-semibold text-[#5189FA]"
          >
            + 팀 추가하기
          </button>
        </div>

        <hr />
        <div className="w-full">
          <SidebarLink title="자유게시판" isOpen={isOpen} />
        </div>
      </nav>
    </>
  );
};

export default LeftMobile;
