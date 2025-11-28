import Image from "next/image";

const EmptyState = () => {
  return (
    <div role="status" className="w-full flex-col-center">
      <Image
        src="/illustrations/empty-idle.png"
        alt=""
        width={120}
        height={120}
        priority
        aria-hidden
        draggable="false"
      />
      <div className="flex-col-center gap-2 mt-3">
        <h2 className="text-lg-medium">텅— 비어 있어요.</h2>
      </div>
    </div>
  );
};

export default EmptyState;
