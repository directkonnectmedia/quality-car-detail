import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import GalleryPreview from "@/components/GalleryPreview";
import Reviews from "@/components/Reviews";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <GalleryPreview />
      <Reviews />
      <CTASection />
    </>
  );
}
