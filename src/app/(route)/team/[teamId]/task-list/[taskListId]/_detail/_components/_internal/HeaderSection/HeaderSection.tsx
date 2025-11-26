import { FormEvent, useState } from "react";
import { Dropdown, Icon, Profile } from "@/common";
import { cn, formatToKoreanDate, getFrequencyLabel } from "@/utils";
import { HEADER_STYLES } from "./HEADER_STYLES";
import EditDataModal from "../EditDataModal/EditDataModal";
import { GetTaskListDetailResponse } from "@/api/axios/task-list-detail/_types/type";
import { usePatchTaskListDetail } from "@/api/hooks";

interface HeaderSectionProps {
  data: GetTaskListDetailResponse;
  isDone: boolean;
  taskPath: {
    id: string;
    teamId: string;
    taskListId: string;
  };
}

const HeaderSection = ({ data, isDone, taskPath }: HeaderSectionProps) => {
  const [isEditModal, setIsEditModal] = useState(false);
  const [form, setForm] = useState({
    name: data.name,
    description: data.description || "",
  });

  const options = [
    { value: "edit", label: "수정", action: () => setIsEditModal(true) },
    { value: "delete", label: "삭제", action: () => {} },
  ];

  const { mutate: patchTaskListDetailMutate } = usePatchTaskListDetail();

  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    if (!form.name.trim() || !form.description.trim()) return;
    e.preventDefault();

    patchTaskListDetailMutate({
      groupId: taskPath.teamId,
      taskListId: taskPath.taskListId,
      taskId: taskPath.id,
      body: {
        name: form.name,
        description: form.description,
      },
    });

    setIsEditModal(false);
  };

  return (
    <>
      <header className="flex flex-col gap-4 mt-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <h2
              className={cn(
                "text-xl-bold w-full break-words",
                "tablet:text-2xl-bold",
                isDone && "line-through text-text-default",
              )}
            >
              {data.name}
            </h2>
            {isDone && (
              <div className="px-[10px] py-[6px] rounded-lg bg-brand-secondary text-lg-bold text-brand-primary text-nowrap">
                완료
              </div>
            )}
          </div>
          <Dropdown
            iconName="kebab"
            iconClassName="size-6 tablet:size-6"
            options={options}
            textAlign="left"
            placement="bottom-right"
          />
        </div>

        <div className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3">
            <Profile src={data.writer.image} alt={data.writer.nickname} size="md" />
            <span className="text-md-medium text-text-primary">{data.writer.nickname}</span>
          </div>
          <div className="flex flex-col gap-2">
            <p className={HEADER_STYLES.text}>
              <Icon name="calendar" className={HEADER_STYLES.icon} />
              <span className="text-text-default">시작 날짜</span>
              <time dateTime={data.date} className="text-text-primary">
                {formatToKoreanDate(data.date)}
              </time>
            </p>
            <p className={HEADER_STYLES.text}>
              <Icon name="repeat" className={HEADER_STYLES.icon} />
              <span className="text-text-default">반복 설정</span>
              <span className="text-text-primary">{getFrequencyLabel(data.frequency)}</span>
            </p>
          </div>
        </div>
      </header>

      {isEditModal && (
        <EditDataModal
          isEditModal={isEditModal}
          setIsEditModal={setIsEditModal}
          form={form}
          setForm={setForm}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};

export default HeaderSection;
