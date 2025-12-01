const ArticleContent = ({ content }: { content: string }) => {
  return <p className="text-md-regular text-text-default line-clamp-1 overflow-hidden break-all">{content}</p>;
};

export default ArticleContent;
