import Action from "@/components/home/action";
import Features from "@/components/home/features";
import Footer from "@/components/home/footer";
import HeroSection from "@/components/home/hero-section";
import Stats from "@/components/home/stats";
import TopNavigation from "@/components/navigation/top-navigation";

function HomePage() {
  return (
    <div>
      {/* top navigation */}
      <TopNavigation />

      <div className="">
        <HeroSection />
        <Features />
        <Stats />
        <Action />
        <Footer />
      </div>

      {/* Hero Section */}
    </div>
  );
}

export default HomePage;
