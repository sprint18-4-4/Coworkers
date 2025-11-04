"use client";

import Image from "next/image";
import { useState } from "react";
import SidebarDropdown from "../SidebarDropdown/SidebarDropdown";
import { cn } from "@/utils/cn";

const SidebarItem = ({ title, isOpen }: { title: string; isOpen: boolean }) => {
  return (
    <div className={cn("h-[52px] rounded-[12px] p-4 flex items-center gap-3 bg-white", isOpen ? "w-full" : "w-[52px]")}>
      <div className="w-5 h-5 bg-black shrink-0" />
      {isOpen && <span className="flex-1 min-w-0 text-lg-regular text-[#1E293B] truncate">{title}</span>}
    </div>
  );
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className={cn("h-[100svh] sticky top-0 flex flex-col", isOpen ? "w-[270px]" : "w-[72px]")}>
      <header className="flex items-center gap-[10px] px-6 py-8 relative">
        <div className="flex items-center gap-1">
          <div className="w-6 h-6 bg-black" />
          {isOpen && <h2 className="text-[#5189FA] font-bold text-[20px] pr-[22px]">COWORKERS</h2>}
          {!isOpen && <div className="w-7 h-7 bg-gray-400 ml-[10px]" onClick={() => setIsOpen(!isOpen)} />}
        </div>

        {isOpen && <div className="w-7 h-7 bg-gray-400" onClick={() => setIsOpen(!isOpen)} />}
      </header>

      <div className={cn("w-full flex-1 min-h-0 flex flex-col justify-between", isOpen ? "px-6" : "px-[10px]")}>
        <div className="w-full flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-start gap-[12px]">
          <div className="w-full pb-3 flex flex-col gap-2">
            <SidebarDropdown isOpen={isOpen} />

            {isOpen && (
              <button
                type="button"
                className="w-full px-3 h-[33px] flex-center gap-[4px] rounded-[8px] border border-[#5189FA] text-lg-semibold text-[#5189FA]"
              >
                + 팀 추가하기
              </button>
            )}
          </div>

          <hr className="w-full text-[#E2E8F0]" />

          <div className="w-full">
            <SidebarItem title="자유게시판" isOpen={isOpen} />
          </div>
        </div>
        <div
          className={cn(
            "w-full shrink-0 border-t border-[#E2E8F0] pt-5 pb-6 flex items-center gap-[10px]",
            !isOpen && "flex-center",
          )}
        >
          <Image src="/TEST_IMG/image-1.jpg" alt="프로필 이미지" width={40} height={40} className="rounded-[12px]" />
          {isOpen && (
            <div className="flex flex-col items-start gap-[2px]">
              <span className="text-[#1E293B] text-lg-medium">안해나</span>
              <span className="text-slate-400 text-md-medium">경영관리팀</span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
