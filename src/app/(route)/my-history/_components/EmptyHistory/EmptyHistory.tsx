import { cn } from "@/utils";

const EmptyHistory = () => {
  return (
    <div
      role="status"
      aria-label="히스토리가 없습니다."
      className={cn(
        "w-full h-[426px] flex-col-center text-center text-md-regular text-text-default",
        "tablet:h-[571px]",
        "pc:h-[328px]",
      )}
    >
      <p>
        아직 완료된 작업이 없어요. <br />
        하나씩 완료해가며 히스토리를 만들어보세요!
      </p>
    </div>
  );
};

export default EmptyHistory;
