"use client";

import { cn } from "@/utils";
import { Icon } from "@/common";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarProps } from "@/common/Sidebar/_types";
import SidebarLink from "../SidebarLink/SidebarLink";
import AddTeamButton from "../AddTeamButton/AddTeamButton";
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";

const LeftMobile = ({ isOpen, handleOpenDropdown, user }: SidebarProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={cn("fixed inset-0 z-30 bg-black/30 tablet:hidden pc:hidden")}
            onClick={() => handleOpenDropdown(isOpen)}
          />
          <motion.nav
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.18, ease: [0.15, 0.85, 0.25, 1] }}
            className={cn(
              "fixed inset-y-0 left-0 z-40 w-[260px] max-w-[85vw] bg-white border-r border-border-primary p-4 flex flex-col gap-4",
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

            {user?.memberships.map((membership) => (
              <MobileMenuItem key={membership.groupId} membership={membership} isOpen={isOpen} />
            ))}

            <hr />

            <div className="w-full">
              <SidebarLink title="자유게시판" isOpen={isOpen} href="/dashboard" iconName="board" />
            </div>
            <AddTeamButton />
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default LeftMobile;
