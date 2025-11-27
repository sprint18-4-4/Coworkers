import { PageLayout } from "@/common";
import { DashBoardHeader, DashBoardBestArticles, DashBoardAllArticles } from "./_components";

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
