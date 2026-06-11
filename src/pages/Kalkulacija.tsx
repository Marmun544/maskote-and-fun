import { motion } from "framer-motion";
import { Calculator } from "lucide-react";
import ServiceInquiryForm from "@/components/ServiceInquiryForm";

const Kalkulacija = () => {
  return (
    <main className="pt-24">
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-4">
              <Calculator className="w-4 h-4" /> Kalkulator cijene
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Kalkulacija i <span className="text-primary">dostupnost termina</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Odaberite uslugu, broj dana i željeni datum — odmah dobivate okvirnu cijenu i
              šaljete upit za provjeru dostupnosti.
            </p>
          </motion.div>
        </div>
      </section>

      <ServiceInquiryForm />
    </main>
  );
};

export default Kalkulacija;
