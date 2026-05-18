import Footer from "../components/Footer";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import Marquee from "../components/Marquee";
import ProcessSection from "../components/ProcessSection";
import ProductsSection from "../components/ProductsSection";
import QuoteSection from "../components/QuoteSection";
import ServicesSection from "../components/ServicesSection";
import SmoothScroll from "../components/SmoothScroll";
import StatsSection from "../components/StatsSection";

export default function HomePage() {
  return (
    <div className="bg-black text-white font-['EB_Garamond',serif] overflow-x-hidden">
      <SmoothScroll />
      <Header />
      <HeroSection />
      <Marquee />
      <StatsSection />
      <ProductsSection />
      <ServicesSection />
      <ProcessSection />
      <QuoteSection />
      <Footer />
    </div>
  );
}
