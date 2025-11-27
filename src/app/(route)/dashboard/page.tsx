import { PageLayout } from "@/common";
import DashBoardHeader from "./_components/Section/DashBoardHeader/DashBoardHeader";
import DashBoardBestArticles from "./_components/Section/DashBoardBestArticles/DashBoardBestArticles";
import DashBoardAllArticles from "./_components/Section/DashBoardAllArticles/DashBoardAllArticles";

const Dashboard = () => {
  return (
    <PageLayout>
      <section className="max-w-[1120px]">
        <DashBoardHeader />
        <DashBoardBestArticles />
        <DashBoardAllArticles />
      </section>
    </PageLayout>
  );
};

export default Dashboard;
