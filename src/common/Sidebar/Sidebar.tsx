"use client";

import { useState } from "react";
import { SidebarMobile, SidebarTablet } from "./_internal";
import { User } from "@/types";

const Sidebar = ({ user }: { user: User }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenDropdown = (prev: boolean) => {
    setIsOpen(!prev);
  };

  return (
    <>
      <SidebarTablet user={user} isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} />
      <SidebarMobile isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} user={user} />
    </>
  );
};

export default Sidebar;
