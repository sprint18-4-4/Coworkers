import { cn } from "@/utils";

/**
 * @author jikwon
 * @component
 * @description 페이지 레이아웃 컴포넌트
 * @example
 * ```tsx
 * <PageLayout ariaLabel="나의 히스토리">
 *   <h1 className="sr-only">나의 히스토리</h1>
 *   <PageHeaderBar title="경영관리팀" />
 *
 *   <div aria-label="나의 히스토리 컨텐츠" className="pc:flex pc:gap-[86px]">
 *     <MyWorkHistory title="나의 히스토리" items={MY_HISTORY_ITEM_MOCK_DATA.map((item) => ({ item }))} />
 *     <WorkHistorySection />
 *   </div>
 * </PageLayout>
 * ```
 */

interface PageLayoutProps {
  ariaLabel?: string;
  children: React.ReactNode;
}

const PageLayout = ({ children, ariaLabel }: PageLayoutProps) => {
  return (
    <div
      aria-label={ariaLabel}
      className={cn(
        "min-h-[calc(100vh-52px)] px-4 py-[17px] flex flex-col gap-[25px] bg-background-secondary",
        "tablet:min-h-[100vh] tablet:px-[26px] tablet:pt-[69px]",
        "pc:mx-0 pc:pl-[91px] pc:pt-[90px] pc:gap-12",
      )}
    >
      {children}
    </div>
  );
};

export default PageLayout;
