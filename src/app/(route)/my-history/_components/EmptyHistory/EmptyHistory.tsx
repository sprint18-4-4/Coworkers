import { cn } from "@/utils";

const EmptyHistory = () => {
  return (
    <div
      className={cn(
        "w-full h-[426px] flex-col-center text-center text-md-regular text-text-default",
        "tablet:h-[571px] pc:h-[328px]",
      )}
    >
      <span>
        아직 완료된 작업이 없어요. <br />
        하나씩 완료해가며 히스토리를 만들어보세요!
      </span>
    </div>
  );
};

export default EmptyHistory;
