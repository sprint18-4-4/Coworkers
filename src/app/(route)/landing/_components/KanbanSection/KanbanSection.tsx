import Image from "next/image";
import ResponsiveImage from "../ResponsiveImage/ResponsiveImage";

const KanbanSection = () => {
  return (
    <section className="mt-[30px] tablet:mt-0 py-[44px] tablet:py-[77px] pc:py-[100px] bg-icon-inverse">
      <div className="flex flex-col pc:flex-row gap-[24px] pc:gap-[108px]">
        <div className="w-[278px] mb-1 ml-[35px] tablet:ml-[62px] pc:ml-[180px] pc:mt-[78px]">
          <Image
            src="/landing/land-2.svg"
            alt="폴더 아이콘"
            width={48}
            height={48}
            className="size-7 tablet:size-10 pc:size-12"
          />
          <div className="w-[278px]">
            <h2 className="text-lg-bold tablet:text-2xl-bold text-brand-primary">
              칸반보드로 함께
              <br />할 일 목록을 관리해요
            </h2>
            <p className="text-xs-regular tablet:text-md-regular text-text-disabled mt-3">
              팀원과 함께 실시간으로 할 일을 추가하고
              <br /> 지금 무엇을 해야 하는지 한눈에 볼 수 있어요
            </p>
          </div>
        </div>
        <div className="pc:w-full ml-[35px] tablet:ml-[31px] pc:ml-0">
          <div className="max-w-[1024px] w-full">
            <ResponsiveImage
              alt="대시보드 이미지"
              width={1024}
              height={600}
              mobileSrc="/landing/img-2-2.png"
              tabletSrc="/landing/img-2-1.png"
              desktopSrc="/landing/img-2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KanbanSection;
