import { formatClampedCount } from "@/utils";

const ArticleLike = ({ likeCount }: { likeCount: number }) => {
  const count = formatClampedCount(likeCount, 999);
  return <span className="text-md-regular text-state-400">{count}</span>;
};

export default ArticleLike;
