"use client";

import { useGetGroups } from "@/api/hooks";
import { TaskColumn } from "./_internal";
import { useParams } from "next/navigation";
import { getTaskListStatus } from "@/utils";
import { getUncompletedTaskCount } from "@/utils/getTaskCount";

const TaskSection = () => {
  const { teamId } = useParams();
  const { data: groups } = useGetGroups({ id: Number(teamId) });

  if (!groups) {
    return null;
  }

  const { taskLists } = groups;

  const todoLists = taskLists.filter((list) => getTaskListStatus(list) === "TODO");
  const inProgressLists = taskLists.filter((list) => getTaskListStatus(list) === "IN_PROGRESS");
  const doneLists = taskLists.filter((list) => getTaskListStatus(list) === "DONE");
  const todoCount = getUncompletedTaskCount(taskLists);

  return (
    <section className="w-full max-w-[842px] pb-20">
      <span className="flex gap-2 my-8">
        <span className="text-lg-medium text-text-primary">할 일 목록</span>
        <span className="text-lg-regular text-text-default">{todoCount}개</span>
      </span>

      <div className="flex flex-col gap-4 pc:flex-row">
        <TaskColumn title="할 일" items={todoLists} />
        <TaskColumn title="진행중" items={inProgressLists} />
        <TaskColumn title="완료" items={doneLists} />
      </div>
    </section>
  );
};

export default TaskSection;
