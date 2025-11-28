import { ResponsiveImage, TextContent } from "../_internal";
import { KANBAN_SECTION } from "../../_constants";

const KanbanSection = () => {
  return (
    <section className="w-full py-[45px] tablet:py-[80px] pc:py-[100px] bg-icon-inverse">
      <div className="w-full pc:max-w-[1920px] pc:mx-auto">
        <div className="flex flex-col pc:flex-row pc:justify-center mx-auto tablet:gap-6 pc:gap-[100px]">
          <TextContent
            iconSrc={KANBAN_SECTION.iconSrc}
            iconAlt="체크 아이콘"
            title={KANBAN_SECTION.title}
            description={KANBAN_SECTION.title}
            titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
            descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
            className="pc:mt-[78px] pc:ml-[76px]"
          />
          <div className="relative h-fit ml-[35px] tablet:ml-[30px]">
            <ResponsiveImage
              ImageInfo={{ alt: "대시보드 이미지", width: 1024, height: 600 }}
              Src={{
                mobileSrc: KANBAN_SECTION.mobileSrc,
                tabletSrc: KANBAN_SECTION.tabletSrc,
                desktopSrc: KANBAN_SECTION.desktopSrc,
              }}
              ImageClassName="object-cover object-left w-full h-ull pc:w-[1024px] pc:h-[600px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KanbanSection;
