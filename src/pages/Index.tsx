import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ServicesPreview from "@/components/ServicesPreview";
import WhoItsFor from "@/components/WhoItsFor";
import PricingCTA from "@/components/PricingCTA";
import ComboOffer from "@/components/ComboOffer";
import VideoSection from "@/components/VideoSection";

const homepageVideos = [
  {
    src: "/videos/maskota-video.mp4",
    title: "Maskote u akciji 🎭",
  },
  {
    src: "/videos/subsoccer-video.mov",
    title: "SubSoccer u akciji ⚽",
  },
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
