import { BaseButton, Dropdown, Icon, Input, Modal, Profile } from "@/common";
import { cn, formatToKoreanDate, getFrequencyLabel } from "@/utils";
import { HEADER_STYLES } from "./HEADER_STYLES";
import { GetTaskListDetailResponse } from "@/api/axios/task-list-detail/_types/type";
import { usePatchTaskListDetail } from "@/api/hooks";
import { FormEvent, useState } from "react";

interface HeaderSectionProps {
  data: GetTaskListDetailResponse;
  id: string;
  teamId: string;
  taskListId: string;
}

const HeaderSection = ({ data, id, teamId, taskListId }: HeaderSectionProps) => {
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
  console.log(data);
  const handleEdit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    patchTaskListDetailMutate({
      groupId: teamId,
      taskListId: taskListId,
      taskId: id,
      body: {
        name: form.name,
        description: form.description,
        // done 상태를 유지하려면 기존 값 같이 보내야 함
        done: data.doneAt !== null,
      },
    });

    setIsEditModal(false);
  };

  return (
    <>
      <header className="flex flex-col gap-4 mt-5">
        <div className="flex items-start justify-between">
          <h2 className={cn("text-xl-bold w-full break-words", "tablet:text-2xl-bold")}>{data.name}</h2>
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
        <Modal isOpen={isEditModal} onClose={() => setIsEditModal(false)}>
          <h3 className="text-lg-bold mb-4">할 일 수정</h3>
          <form onSubmit={handleEdit} className="w-full">
            <div className="w-full flex-col-center gap-2">
              <Input
                autoFocus
                maxLength={30}
                placeholder="제목을 입력하세요"
                defaultValue={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <Input
                maxLength={30}
                placeholder="설명을 입력하세요"
                defaultValue={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
              />
            </div>
            <div className="w-full flex gap-2 mt-6">
              <BaseButton variant="outlinedSecondary" size="large" onClick={() => setIsEditModal(false)}>
                취소
              </BaseButton>
              <BaseButton
                type="submit"
                variant="solid"
                size="large"
                disabled={!form.name.trim() || !form.description.trim()}
              >
                저장
              </BaseButton>
            </div>
          </form>
        </Modal>
      )}
    </>
  );
};

export default HeaderSection;
