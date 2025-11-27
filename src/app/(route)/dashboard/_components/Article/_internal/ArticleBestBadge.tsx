import { Icon } from "@/common";

const ArticleBestBadge = () => {
  return (
    <span className="flex-center gap-1 w-[72px] rounded-full px-1 py-[6px] bg-background-secondary text-brand-primary">
      <Icon name="best" className="size-5 tablet:size-5" />
      <span className="text-lg-bold">인기</span>
    </span>
  );
};

export default ArticleBestBadge;
