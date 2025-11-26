import { Dropdown, Icon, Profile } from "@/common";
import { cn, formatToKoreanDate, getFrequencyLabel } from "@/utils";
import { HEADER_STYLES } from "./HEADER_STYLES";
import { GetTaskListDetailResponse } from "@/api/axios/task-list-detail/_types/type";

interface HeaderSectionProps {
  data: GetTaskListDetailResponse;
}

const HeaderSection = ({ data }: HeaderSectionProps) => {
  const options = [
    { value: "edit", label: "수정", action: () => {} },
    { value: "delete", label: "삭제", action: () => {} },
  ];

  return (
    <header className="flex flex-col gap-4 mt-5">
      <div className="flex items-center justify-between">
        <h2 className={cn("text-xl-bold", "tablet:text-2xl-bold")}>{data.name}</h2>
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
  );
};

export default HeaderSection;
