import { motion } from "framer-motion";
import { Cake, PartyPopper, Building2, GraduationCap } from "lucide-react";

const audiences = [
  { icon: Cake, label: "Rođendani", color: "bg-secondary/10 text-secondary" },
  { icon: PartyPopper, label: "Proslave", color: "bg-primary/10 text-primary" },
  { icon: Building2, label: "Poslovni eventi", color: "bg-accent/20 text-accent-foreground" },
  { icon: GraduationCap, label: "Škole i vrtići", color: "bg-mint/10 text-mint" },
];

const WhoItsFor = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Za <span className="text-primary">koga</span> je</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Savršen izbor za sve prilike — od dječjih rođendana do poslovnih evenata.</p>
      </motion.div>
      <div className="flex flex-wrap justify-center gap-6">
        {audiences.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`flex items-center gap-3 px-6 py-4 rounded-2xl ${a.color} font-bold text-lg hover:shadow-md transition-all`}
          >
            <a.icon className="w-6 h-6" />
            {a.label}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhoItsFor;
