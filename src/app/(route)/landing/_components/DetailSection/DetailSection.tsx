import { ResponsiveImage, TextContent } from "../_internal";
import { DETAIL_SECTION } from "../../_constants";

const DetailSection = () => {
  return (
    <section className="w-full pt-[45px] pc:pt-[83px] bg-brand-primary">
      <div className="flex flex-col pc:flex-row-reverse pc:justify-center gap-[30px] pc:gap-[108px]">
        <TextContent
          iconSrc={DETAIL_SECTION.iconSrc}
          iconAlt="체크 아이콘"
          title={DETAIL_SECTION.title}
          description={DETAIL_SECTION.description}
          titleClassName="text-lg-bold tablet:text-2xl-bold text-text-inverse"
          descriptionClassName="text-xs-regular tablet:text-md-regular text-point-blue"
          className="pc:mt-[180px] pc:ml-[0]"
        />
        <div className="max-w-[982px] w-full pc:ml-[35px]">
          <ResponsiveImage
            alt="대시보드 이미지"
            width={982}
            height={667}
            mobileSrc={DETAIL_SECTION.mobileSrc}
            tabletSrc={DETAIL_SECTION.tabletSrc}
            desktopSrc={DETAIL_SECTION.desktopSrc}
          />
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
