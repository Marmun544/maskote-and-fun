import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarCheck, CheckCircle, Sparkles } from "lucide-react";
import comboImg from "@/assets/nogometna-kombinacija.jpg.asset.json";

const ComboOffer = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-bold px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" /> Najbolja vrijednost
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Nogometna <span className="text-primary">kombinacija</span> ⚽
          </h2>
          <p className="text-2xl font-extrabold text-primary mb-2">150 € / dan</p>
          <p className="text-muted-foreground mb-4">
            Uzmite najam SubSoccera i Penalty Challenge napuhanca zajedno po povoljnijoj cijeni! 
            Savršeno za sportske rođendane, školske dane, sportske evente i team buildinge.
          </p>
          <p className="font-semibold text-foreground mb-2">U kombinaciji dobivate:</p>
          <ul className="space-y-3 mb-6">
            {[
              "Najam SubSoccera",
              "Najam Penalty Challenge napuhanca",
              "Dostava i postavljanje na lokaciji",
              "Lopte i umjetna trava uključeni",
              "Organizacija turnira i natjecanja",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-foreground">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" /> {item}
              </li>
            ))}
          </ul>
          <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 font-bold">
            <a
              href="https://wa.me/385919419053?text=Pozdrav%2C%20želim%20rezervirati%20Nogometnu%20kombinaciju%20(SubSoccer%20%2B%20Penalty%20Challenge)!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CalendarCheck className="w-5 h-5 mr-2" /> Rezerviraj kombinaciju
            </a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img
            src={comboImg.url}
            alt="Nogometna kombinacija - SubSoccer i Penalty Challenge"
            className="rounded-2xl w-full h-80 lg:h-[28rem] object-cover shadow-lg"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ComboOffer;
