"use client";

import { useState } from "react";
import { SidebarMobile, SidebarTablet } from "./_internal";
import { User } from "@/types";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * <Sidebar user={user} />
 * ```
 */

const Sidebar = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = (prev: boolean) => {
    setIsOpen(!prev);
  };

  const options = [
    { label: "마이 히스토리", action: () => {} },
    { label: "계정 설정", action: () => {} },
    { label: "팀 참여", action: () => {} },
    { label: "로그아웃", action: () => {} },
  ];

  return (
    <>
      <SidebarTablet user={user} isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} options={options} />
      <SidebarMobile user={user} isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} options={options} />
    </>
  );
};

export default Sidebar;
