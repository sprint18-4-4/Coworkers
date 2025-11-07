"use client";

import { useState } from "react";
import { SidebarMobile, SidebarTablet } from "./_internal";
import { User } from "@/types";

interface SidebarProps {
  user: User;
}

const Sidebar = ({ user }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SidebarTablet user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
      <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} user={user} />
    </>
  );
};

export default Sidebar;
