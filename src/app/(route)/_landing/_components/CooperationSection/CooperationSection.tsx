import { DeviceImage, FeatureBlock } from "../_internal";
import { COOPERATION_SECTION } from "../../_constants";

const CooperationSection = () => {
  return (
    <section className="pt-[44px] tablet:pt-[77px] pc:pt-[100px] bg-background-secondary">
      <div className="flex flex-col pc:flex-row pc:justify-center gap-[24px] pc:gap-[108px]">
        <FeatureBlock
          iconSrc={COOPERATION_SECTION.iconSrc}
          iconAlt="채팅 아이콘"
          title={COOPERATION_SECTION.title}
          description={COOPERATION_SECTION.description}
          titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
          descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
          className="pc:mt-[180px] pc:ml-[76px]"
        />
        <div className="relative h-fit mx-5 tablet:mx-[66px] pc:mx-0">
          <DeviceImage
            ImageInfo={{ alt: "대시보드 이미지", width: 940, height: 800 }}
            Src={{
              mobileSrc: COOPERATION_SECTION.mobileSrc,
              tabletSrc: COOPERATION_SECTION.tabletSrc,
              desktopSrc: COOPERATION_SECTION.desktopSrc,
            }}
            ImageClassName="object-cover object-left pc:w-[940px] pc:h-[800px]"
          />
        </div>
      </div>
    </section>
  );
};

export default CooperationSection;
