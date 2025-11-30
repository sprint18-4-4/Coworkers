"use client";

import { Icon } from "@/common";

interface WidgetHeaderProps {
  memberCount: number;
  setIsOpenWidget: (prev: boolean) => void;
  setIsOpenModal: (prev: boolean) => void;
}

const WidgetHeader = ({ memberCount, setIsOpenWidget, setIsOpenModal }: WidgetHeaderProps) => {
  const handleInviteClick = () => {
    setIsOpenWidget(false);
    setIsOpenModal(true);
  };

  return (
    <header className="flex justify-between items-center">
      <span className="flex gap-2">
        <span className="text-lg-medium text-text-primary">멤버</span>
        <span className="text-lg-regular text-text-default">{memberCount}</span>
      </span>

      <button onClick={handleInviteClick} className="flex items-center gap-1 text-lg-semibold text-brand-primary">
        <span>초대하기</span>
        <Icon name="plus" className="size-4 tablet:size-4" />
      </button>
    </header>
  );
};

export default WidgetHeader;
