"use client";

import { useState } from "react";
import { SidebarMobile, SidebarTablet } from "./_internal";

interface SidebarProps {
  user: {
    name: string;
    team: string;
    image: string;
  };
}

const Sidebar = ({ user }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <SidebarTablet user={user} isOpen={isOpen} setIsOpen={setIsOpen} />
      <SidebarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Sidebar;
