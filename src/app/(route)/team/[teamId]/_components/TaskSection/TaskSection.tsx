import { ProgressButton } from "@/common";
import { TaskList, TaskHeader } from "./_internal/TaskCard/TaskCard";

const TaskSection = () => {
  return (
    <section className="w-full max-w-[842px]">
      <span className="flex gap-2 my-8">
        <span className="text-lg-medium text-text-primary">할 일 목록</span>
        <span className="text-lg-regular text-text-default">(4개)</span>
      </span>

      <div className="flex flex-col gap-4 pc:flex-row">
        {/* TODO(상인): TaskCard를 만들어놨지만 요구사항을 제대로 이해하지 못했습니다. 완료 카테고리가 TaskHeader만 보여준다면 카테고리를 기준으로 분리하는 구조로 바꿀 것 같습니다 */}
        <section className="flex-1 flex flex-col gap-5">
          <ProgressButton text="할 일" className="w-full h-[38px]" />
          <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
            <TaskHeader />
            <TaskList />
          </article>
          <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
            <TaskHeader />
            <TaskList />
          </article>
        </section>
        <section className="flex-1 flex flex-col gap-5">
          <ProgressButton text="진행 중" className="w-full h-[38px]" />
          <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
            <TaskHeader />
            <TaskList />
          </article>
        </section>
        <section className="flex-1 flex flex-col gap-5">
          <ProgressButton text="완료" className="w-full h-[38px]" />
          <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
            <TaskHeader />
          </article>
          <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
            <TaskHeader />
          </article>
          <article className="flex flex-col gap-4 px-5 py-4 border border-border-primary rounded-xl bg-background-primary">
            <TaskHeader />
          </article>
        </section>
      </div>
    </section>
  );
};

export default TaskSection;
