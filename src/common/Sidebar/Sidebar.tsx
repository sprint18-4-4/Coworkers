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
  console.log("user: ", user);

  const handleOpenDropdown = (prev: boolean) => {
    setIsOpen(!prev);
  };

  return (
    <>
      <SidebarTablet user={user} isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} />
      <SidebarMobile user={user} isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} />
    </>
  );
};

export default Sidebar;
