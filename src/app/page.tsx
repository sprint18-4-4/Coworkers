import { cookies } from "next/headers";
import { HeroSection, KanbanSection, DetailSection, CooperationSection, ConversionSection } from "./(route)/_landing";

export default async function Page() {
  const cookieStore = await cookies();
  const token = cookieStore.get("accessToken");

  const startDestination = token ? "/team" : "/login";

  return (
    <main className="mobile:h-[calc(100vh-62px)] h-dvh">
      <HeroSection link={startDestination} />
      <KanbanSection />
      <DetailSection />
      <CooperationSection />
      <ConversionSection link={startDestination} />
    </main>
  );
}
