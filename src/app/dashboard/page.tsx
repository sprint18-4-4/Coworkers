import { FloatingButton, PageLayout } from "@/common";
import { DashBoardHeader, DashBoardBestArticles, DashBoardAllArticles } from "../(route)/dashboard/_components";
import Link from "next/link";

const Dashboard = () => {
  return (
    <PageLayout>
      <section className="max-w-[1120px]">
        <DashBoardHeader />
        <DashBoardBestArticles />
        <DashBoardAllArticles />
        <Link href="/dashboard/write" className="block">
          <FloatingButton iconName="pencil" className="fixed right-0 bottom-0" />
        </Link>
      </section>
    </PageLayout>
  );
};

export default Dashboard;
