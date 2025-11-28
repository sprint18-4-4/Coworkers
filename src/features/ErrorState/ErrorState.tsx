import Image from "next/image";
import { cn } from "@/utils";

const ErrorState = () => {
  return (
    <div
      role="status"
      className={cn(
        "w-full h-[426px] flex-col-center text-center text-md-regular text-text-default",
        "tablet:h-[571px]",
        "pc:h-[328px]",
      )}
    >
      <Image src="/api-error/error-img-1-1.png" alt="error" width={120} height={120} />
      <div className="flex-col-center gap-2 mt-3">
        <h2 className="text-lg-medium font-semibold">앗! 실패했어요…</h2>
        <p className="text-sm-medium text-text-secondary">금방 해결할 수 있어요. 다시 시도해 주세요.</p>
      </div>
    </div>
  );
};

export default ErrorState;
