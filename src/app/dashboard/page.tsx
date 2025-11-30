import Link from "next/link";
import { FloatingButton, PageLayout } from "@/common";
import { DashBoardHeader, DashBoardBestArticles, DashBoardAllArticles } from "./_components";

const DashboardPage = () => {
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

export default DashboardPage;
