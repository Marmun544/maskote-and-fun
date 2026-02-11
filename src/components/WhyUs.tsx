import { motion } from "framer-motion";
import { Shield, Zap, Clock, Sparkles } from "lucide-react";

const features = [
  { icon: Shield, title: "Pouzdani", desc: "Profesionalna usluga na koju možete računati za svaki događaj." },
  { icon: Zap, title: "Brza rezervacija", desc: "Jednostavan dogovor — nazovite ili pošaljite WhatsApp poruku." },
  { icon: Clock, title: "Točan dolazak", desc: "Dolazimo na vrijeme, spremni za zabavu bez stresa." },
  { icon: Sparkles, title: "Zabava za sve", desc: "Atrakcije koje oduševljavaju djecu i odrasle." },
];

const WhyUs = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-3">Zašto baš <span className="text-primary">mi</span>?</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">Pouzdani, jednostavni za dogovor i fokusirani na dobru zabavu.</p>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-muted rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUs;
