import Link from "next/link";
import Image from "next/image";
import { useGetArticle } from "@/api/hooks";
import { Icon } from "@/common";
import ArticleBestBadge from "./_internal/ArticleBestBadge";
import ArticleTitle from "./_internal/ArticleTitle";
import ArticleContent from "./_internal/ArticleContent";
import ArticleWriter from "./_internal/ArticleWriter";
import ArticleLike from "./_internal/ArticleLike";

const BestArticleCard = ({ articleId }: { articleId: number }) => {
  const { data: article } = useGetArticle({ articleId });

  if (!article) {
    return null;
  }

  return (
    <Link href={`/dashboard/${articleId}`} className="block">
      <article className="flex flex-col gap-3 max-w-[350px] pc:gap-4 rounded-[20px] border bg-background-primary px-5 py-6">
        <ArticleBestBadge />
        <div className="flex justify-between gap-4">
          <div className="flex flex-col gap-3">
            <ArticleTitle title={article?.title} />
            <ArticleContent content={article?.content} />
          </div>
          {/* {article.image && <Image src={article.image} alt="게시글 이미지" width={60} height={60} />} */}
        </div>

        <footer className="flex justify-between items-center">
          <ArticleWriter nickname={article.writer.nickname} createdAt={article.createdAt} />
          <span className="flex items-center gap-1">
            <Icon name="heartDefault" className="size-4 tablet:size-4" />
            <ArticleLike likeCount={article.likeCount} />
          </span>
        </footer>
      </article>
    </Link>
  );
};

export default BestArticleCard;
