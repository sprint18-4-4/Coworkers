"use client";

import { useState } from "react";
import LeftMobile from "../LeftMobile/LeftMobile";

const SidebarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="sticky top-0 z-20 flex items-center justify-between bg-white px-4 py-3">
        <div className="flex items-center gap-3">
          <button className="w-6 h-6 bg-gray-300" onClick={() => setIsOpen((v) => !v)} aria-label="사이드바 열기" />
          <h2 className="text-[#5189FA] font-bold text-[20px] pr-[22px]">COWORKERS</h2>
        </div>
        <div className="w-7 h-7 bg-gray-300" />
      </nav>

      <LeftMobile isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default SidebarMobile;
