import { PageHeaderBar } from "@/common";
import PageLayout from "@/common/PageLayout/PageLayout";

const page = () => {
  return (
    <PageLayout ariaLabel="목록 페이지">
      <h1 className="sr-only">목록 페이지</h1>
      <PageHeaderBar title="경영관리팀" />
      <div aria-label="목록 페이지 컨텐츠" className="pc:flex pc:gap-[86px]">
        <h2>ㄴㅇㅁㄴㅇ</h2>
      </div>
    </PageLayout>
  );
};

export default page;
