import ArticleBestBadge from "./_internal/ArticleBestBadge";

const BestArticleCard = () => {
  return (
    <article className="flex flex-col gap-4 max-w-[350px] h-[206px] rounded-[20px] border bg-background-primary px-5 py-6">
      <ArticleBestBadge />
    </article>
  );
};

export default BestArticleCard;
