import Hero from "@/components/Hero";
import WhyUs from "@/components/WhyUs";
import ServicesPreview from "@/components/ServicesPreview";
import WhoItsFor from "@/components/WhoItsFor";
import PricingCTA from "@/components/PricingCTA";
import ComboOffer from "@/components/ComboOffer";
import liveFunImg from "@/assets/subsoccer-rent-kids.jpg.asset.json";

const Index = () => (
  <main>
    <Hero />
    <ServicesPreview />
    <ComboOffer />
    <section className="py-12 md:py-20 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Zabava uživo 🎉</h2>
        <img
          src={liveFunImg.url}
          alt="Djeca igraju SubSoccer na zelenom travnjaku"
          className="rounded-2xl w-full max-w-4xl mx-auto h-auto object-cover shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
    <WhoItsFor />
    <WhyUs />
    <PricingCTA />
  </main>
);

export default Index;
