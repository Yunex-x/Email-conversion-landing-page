import BenefitsSection from "./components/BenefitsSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navigation from "./components/Navigation";
import PainPointsSection from "./components/PainPointsSection";
import SolutionSection from "./components/SolutionSection";
import TrustSection from "./components/TrustSection";

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-[#1A1A40] via-[#2D2D5F] to-[#00A8E8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Navigation />
        <HeroSection />
        <PainPointsSection />
        <SolutionSection />
        <BenefitsSection />
        <TrustSection />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
}