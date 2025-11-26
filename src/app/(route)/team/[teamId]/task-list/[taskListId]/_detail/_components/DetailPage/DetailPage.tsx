"use client";

import { cn } from "@/utils";
import { BaseButton, Icon } from "@/common";
import { useRouter } from "next/navigation";
import { CommentSection, ContentSection, HeaderSection } from "../_internal";
import useGetTaskListDetail from "@/api/hooks/task-list-detail/useGetTaskListDetail";
import { useDetailDataMutations } from "../../_hooks";

interface DetailPageProps {
  id: string;
  teamId: string;
  taskListId: string;
}

const DetailPage = ({ id, teamId, taskListId }: DetailPageProps) => {
  const router = useRouter();

  const onClickClose = () => {
    router.back();
  };

  const { data: taskDetail, isPending } = useGetTaskListDetail({
    groupId: teamId,
    taskListId: String(taskListId),
    taskId: id,
  });

  const isDone = taskDetail?.doneAt !== null;

  const { toggleDone } = useDetailDataMutations({ taskPath: { teamId, taskListId, id } });

  // TODO(지권): 에러, 로딩 상태 처리 추가 필요
  if (isPending) return <div>로딩중</div>;
  if (!taskDetail) return <div>데이터 없음</div>;

  return (
    <>
      <article
        role="dialog"
        aria-modal="true"
        className={cn(
          "w-full min-h-[calc(100vh-52px)] flex flex-col px-4 py-3 space-y-6 bg-background-primary",
          "fixed inset-x-0 inset-y-10 z-[999] shadow-lg",
          "tablet:px-7 tablet:py-10 tablet:inset-x-[150px] tablet:inset-y-0",
          "pc:static pc:min-w-[200px] pc:p-10 pc:max-h-[calc(100vh)] pc:overflow-y-auto",
        )}
      >
        <button aria-label="닫기" onClick={onClickClose}>
          <Icon name="x" className="size-6 tablet-6" />
        </button>

        <HeaderSection
          data={taskDetail}
          isDone={isDone}
          taskPath={{
            id,
            teamId,
            taskListId,
          }}
        />

        <hr />

        <ContentSection content={taskDetail?.description ?? ""} />

        <CommentSection data={taskDetail} />
      </article>

      <BaseButton
        size="large"
        aria-label={isDone ? "완료 상태 취소하기" : "완료 상태로 변경하기"}
        variant={isDone ? "outlinedPrimary" : "solid"}
        onClick={() => toggleDone(isDone)}
        className={cn(
          "fixed bottom-4 right-4 z-[999] max-w-[132px] h-[40px] rounded-[40px]",
          isDone && "bg-background-inverse",
        )}
      >
        <Icon name="check" className="size-4 tablet:size-4" />
        {isDone ? "완료 취소하기" : "완료하기"}
      </BaseButton>
    </>
  );
};

export default DetailPage;
