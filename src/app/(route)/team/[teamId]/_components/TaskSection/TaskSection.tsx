"use client";

import { TaskColumn } from "./_internal";

const TaskSection = () => {
  return (
    <section className="w-full max-w-[842px]">
      <span className="flex gap-2 my-8">
        <span className="text-lg-medium text-text-primary">할 일 목록</span>
        <span className="text-lg-regular text-text-default">(4개)</span>
      </span>

      <div className="flex flex-col gap-4 pc:flex-row">
        <TaskColumn title="할 일" items={[]} />
        <TaskColumn title="진행중" items={[]} />
        <TaskColumn title="완료" items={[]} />
      </div>
    </section>
  );
};

export default TaskSection;
