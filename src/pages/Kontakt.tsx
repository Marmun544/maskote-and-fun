import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", contact: "", topic: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Pozdrav! Ime: ${form.name}, Kontakt: ${form.contact}, Tema: ${form.topic}, Poruka: ${form.message}`;
    window.open(`https://wa.me/385919419053?text=${encodeURIComponent(text)}`, "_blank");
    toast({ title: "Upit poslan!", description: "Preusmjeravamo vas na WhatsApp." });
  };

  return (
    <main className="pt-24">
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kontaktirajte <span className="text-primary">nas</span></h1>
            <p className="text-muted-foreground max-w-xl mx-auto">Pitanja, rezervacije ili plan događaja — javite nam se!</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Kontakt informacije</h2>
              <div className="space-y-5">
                <a href="tel:+385919419053" className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold">Telefon</p>
                    <p className="text-muted-foreground text-sm">+385 91 941 9053</p>
                  </div>
                </a>
                <a href="https://wa.me/385919419053" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-[hsl(142,70%,45%)]/10 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-[hsl(142,70%,45%)]" />
                  </div>
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-muted-foreground text-sm">Pošaljite poruku</p>
                  </div>
                </a>
                <a href="mailto:kovadario628@gmail.com" className="flex items-center gap-4 p-4 rounded-2xl bg-muted hover:shadow-md transition-all">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold">Email</p>
                    <p className="text-muted-foreground text-sm">kovadario628@gmail.com</p>
                  </div>
                </a>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-muted">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <p className="font-bold">Lokacija</p>
                    <p className="text-muted-foreground text-sm">Zagreb, Hrvatska</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold mb-6">Pošaljite upit</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-bold mb-1 block">Ime i prezime</label>
                  <Input
                    required
                    placeholder="Vaše ime"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold mb-1 block">Email / Telefon</label>
                  <Input
                    required
                    placeholder="Email ili broj telefona"
                    value={form.contact}
                    onChange={(e) => setForm({ ...form, contact: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-bold mb-1 block">Tema</label>
                  <Select onValueChange={(v) => setForm({ ...form, topic: v })}>
                    <SelectTrigger className="rounded-xl">
                      <SelectValue placeholder="Odaberite temu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Rezervacija">Rezervacija</SelectItem>
                      <SelectItem value="Upit">Upit</SelectItem>
                      <SelectItem value="Ostalo">Ostalo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-bold mb-1 block">Poruka</label>
                  <Textarea
                    required
                    placeholder="Opišite svoj događaj..."
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="rounded-xl"
                  />
                </div>
                <Button type="submit" size="lg" className="rounded-full w-full bg-primary hover:bg-primary/90 font-bold text-lg">
                  <Send className="w-5 h-5 mr-2" /> Pošalji upit za događaj
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Kontakt;
