import { HeroSection, KanbanSection, DetailSection, CooperationSection, ConversionSection } from "./(route)/_landing";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <KanbanSection />
      <DetailSection />
      <CooperationSection />
      <ConversionSection />
    </main>
  );
}
