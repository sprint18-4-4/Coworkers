"use client";

import { cn } from "@/utils";
import { Suspense, use, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { TodoSection, TodoHeader, MakeTodoModal } from "./_components";
import { FloatingButton, PageHeaderBar, PageLayout } from "@/common";
import { DetailPage } from "./_detail/_components";
import { useGetGroups, useGetTask } from "@/api/hooks";
import { LoadingSpinner } from "@/features";

const TaskListPage = ({ params }: { params: Promise<{ teamId: number; taskListId: number }> }) => {
  const { teamId, taskListId } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedId = searchParams.get("task-id");

  const { data: groups, isLoading: isLoadingGroup } = useGetGroups({ id: Number(teamId) });
  const taskListName = groups?.taskLists?.find((taskList) => taskList.id === Number(taskListId))?.name ?? "";

  const {
    data: taskList,
    isPending: isPendingTask,
    isError: isErrorTask,
  } = useGetTask({
    groupId: teamId,
    taskListId: taskListId,
    ...(searchParams.get("date") && { date: searchParams.get("date") }),
  });

  const [selectedDate, setSelectedDate] = useState(() => {
    const dateParam = searchParams.get("date");
    if (!dateParam) return new Date();
    return new Date(dateParam);
  });

  const onClickFloatingButton = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("w", "true");

    router.push(`/team/${teamId}/task-list/${taskListId}?${params.toString()}`, { scroll: false });
  };

  const onClickDateItem = (date: Date) => {
    setSelectedDate(date);

    const params = new URLSearchParams(searchParams.toString());
    params.set("date", date.toISOString());

    router.replace(`/team/${teamId}/task-list/${taskListId}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className={cn(selectedId && "pc:flex")}>
      <PageLayout ariaLabel="목록 페이지">
        <h1 className="sr-only">목록 페이지</h1>
        <PageHeaderBar title={groups?.name} />

        <div aria-label="목록 페이지 컨텐츠" className={cn("pc:flex pc:gap-[25px]")}>
          <TodoHeader data={groups} isLoading={isLoadingGroup} groupId={teamId} />
          <TodoSection
            sectionName={taskListName}
            data={taskList ?? []}
            teamId={teamId}
            onClickDateItem={onClickDateItem}
            selectedDate={selectedDate}
            taskListId={taskListId}
            taskStatus={{ isPending: isPendingTask, isError: isErrorTask }}
          />
        </div>
      </PageLayout>

      <FloatingButton
        iconName="plus"
        className="fixed bottom-2 right-2"
        iconClassName="size-6 tablet:size-6"
        onClick={onClickFloatingButton}
      />

      {selectedId && <DetailPage teamId={teamId} taskListId={taskListId} id={Number(selectedId)} />}
      {searchParams.get("w") && (
        <MakeTodoModal
          isOpen={!!searchParams.get("w")}
          onClose={() => {
            const params = new URLSearchParams(searchParams.toString());
            params.delete("w");
            router.push(`/team/${teamId}/task-list/${taskListId}?${params.toString()}`, { scroll: false });
          }}
          groupId={teamId}
          taskListId={taskListId}
        />
      )}
    </div>
  );
};

const Page = ({ params }: { params: Promise<{ teamId: number; taskListId: number }> }) => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <TaskListPage params={params} />
    </Suspense>
  );
};

export default Page;
