"use client";

import { useGetGroups } from "@/api/hooks";
import { FloatingButton } from "@/common";
import { useParams } from "next/navigation";
import { useState } from "react";
import WidgetProfile from "./_internal/WidgetProfile";
import WidgetHeader from "./_internal/WidgetHeader";

const MemberWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { teamId } = useParams();
  const id = Number(teamId);
  const { data: groups } = useGetGroups({ id });

  if (!groups) {
    return null;
  }

  return (
    <span className="fixed right-3 bottom-3">
      <FloatingButton iconName="user" onClick={() => setIsOpen((prev) => !prev)} />

      {isOpen && (
        <aside className="absolute bottom-[65px] right-0 flex flex-col gap-6 w-[240px] border border-border-primary rounded-xl bg-background-primary px-5 py-[24px]">
          <WidgetHeader memberCount={groups.members.length} />
          <WidgetProfile members={groups.members} />
        </aside>
      )}
    </span>
  );
};

export default MemberWidget;
