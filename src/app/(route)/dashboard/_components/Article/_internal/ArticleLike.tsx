// FloatingButton 또는 Icon과 함께 쓰기
const ArticleLike = ({ likeCount }: { likeCount: number }) => {
  const count = likeCount > 999 ? "999+" : String(likeCount);
  return <span className="text-md-regular text-state-400">{count}</span>;
};

export default ArticleLike;
