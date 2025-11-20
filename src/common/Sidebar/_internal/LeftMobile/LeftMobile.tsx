"use client";

import { cn } from "@/utils";
import { SidebarProps } from "@/common/Sidebar/_types";
import SidebarLink from "../SidebarLink/SidebarLink";
import AddTeamButton from "../AddTeamButton/AddTeamButton";
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";
import { Icon } from "@/common";

const LeftMobile = ({ isOpen, handleOpenDropdown, user }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/30 transition-opacity duration-200",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
          "tablet:hidden pc:hidden",
        )}
        onClick={() => handleOpenDropdown(isOpen)}
        aria-hidden={!isOpen}
      />

      <nav
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-[260px] max-w-[85vw] bg-white border-r border-border-primary p-4 flex flex-col gap-4",
          "transition-transform duration-200",
          isOpen ? "translate-x-0" : "-translate-x-full",
          "tablet:hidden pc:hidden",
        )}
        role="dialog"
        aria-modal="true"
      >
        <Icon
          name="x"
          className="size-6 self-end tablet:size-6"
          onClick={() => handleOpenDropdown(isOpen)}
          aria-label="사이드바 닫기"
        />

        <div className="min-w-0 flex flex-col gap-2">
          {user?.memberships.map((membership) => (
            <MobileMenuItem key={membership.groupId} membership={membership} isOpen={isOpen} />
          ))}

          <AddTeamButton />
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
