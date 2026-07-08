import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ServicesPreview from "@/components/ServicesPreview";
import WhoItsFor from "@/components/WhoItsFor";
import PricingCTA from "@/components/PricingCTA";
import VideoSection from "@/components/VideoSection";
import ComboOffer from "@/components/ComboOffer";

const homepageVideos = [
  { src: "/videos/maskota-video.mp4", title: "Maskota u akciji 🎭" },
  { src: "/videos/subsoccer-video.mov", title: "SubSoccer u akciji ⚽" },
  { src: "/videos/novi-video.mov", title: "Zabava uživo 🎉" },
];

const Index = () => (
  <main>
    <Hero />
    <ServicesPreview />
    <ComboOffer />
    <VideoSection videos={homepageVideos} />
    <WhoItsFor />
    <WhyUs />
    <PricingCTA />
  </main>
);

export default Index;
