"use client";

import { useState } from "react";
import { SidebarMobile, SidebarTablet } from "./_internal";
import { useGetUser } from "@/api/hooks";
import { useLogout } from "@/hooks/";
import { useRouter } from "next/navigation";

/**
 * @author jikwon
 * @component
 * @example
 * ```tsx
 * <Sidebar user={user} />
 * ```
 */

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const { data: user } = useGetUser();
  const { logout } = useLogout();

  const handleOpenDropdown = (prev: boolean) => {
    setIsOpen(!prev);
  };

  const options = [
    { label: "마이 히스토리", action: () => router.push("/my-history") },
    { label: "계정 설정", action: () => router.push("/my-page") },
    { label: "팀 참여", action: () => router.push("/team-join") },
    { label: "로그아웃", action: logout },
  ];

  return (
    <>
      <SidebarTablet user={user || null} isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} options={options} />
      <SidebarMobile user={user || null} isOpen={isOpen} handleOpenDropdown={handleOpenDropdown} options={options} />
    </>
  );
};

export default Sidebar;
