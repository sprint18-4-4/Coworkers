import { HeroSection, KanbanSection, DetailSection, CooperationSection } from "./(route)/landing";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <KanbanSection />
      <DetailSection />
      <CooperationSection />
    </main>
  );
}
