import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarCheck } from "lucide-react";
import heroImg from "@/assets/hero-main.jpg";
import WhatsAppChoiceDialog from "@/components/WhatsAppChoiceDialog";

const Hero = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogVariant, setDialogVariant] = useState<"reserve" | "contact">("reserve");

  const openDialog = (variant: "reserve" | "contact") => {
    setDialogVariant(variant);
    setDialogOpen(true);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="Maskote, Subsoccer & More zabava" className="w-full h-full object-cover" />
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
            🎭✨ Zabava za svaki poseban trenutak
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Učini poseban trenutak<br />
            <span className="text-sunshine">još posebnijim</span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
            Zabava koja dolazi na vaš događaj — maskote, SubSoccer i više! Oduševite goste i stvorite nezaboravne uspomene.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 font-bold shadow-xl" onClick={() => openDialog("reserve")}>
              <CalendarCheck className="w-5 h-5 mr-2" /> Rezerviraj sada
            </Button>
            <Button size="lg" className="rounded-full bg-[hsl(142,70%,45%)] hover:bg-[hsl(142,70%,40%)] text-white text-lg px-8 font-bold shadow-xl" onClick={() => openDialog("contact")}>
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Kontaktiraj nas
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

      <WhatsAppChoiceDialog open={dialogOpen} onOpenChange={setDialogOpen} variant={dialogVariant} />
    </section>
  );
};

export default Hero;
