import { HeroSection, KanbanSection } from "./(route)/landing";

export default function Page() {
  return (
    <main className="min-h-dvh">
      <HeroSection />
      <KanbanSection />
    </main>
  );
}
