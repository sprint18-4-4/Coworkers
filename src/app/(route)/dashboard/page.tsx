import { PageLayout } from "@/common";
import DashBoardHeader from "./_components/DashBoardHeader/page";
import DashBoardBestPosts from "./_components/DashBoardBestPosts/page";
import DashBoardAllPosts from "./_components/DashBoardAllPosts/page";

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
