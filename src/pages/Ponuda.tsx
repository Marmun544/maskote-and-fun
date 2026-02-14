import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarCheck, MessageCircle, CheckCircle } from "lucide-react";
import PricingCTA from "@/components/PricingCTA";
import stitchImg1 from "@/assets/stitch-mascot-1.jpg";
import stitchImg2 from "@/assets/stitch-mascot-2.jpg";
import subsoccerImg from "@/assets/subsoccer-table-2.jpg";
import subsoccerImg2 from "@/assets/stitch-mascot-4.jpg";
import customImg from "@/assets/custom-mascots.jpg";
import buySubsoccerImg from "@/assets/subsoccer-buy.png";

const Ponuda = () => (
  <main className="pt-24">
    {/* Intro */}
    <section className="py-16 bg-muted">
      <div className="container mx-auto px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Naša <span className="text-primary">ponuda</span></h1>
          <p className="text-muted-foreground max-w-xl mx-auto">Pregledajte našu ponudu i pronađite savršenu zabavu za svoj rođendan, proslavu ili event.</p>
        </motion.div>
      </div>
    </section>

    {/* Stitch Mascot */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Najam <span className="text-primary">Stitch maskote</span></h2>
            <p className="text-muted-foreground mb-6">Stitch maskota koja oduševljava najmlađe i donosi osmijehe na svaku proslavu.</p>
            <ul className="space-y-3 mb-8">
              {["Dolazak na lokaciju po dogovoru", "Interakcija s djecom i fotografiranje", "Idealno za rođendane i evente"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 font-bold">
              <a href="https://wa.me/385919419053?text=Pozdrav%2C%20želim%20rezervirati%20Stitch%20maskotu!" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5 mr-2" /> Rezerviraj maskotu
              </a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid grid-cols-2 gap-3">
            <img src={stitchImg1} alt="Stitch maskota" className="rounded-2xl w-full h-48 object-cover" />
            <img src={stitchImg2} alt="Stitch maskota" className="rounded-2xl w-full h-48 object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* SubSoccer */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 lg:order-1 grid grid-cols-1 gap-3">
            <img src={subsoccerImg} alt="SubSoccer stol" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
            <img src={subsoccerImg2} alt="SubSoccer na travi" className="rounded-2xl w-full h-56 object-cover shadow-lg" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Najam <span className="text-primary">SubSoccer stola</span></h2>
            <p className="text-muted-foreground mb-6">Jedinstveni nogometni stol ispod stola koji zabavlja sve generacije i unosi energiju u svaku zabavu.</p>
            <ul className="space-y-3 mb-8">
              {["Zabava za djecu i odrasle", "Idealno za druženja, rođendane i evente", "Brza i jednostavna instalacija"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 font-bold">
              <a href="https://wa.me/385919419053?text=Pozdrav%2C%20želim%20rezervirati%20SubSoccer%20stol!" target="_blank" rel="noopener noreferrer">
                <CalendarCheck className="w-5 h-5 mr-2" /> Rezerviraj SubSoccer
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Buy SubSoccer */}
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kupi svoj <span className="text-primary">SubSoccer ⚽</span></h2>
            <p className="text-muted-foreground mb-6">Želiš SubSoccer stol kod kuće, u uredu ili u svom ugostiteljskom objektu? Sada ga možeš kupiti i uživati u zabavi kad god poželiš!</p>
            <ul className="space-y-3 mb-8">
              {["Savršen za kuću, ured ili kafić", "Kvalitetna izrada i dugotrajna zabava", "Dostava i montaža po dogovoru", "Kontaktiraj nas za cijenu i detalje"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full bg-secondary hover:bg-secondary/90 font-bold">
              <a href="https://wa.me/385919419053?text=Pozdrav%2C%20zanima%20me%20kupnja%20SubSoccer%20stola!" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Pošalji upit za kupnju
              </a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={buySubsoccerImg} alt="Kupi SubSoccer stol" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Custom Mascot */}
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Izrada maskote <span className="text-secondary">po narudžbi</span></h2>
            <p className="text-muted-foreground mb-6">Želite svoju jedinstvenu maskotu? Mi je dizajniramo i izrađujemo po vašim željama.</p>
            <ul className="space-y-3 mb-8">
              {["Prilagođeni dizajn i boje", "Idealno za firme, promocije i posebne događaje"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-foreground">
                  <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" /> {item}
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="rounded-full bg-primary hover:bg-primary/90 font-bold">
              <a href="https://wa.me/385919419053?text=Pozdrav%2C%20zanima%20me%20izrada%20maskote%20po%20narudžbi!" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" /> Pošalji upit
              </a>
            </Button>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src={customImg} alt="Izrada maskote" className="rounded-2xl w-full h-80 object-cover shadow-lg" />
          </motion.div>
        </div>
      </div>
    </section>

    <PricingCTA />
  </main>
);

export default Ponuda;
