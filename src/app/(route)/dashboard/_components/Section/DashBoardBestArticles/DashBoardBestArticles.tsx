import BestArticleCard from "../../Article/BestArticleCard";

const DashBoardBestArticles = () => {
  return (
    <section className="py-10 px-8 mt-10 bg-background-secondary rounded-[20px]">
      <h3 className="text-text-primary text-xl-bold mb-6">베스트 게시글</h3>
      <BestArticleCard />
    </section>
  );
};

export default DashBoardBestArticles;
