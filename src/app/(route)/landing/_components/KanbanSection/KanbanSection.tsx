import { ResponsiveImage, TextContent } from "../_internal";

const KanbanSection = () => {
  return (
    <section className="mt-[30px] tablet:mt-0 py-[44px] tablet:py-[77px] pc:py-[100px] bg-icon-inverse">
      <div className="flex flex-col pc:flex-row pc:justify-center gap-[24px] pc:gap-[108px]">
        <TextContent
          iconSrc="/landing/land-2.svg"
          iconAlt="체크 아이콘"
          title={
            <>
              칸반보드로 함께
              <br /> 할 일 목록을 관리해요
            </>
          }
          description={
            <>
              팀원과 함께 실시간으로 할 일을 추가하고
              <br /> 지금 무엇을 해야 하는지 한눈에 볼 수 있어요
            </>
          }
          titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
          descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
          className="pc:mt-[78px]"
        />
        <div className="ml-[35px] tablet:ml-[31px] pc:ml-0">
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
