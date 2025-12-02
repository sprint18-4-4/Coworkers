"use client";

import { Suspense } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "@/features";

const OnboardingModal = dynamic(() => import("@/app/(route)/_components/Onboarding/OnboardingModal"), { ssr: false });

const OnboardingContent = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const isOnboarding = searchParams.get("onboarding") === "true";

  const handleClose = () => {
    router.replace(pathname, { scroll: false });
  };

  if (!isOnboarding) return null;

  return <OnboardingModal onClose={handleClose} />;
};

export default function LoadingOnBoarding() {
  return (
    <Suspense fallback={<LoadingSpinner size="lg" />}>
      <OnboardingContent />
    </Suspense>
  );
}
