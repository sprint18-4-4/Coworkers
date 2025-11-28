import Image from "next/image";

const ErrorState = () => {
  return (
    <div role="status" className="w-full flex-col-center">
      <Image src="/api-error/error-img-1-1.png" alt="error" width={120} height={120} priority />
      <div className="flex-col-center gap-2 mt-3">
        <h2 className="text-lg-medium">앗! 실패했어요…</h2>
        <p className="text-sm-medium text-text-secondary">금방 해결할 수 있어요. 다시 시도해 주세요.</p>
      </div>
    </div>
  );
};

export default ErrorState;
