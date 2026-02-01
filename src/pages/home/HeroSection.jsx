import Header from "../../components/header/Header";
import TextHeroSection from "../../components/TextHeroSection";
import herosection from "../../imgs/Netflix-hero-section.jpg";

function HeroSection() {
  return (
    <div
      className=" relative min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${herosection})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <TextHeroSection />
      </div>
    </div>
  );
}

export default HeroSection;
