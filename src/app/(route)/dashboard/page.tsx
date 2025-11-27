import { PageLayout } from "@/common";
import DashBoardHeader from "./_components/Section/DashBoardHeader/DashBoardHeader";
import DashBoardBestPosts from "./_components/Section/DashBoardBestPosts/DashBoardBestPosts";
import DashBoardAllPosts from "./_components/Section/DashBoardAllPosts/DashBoardAllPosts";

const Dashboard = () => {
  return (
    <PageLayout>
      <section className="max-w-[1120px]">
        <DashBoardHeader />
        <DashBoardBestPosts />
        <DashBoardAllPosts />
      </section>
    </PageLayout>
  );
};

export default Dashboard;
