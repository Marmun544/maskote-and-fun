import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

const PricingCTA = () => (
  <section className="py-20 bg-gradient-to-r from-primary to-sky relative overflow-hidden">
    <div className="absolute inset-0 opacity-10">
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground rounded-full" />
      <div className="absolute bottom-10 right-20 w-48 h-48 bg-primary-foreground rounded-full" />
    </div>
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-primary-foreground"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Upit za cijenu</h2>
        <p className="text-lg max-w-xl mx-auto mb-8 opacity-90">
          Cijena najma ovisi o lokaciji, vrsti događaja i trajanju. Nazovite nas ili pošaljite poruku za brzu ponudu.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="rounded-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold text-lg px-8">
            <a href="tel:+385919419053">
              <Phone className="w-5 h-5 mr-2" /> Nazovite nas
            </a>
          </Button>
          <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold text-lg px-8">
            <a href="https://wa.me/385919419053" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp poruka
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default PricingCTA;
