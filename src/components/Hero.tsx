import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, CalendarCheck } from "lucide-react";
import heroImg from "@/assets/stitch-mascot-1.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Maskote and More zabava" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/70 via-primary/50 to-primary/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-secondary/90 text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold mb-6">
            🎉 Zagreb i okolica
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Učini poseban trenutak<br />
            <span className="text-sunshine">još posebnijim</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
            Zabava koja dolazi na vaš događaj — maskote, SubSoccer i više! Oduševite goste i stvorite nezaboravne uspomene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 font-bold shadow-xl">
              <a href="https://wa.me/385919419053" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5 mr-2" /> Rezerviraj sada
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 font-bold">
              <a href="https://wa.me/385919419053?text=Pozdrav%2C%20zanima%20me%20vaša%20ponuda!" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Pošalji upit
              </a>
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,80 C360,120 720,40 1440,80 L1440,120 L0,120 Z" fill="hsl(0 0% 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
