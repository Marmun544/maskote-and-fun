import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import PricingCTA from "@/components/PricingCTA";

import img1 from "@/assets/stitch-mascot-1.jpg";
import img2 from "@/assets/stitch-mascot-2.jpg";
import img3 from "@/assets/stitch-mascot-4.jpg";
import img4 from "@/assets/custom-mascots.jpg";
import img5 from "@/assets/subsoccer-table.jpg";
import img6 from "@/assets/subsoccer-table-2.jpg";
import img7 from "@/assets/stitch-mascot-3.jpg";
import img8 from "@/assets/event-photo-1.jpg";
import img9 from "@/assets/event-photo-2.jpg";
import img10 from "@/assets/event-photo-3.jpg";

type Category = "Sve" | "Maskote" | "SubSoccer" | "Rođendani" | "Eventi";

const photos: { src: string; alt: string; cat: Category[] }[] = [
  { src: img1, alt: "Stitch maskota", cat: ["Maskote"] },
  { src: img2, alt: "Stitch maskota pozira", cat: ["Maskote"] },
  { src: img3, alt: "Maskota s djecom", cat: ["Maskote"] },
  { src: img4, alt: "Kolekcija maskota", cat: ["Maskote"] },
  { src: img5, alt: "SubSoccer stol", cat: ["SubSoccer"] },
  { src: img6, alt: "SubSoccer u akciji", cat: ["SubSoccer"] },
  { src: img7, alt: "SubSoccer na travi", cat: ["SubSoccer"] },
  { src: img8, alt: "Event zabava", cat: ["Rođendani", "Eventi"] },
  { src: img9, alt: "Dječji rođendan", cat: ["Rođendani"] },
  { src: img10, alt: "Proslava", cat: ["Eventi"] },
];

const categories: Category[] = ["Sve", "Maskote", "SubSoccer", "Rođendani", "Eventi"];

const Galerija = () => {
  const [active, setActive] = useState<Category>("Sve");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "Sve" ? photos : photos.filter((p) => p.cat.includes(active));

  return (
    <main className="pt-24">
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Galerija <span className="text-secondary">zabave</span></h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Pogledajte nezaboravne trenutke s rođendana, proslava i eventa!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full font-bold text-sm transition-all ${
                  active === cat
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-muted text-muted-foreground hover:bg-primary/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <AnimatePresence>
              {filtered.map((photo) => (
                <motion.div
                  key={photo.src}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="cursor-pointer group overflow-hidden rounded-2xl"
                  onClick={() => setLightbox(photo.src)}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-48 md:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button className="absolute top-6 right-6 text-primary-foreground" onClick={() => setLightbox(null)}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="Galerija"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <PricingCTA />
    </main>
  );
};

export default Galerija;
