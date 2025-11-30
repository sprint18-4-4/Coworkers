import { Icon } from "@/common";

const WidgetHeader = ({ memberCount }: { memberCount: number }) => {
  return (
    <header className="flex justify-between items-center">
      <span className="flex gap-2">
        <span className="text-lg-medium text-text-primary">멤버</span>
        <span className="text-lg-regular text-text-default">{memberCount}</span>
      </span>

      <button onClick={() => {}} className="flex items-center gap-1 text-lg-semibold text-brand-primary">
        <span>초대하기</span>
        <Icon name="plus" className="size-4 tablet:size-4" />
      </button>
    </header>
  );
};

export default WidgetHeader;
