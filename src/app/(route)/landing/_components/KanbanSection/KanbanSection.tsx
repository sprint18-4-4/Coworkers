import { ResponsiveImage, TextContent } from "../_internal";
import { KANBAN_SECTION } from "../../_constants";

const KanbanSection = () => {
  return (
    <section className="mt-[30px] tablet:mt-0 py-[44px] tablet:py-[77px] pc:py-[100px] bg-icon-inverse">
      <div className="flex flex-col pc:flex-row pc:justify-center gap-[24px] pc:gap-[108px]">
        <TextContent
          iconSrc={KANBAN_SECTION.iconSrc}
          iconAlt="체크 아이콘"
          title={KANBAN_SECTION.title}
          description={KANBAN_SECTION.title}
          titleClassName="text-lg-bold tablet:text-2xl-bold text-brand-primary"
          descriptionClassName="text-xs-regular tablet:text-md-regular text-interaction-inactive"
          className="pc:mt-[78px]"
        />
        <div className="ml-[35px] tablet:ml-[31px] pc:ml-0">
          <div className="max-w-[1024px] w-full">
            <ResponsiveImage
              ImageInfo={{ alt: "대시보드 이미지", width: 1024, height: 600 }}
              Src={{
                mobileSrc: KANBAN_SECTION.mobileSrc,
                tabletSrc: KANBAN_SECTION.tabletSrc,
                desktopSrc: KANBAN_SECTION.desktopSrc,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default KanbanSection;
