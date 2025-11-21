"use client";

import { cn } from "@/utils";
import { Suspense, use } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TodoSection, TodoHeader, MakeTodoModal } from "./_components";
import { FloatingButton, PageHeaderBar, PageLayout } from "@/common";
import { DetailPage } from "./_detail/_components";

const ListPage = ({ params }: { params: Promise<{ teamId: string }> }) => {
  const { teamId } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("task-id");

  const onClickFloatingButton = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("w", "true");

    router.push(`/team/${teamId}/task-list?${params.toString()}`);
  };

  return (
    <div className={cn(selectedId && "pc:flex")}>
      <PageLayout ariaLabel="목록 페이지">
        <h1 className="sr-only">목록 페이지</h1>
        <PageHeaderBar title="경영관리팀" />

        <div aria-label="목록 페이지 컨텐츠" className={cn("pc:flex pc:gap-[25px]")}>
          <TodoHeader />
          <TodoSection teamId={teamId} />
        </div>
      </PageLayout>

      <FloatingButton
        iconName="plus"
        className="absolute bottom-2 right-2"
        iconClassName="size-6 tablet:size-6"
        onClick={onClickFloatingButton}
      />

      {selectedId && <DetailPage id={selectedId} />}
      {searchParams.get("w") && (
        <MakeTodoModal
          isOpen={!!searchParams.get("w")}
          onClose={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("w");
            router.push(`/team/${teamId}/task-list?${params.toString()}`);
          }}
        />
      )}
    </div>
  );
};

const Page = ({ params }: { params: Promise<{ teamId: string }> }) => {
  return (
    // TODO(지권): 로딩 화면 추가 필요
    <Suspense fallback={""}>
      <ListPage params={params} />
    </Suspense>
  );
};

export default Page;
