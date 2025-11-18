import { HeroSection, KanbanSection, DetailSection } from "./(route)/landing";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <KanbanSection />
      <DetailSection />
    </main>
  );
}
