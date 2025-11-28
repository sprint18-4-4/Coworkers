import ArticleBody from "./_internal/ArticleBody";
import ArticleComments from "./_internal/ArticleComments";

const ArticleDetail = () => {
  return (
    <section className="bg-background-primary max-w-[900px] rounded-[20px] py-14 px-10">
      <ArticleBody />
      <ArticleComments />
    </section>
  );
};

export default ArticleDetail;
