import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandEssence from "@/components/BrandEssence";
import WhyMyGoldTea from "@/components/WhyMyGoldTea";
import ProductHighlights from "@/components/ProductHighlights";
import CraftQuality from "@/components/CraftQuality";
import LifestyleExperience from "@/components/LifestyleExperience";
import SocialProof from "@/components/SocialProof";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <BrandEssence />
      <WhyMyGoldTea />
      <ProductHighlights />
      <CraftQuality />
      <LifestyleExperience />
      <SocialProof />
      <CallToAction />
      <Footer />
    </>
  );
}
