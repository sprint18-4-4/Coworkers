import { Icon } from "@/common";

const CategoryDateHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <h3 className="text-2lg-bold text-text-primary">법인 등기</h3>

      <div className="flex items-center gap-2">
        <span className="text-sm-medium text-text-primary">2025년 5월</span>
        <div className="flex items-center gap-1">
          <button className="size-4 rounded-full border border-slate-200 flex-center">
            <Icon name="leftArrow" className="size-3 tablet:size-3" />
          </button>
          <button className="size-4 rounded-full border border-slate-200 flex-center">
            <Icon name="rightArrow" className="size-3 tablet:size-3" />
          </button>
        </div>
        <button className="size-6 rounded-full bg-background-secondary flex-center">
          <Icon name="calendar" className="size-3 tablet:size-3" />
        </button>
      </div>
    </div>
  );
};

export default CategoryDateHeader;
