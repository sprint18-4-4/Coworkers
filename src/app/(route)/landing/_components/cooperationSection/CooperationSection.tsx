import { ResponsiveImage, TextContent } from "../_internal";

const CooperationSection = () => {
  return (
    <section className="pt-[44px] tablet:pt-[77px] pc:pt-[100px] bg-background-secondary">
      <div className="flex flex-col pc:flex-row pc:justify-center gap-[24px] pc:gap-[108px]">
        <TextContent
          iconSrc="/landing/land-4.svg"
          iconAlt="채팅 아이콘"
          title={
            <>
              할 일 공유를 넘어
              <br /> 의견을 나누고 함께 결정해요
            </>
          }
          description={
            <>
              댓글로 진행상황을 기록하고 피드백을 주고받으며
              <br /> 함께 결정을 내릴 수 있어요.
            </>
          }
          titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
          descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
          className="pc:mt-[180px] pc:ml-[0]"
        />
        <div className="ml-[35px] tablet:ml-[62px] pc:ml-0">
          <div className="max-w-[940px] w-full">
            <ResponsiveImage
              alt="대시보드 이미지"
              width={940}
              height={800}
              mobileSrc="/landing/img-4-2.png"
              tabletSrc="/landing/img-4-1.png"
              desktopSrc="/landing/img-4.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
