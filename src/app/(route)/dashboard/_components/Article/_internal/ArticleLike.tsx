const ArticleLike = ({ likeCount }: { likeCount: number }) => {
  const count = likeCount > 999 ? "999+" : String(likeCount);
  return <span className="text-md-regular text-state-400">{count}</span>;
};

export default ArticleLike;
