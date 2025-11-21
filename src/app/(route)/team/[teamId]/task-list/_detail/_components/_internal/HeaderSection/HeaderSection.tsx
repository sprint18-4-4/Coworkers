import { cn } from "@/utils";
import { Icon } from "@/common";
import { HEADER_STYLES } from "./HEADER_STYLES";

const HeaderSection = () => {
  return (
    <header className="flex flex-col gap-4 mt-5">
      <div className="flex items-center justify-between">
        <h2 className={cn("text-xl-bold", "tablet:text-2xl-bold")}>법인 설립 비용 안내 드리기</h2>
        <Icon name="kebab" className="size-6 tablet:size-6" aria-label="옵션 메뉴" />
      </div>

      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-lg bg-black" />
          <span className="text-md-medium text-text-primary">안해나</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className={HEADER_STYLES.text}>
            <Icon name="calendar" className={HEADER_STYLES.icon} />
            <span className="text-text-default">시작 날짜</span>
            <time dateTime="2024-07-29" className="text-text-primary">
              2024년 7월 29일 오후 3:30
            </time>
          </p>
          <p className={HEADER_STYLES.text}>
            <Icon name="repeat" className={HEADER_STYLES.icon} />
            <span className="text-text-default">반복 설정</span>
            <span className="text-text-primary">매일 반복</span>
          </p>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;
