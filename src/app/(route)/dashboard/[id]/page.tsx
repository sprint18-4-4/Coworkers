import { PageLayout } from "@/common";
import { ArticleDetail } from "./_components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coworkers | 자유게시판",
  description: "게시글을 통해 팀원들과 소통해보세요.",
};

const DashBoardDetail = () => {
  return (
    <PageLayout>
      <ArticleDetail />
    </PageLayout>
  );
};

export default DashBoardDetail;
