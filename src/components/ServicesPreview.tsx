import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import mascotsCollectionImg from "@/assets/mascots-collection-new.jpg.asset.json";
import subsoccerImg from "@/assets/subsoccer-wembley.jpg.asset.json";
import subsoccerImg2 from "@/assets/subsoccer-wembley-2.jpg.asset.json";
import customImg from "@/assets/mascots-collection.jpg";
import buySubsoccerImg from "@/assets/subsoccer-buy.png";
import penaltyImg from "@/assets/penalty-challenge.png";
import penaltyImg2 from "@/assets/penalty-challenge-2.jpg.asset.json";

const services = [
  {
    title: "Najam maskote (Stitch, PAW Patrol, Yamal and more)",
    desc: "Maskote koje oduševljavaju djecu svih uzrasta — Stitch, Chase iz PAW Patrola, Yamal i mnogi drugi dolaze na vašu proslavu!",
    imgs: [mascotsCollectionImg.url],
    imgPosition: "object-[center_20%]",
    link: "/ponuda#najam-maskote",
  },
  {
    title: "Najam SubSoccer stola",
    desc: "Jedinstveni nogometni stol koji zabavlja sve generacije i unosi energiju u svaku zabavu.",
    imgs: [subsoccerImg.url, subsoccerImg2.url],
    link: "/ponuda#subsoccer-najam",
  },
  {
    title: "Penalty Challenge - nogometni izazov ⚽",
    desc: "Napuhanac za pucanje penala – savršena zabava za djecu i odrasle na svakom događaju!",
    imgs: [penaltyImg, penaltyImg2.url],
    link: "/ponuda#penalty-challenge",
  },
  {
    title: "Naruči svoj SubSoccer ⚽",
    desc: "Želiš SubSoccer stol kod kuće ili u uredu? Sada ga možeš naručiti!",
    imgs: [buySubsoccerImg],
    link: "/ponuda#subsoccer-kupnja",
  },
  {
    title: "Naruči svoju maskotu",
    desc: "Želite svoju jedinstvenu maskotu? Dizajniramo i izrađujemo po vašim željama.",
    imgs: [customImg],
    link: "/ponuda#custom-maskota",
  },
];

const useImageSwap = (count: number, interval = 2000) => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    if (count < 2) return;
    const timer = setInterval(() => setIndex((i) => (i + 1) % count), interval);
    return () => clearInterval(timer);
  }, [count, interval]);
  return index;
};

const ServiceCardImages = ({ imgs, alt, imgPosition = "object-center" }: { imgs: string[]; alt: string; imgPosition?: string }) => {
  const index = useImageSwap(imgs.length);
  return (
    <div className="relative h-56 overflow-hidden">
      {imgs.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={alt}
          className={`absolute inset-0 w-full h-full object-cover ${imgPosition} group-hover:scale-110 transition-all duration-500 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
};

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
            <ServiceCardImages imgs={s.imgs} alt={s.title} imgPosition={s.imgPosition} />
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
