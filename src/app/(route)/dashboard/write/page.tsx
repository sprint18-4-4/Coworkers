import { BaseButton, Input, InputBox, PageLayout } from "@/common";

const LABEL_STYLE = "text-text-primary text-lg-bold";
const INPUT_AREA_STYLE = "flex flex-col gap-4";
const DashboardWritePage = () => {
  return (
    <PageLayout>
      <section className="bg-background-primary max-w-[900px] rounded-[20px] py-14 px-10">
        <h2 className="text-text-primary text-xl-bold">게시글 쓰기</h2>
        <form className="flex flex-col gap-8 mt-10">
          <div className={INPUT_AREA_STYLE}>
            <label htmlFor="articleTitle" className={LABEL_STYLE}>
              제목 <span className="text-status-danger">*</span>
            </label>
            <Input id="articleTitle" placeholder="제목을 입력해주세요." />
          </div>
          <div className={INPUT_AREA_STYLE}>
            <label htmlFor="articleContent" className={LABEL_STYLE}>
              내용 <span className="text-status-danger">*</span>
            </label>
            <InputBox id="articleContent" placeholder="내용을 입력해주세요." size="lg" />
          </div>
          <div className={INPUT_AREA_STYLE}>
            <label htmlFor="articleImg" className={LABEL_STYLE}>
              이미지
            </label>
            <input id="articleImg" type="file" />
          </div>
          <BaseButton type="submit" variant="solid" size="large">
            등록하기
          </BaseButton>
        </form>
      </section>
    </PageLayout>
  );
};

export default DashboardWritePage;
