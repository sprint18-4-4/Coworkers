"use client";

import { cn } from "@/utils";
import { Suspense, use, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TodoSection, TodoHeader, MakeTodoModal } from "./_components";
import { FloatingButton, PageHeaderBar, PageLayout } from "@/common";
import { DetailPage } from "./_detail/_components";
import { TASK_GROUP_MOCK_DATA } from "@/MOCK_DATA";
import useGetTaskList from "@/api/hooks/task-list/useGetTaskList";
import useGetGroup from "@/api/hooks/group/useGetGroup";

// TODO(지권): 목업 데이터 변경
const data = TASK_GROUP_MOCK_DATA;

const TaskListPage = ({ params }: { params: Promise<{ teamId: string }> }) => {
  const { teamId } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("task-id");

  // 왼쪽
  const { data: group } = useGetGroup({ groupId: teamId });
  // console.log("group:", group);

  // 오른쪽
  const { data: taskList } = useGetTaskList({
    groupId: teamId,
    taskListId: String(selectedId),
    date: searchParams.get("date") || null,
  });
  // console.warn("teamId, selectedId", teamId, selectedId);
  // console.warn("taskList:", taskList);

  const [selectedDate, setSelectedDate] = useState(() => {
    const dateParam = searchParams.get("date");
    if (!dateParam) return new Date();
    return new Date(dateParam);
  });

  const onClickFloatingButton = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("w", "true");

    router.push(`/team/${teamId}/task-list?${params.toString()}`, { scroll: false });
  };

  const onClickDateItem = (date: Date) => {
    setSelectedDate(date);

    const params = new URLSearchParams(searchParams.toString());
    params.set("date", date.toISOString());

    router.replace(`/team/${teamId}/task-list?${params.toString()}`, { scroll: false });
  };

  // if (!selectedId) {
  //   router.replace("/team");
  //   return null;
  // }

  return (
    <div className={cn(selectedId && "pc:flex")}>
      <PageLayout ariaLabel="목록 페이지">
        <h1 className="sr-only">목록 페이지</h1>
        <PageHeaderBar title={group?.name} />

        <div aria-label="목록 페이지 컨텐츠" className={cn("pc:flex pc:gap-[25px]")}>
          <TodoHeader data={group} />
          <TodoSection data={data} teamId={teamId} onClickDateItem={onClickDateItem} selectedDate={selectedDate} />
        </div>
      </PageLayout>

      <FloatingButton
        iconName="plus"
        className="fixed bottom-2 right-2"
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
            router.push(`/team/${teamId}/task-list?${params.toString()}`, { scroll: false });
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
      <TaskListPage params={params} />
    </Suspense>
  );
};

export default Page;
