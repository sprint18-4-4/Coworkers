import { HeroSection, KanbanSection, DetailSection, CooperationSection, ConversionSection } from "./(route)/_landing";

export default function Page() {
  return (
    <main className="mobile:h-[calc(100vh-62px)] h-dvh">
      <HeroSection />
      <KanbanSection />
      <DetailSection />
      <CooperationSection />
      <ConversionSection />
    </main>
  );
}
