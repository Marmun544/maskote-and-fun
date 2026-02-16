import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import stitchImg from "@/assets/stitch-mascot-2.jpg";
import subsoccerImg from "@/assets/subsoccer-table-2.jpg";
import customImg from "@/assets/custom-mascots.jpg";
import buySubsoccerImg from "@/assets/subsoccer-buy.png";

const services = [
  {
    title: "Najam Stitch maskote",
    desc: "Stitch maskota koja oduševljava najmlađe i donosi osmijehe na svaku proslavu.",
    img: stitchImg,
    color: "from-primary/80 to-sky/60",
    overlay: null,
    link: "/ponuda#stitch-maskota",
  },
  {
    title: "Najam SubSoccer stola",
    desc: "Jedinstveni nogometni stol koji zabavlja sve generacije i unosi energiju u svaku zabavu.",
    img: subsoccerImg,
    color: "from-mint/80 to-primary/60",
    overlay: null,
    link: "/ponuda#subsoccer-najam",
  },
  {
    title: "Naruči svoj SubSoccer ⚽",
    desc: "Želiš SubSoccer stol kod kuće ili u uredu? Sada ga možeš naručiti!",
    img: buySubsoccerImg,
    color: "from-primary/80 to-mint/60",
    overlay: null,
    link: "/ponuda#subsoccer-kupnja",
  },
  {
    title: "Izrada maskote po narudžbi",
    desc: "Želite svoju jedinstvenu maskotu? Dizajniramo i izrađujemo po vašim željama.",
    img: customImg,
    color: "from-secondary/80 to-coral/60",
    overlay: null,
    link: "/ponuda#custom-maskota",
  },
];

const ServicesPreview = () => (
  <section className="py-20 bg-muted">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Što <span className="text-secondary">nudimo</span></h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Pregledajte našu ponudu i pronađite savršenu zabavu za svoj događaj.</p>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="group rounded-2xl overflow-hidden bg-card shadow-md hover:shadow-xl transition-all hover:-translate-y-2"
          >
            <div className="relative h-56 overflow-hidden">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className={`absolute inset-0 bg-gradient-to-t ${s.color} opacity-40`} />
              {s.overlay && (
                <div className={`absolute inset-0 flex items-center justify-center ${"overlayPosition" in s && s.overlayPosition === "bottom" ? "pt-36" : ""}`}>
                  <span className="text-white text-2xl font-extrabold drop-shadow-[0_2px_8px_rgba(0,0,0,0.7)] bg-primary/60 px-4 py-2 rounded-xl backdrop-blur-sm">
                    {s.overlay}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <Button asChild variant="link" className="text-primary font-bold p-0">
                <a href={s.link}>
                  Saznaj više <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesPreview;
