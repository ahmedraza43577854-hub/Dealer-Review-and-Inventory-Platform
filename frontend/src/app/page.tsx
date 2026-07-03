import { Suspense } from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { StatsBar } from "@/components/home/StatsBar";
import { HowItWorksPreview } from "@/components/home/HowItWorksPreview";
import { FeaturedDealersContent } from "@/components/home/FeaturedDealersContent";
import { FeaturedDealersSkeleton } from "@/components/home/FeaturedDealersSkeleton";
import { StatesGrid } from "@/components/home/StatesGrid";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { CtaSection } from "@/components/home/CtaSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <HowItWorksPreview />
      <Suspense fallback={<FeaturedDealersSkeleton />}>
        <FeaturedDealersContent />
      </Suspense>
      <StatesGrid />
      <WhyChooseUs />
      <CtaSection />
    </>
  );
}
