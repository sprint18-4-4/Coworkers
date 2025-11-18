import { ResponsiveImage, TextContent } from "../_internal";

const DetailSection = () => {
  return (
    <section className="w-full pt-[45px] pc:pt-[83px] bg-brand-primary">
      <div className="flex flex-col pc:flex-row-reverse pc:justify-center gap-[30px] pc:gap-[108px]">
        <TextContent
          iconSrc="/landing/land-3.svg"
          iconAlt="체크 아이콘"
          title={
            <>
              세부적으로 할 일들을
              <br /> 간편하게 체크해요
            </>
          }
          description={
            <>
              일정에 맞춰 해야 할 세부 항목을 정리하고,
              <br /> 하나씩 빠르게 완료해보세요
            </>
          }
          titleClassName="text-lg-bold tablet:text-2xl-bold text-text-inverse"
          descriptionClassName="text-xs-regular tablet:text-md-regular text-point-blue"
          className="pc:mt-[180px] pc:ml-[0]"
        />
        <div className="max-w-[982px] w-full tablet:ml-[44px] pc:ml-[35px]">
          <ResponsiveImage
            alt="대시보드 이미지"
            width={982}
            height={667}
            mobileSrc="/landing/img-3-2.png"
            tabletSrc="/landing/img-3-1.png"
            desktopSrc="/landing/img-3.png"
          />
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
