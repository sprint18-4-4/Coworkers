const ArticleContent = ({ content }: { content: string }) => {
  return <p className="text-md-regular text-text-default line-clamp-2">{content}</p>;
};

export default ArticleContent;
