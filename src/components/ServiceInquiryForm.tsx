import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, CalendarCheck } from "lucide-react";
import { z } from "zod";

type Service = "SubSoccer" | "Penalty Challenge";

const schema = z.object({
  name: z.string().trim().min(2, "Unesite ime").max(100),
  contact: z.string().trim().min(5, "Unesite kontakt").max(150),
  date: z.string().trim().max(50).optional().or(z.literal("")),
  days: z.number().int().min(1).max(30),
  service: z.enum(["SubSoccer", "Penalty Challenge"]),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const calcPrice = (service: Service, days: number) => {
  if (service === "SubSoccer") {
    if (days <= 1) return 80;
    if (days === 2) return 140;
    return 140 + (days - 2) * 70;
  }
  // Penalty Challenge — fiksna cijena po danu/eventu
  return 90 * days;
};

const ServiceInquiryForm = () => {
  const { toast } = useToast();
  const [service, setService] = useState<Service>("SubSoccer");
  const [days, setDays] = useState<number>(1);
  const [form, setForm] = useState({ name: "", contact: "", date: "", message: "" });

  const price = useMemo(() => calcPrice(service, days), [service, days]);

  const buildMessage = () => {
    return (
      `Pozdrav! Želim poslati upit za rezervaciju:\n\n` +
      `• Usluga: ${service}\n` +
      `• Broj dana: ${days}\n` +
      `• Okvirna cijena: ${price} €\n` +
      (form.date ? `• Željeni datum: ${form.date}\n` : "") +
      `\nIme i prezime: ${form.name}\n` +
      `Kontakt: ${form.contact}\n` +
      (form.message ? `\nDodatne napomene:\n${form.message}\n` : "")
    );
  };

  const handleSubmit = (e: React.FormEvent, channel: "whatsapp" | "email") => {
    e.preventDefault();
    const parsed = schema.safeParse({ ...form, days, service });
    if (!parsed.success) {
      toast({
        title: "Provjerite unos",
        description: parsed.error.issues[0]?.message ?? "Neispravan unos",
        variant: "destructive",
      });
      return;
    }
    const text = buildMessage();
    if (channel === "whatsapp") {
      window.open(
        `https://wa.me/385919419053?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer",
      );
    } else {
      const subject = `Upit za rezervaciju – ${service} (${days} ${days === 1 ? "dan" : "dana"})`;
      window.location.href = `mailto:kovadario628@gmail.com?subject=${encodeURIComponent(
        subject,
      )}&body=${encodeURIComponent(text)}`;
    }
    toast({ title: "Upit pripremljen", description: "Otvaramo prozor za slanje." });
  };

  return (
    <section id="upit-forma" className="py-20 bg-background scroll-mt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Brzi <span className="text-primary">upit</span> za rezervaciju
            </h2>
            <p className="text-muted-foreground">
              Odaberite uslugu i broj dana — javljamo se u najkraćem roku.
            </p>
          </div>

          <form
            onSubmit={(e) => handleSubmit(e, "whatsapp")}
            className="bg-muted rounded-3xl p-6 md:p-8 space-y-6 shadow-md"
          >
            {/* Service selection */}
            <div>
              <Label className="text-sm font-bold mb-3 block">Odaberite uslugu</Label>
              <RadioGroup
                value={service}
                onValueChange={(v) => setService(v as Service)}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              >
                {(["SubSoccer", "Penalty Challenge"] as Service[]).map((s) => (
                  <label
                    key={s}
                    htmlFor={`svc-${s}`}
                    className={`flex items-center gap-3 p-4 rounded-2xl border-2 cursor-pointer transition-all bg-background ${
                      service === s
                        ? "border-primary shadow-md"
                        : "border-transparent hover:border-primary/40"
                    }`}
                  >
                    <RadioGroupItem value={s} id={`svc-${s}`} />
                    <div>
                      <p className="font-bold">{s}</p>
                      <p className="text-xs text-muted-foreground">
                        {s === "SubSoccer" ? "80 €/dan · 2 dana 140 €" : "90 € po danu"}
                      </p>
                    </div>
                  </label>
                ))}
              </RadioGroup>
            </div>

            {/* Days + Date */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-bold mb-1 block">Broj dana</Label>
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setDays((d) => Math.max(1, d - 1))}
                  >
                    −
                  </Button>
                  <Input
                    type="number"
                    min={1}
                    max={30}
                    value={days}
                    onChange={(e) =>
                      setDays(Math.min(30, Math.max(1, parseInt(e.target.value) || 1)))
                    }
                    className="rounded-xl text-center font-bold"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    className="rounded-full"
                    onClick={() => setDays((d) => Math.min(30, d + 1))}
                  >
                    +
                  </Button>
                </div>
              </div>
              <div>
                <Label className="text-sm font-bold mb-1 block">Željeni datum (opcionalno)</Label>
                <Input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="rounded-xl"
                />
              </div>
            </div>

            {/* Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label className="text-sm font-bold mb-1 block">Ime i prezime</Label>
                <Input
                  required
                  maxLength={100}
                  placeholder="Vaše ime"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="rounded-xl"
                />
              </div>
              <div>
                <Label className="text-sm font-bold mb-1 block">Email ili telefon</Label>
                <Input
                  required
                  maxLength={150}
                  placeholder="npr. 091 234 5678"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  className="rounded-xl"
                />
              </div>
            </div>

            <div>
              <Label className="text-sm font-bold mb-1 block">Napomena (opcionalno)</Label>
              <Textarea
                maxLength={1000}
                rows={3}
                placeholder="Lokacija, broj djece, posebne želje..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="rounded-xl"
              />
            </div>

            {/* Price summary */}
            <div className="flex items-center justify-between bg-background rounded-2xl p-4 border border-primary/20">
              <div>
                <p className="text-sm text-muted-foreground">Okvirna cijena</p>
                <p className="text-2xl font-extrabold text-primary">{price} €</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <p>{service}</p>
                <p>
                  {days} {days === 1 ? "dan" : "dana"}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                type="submit"
                size="lg"
                className="rounded-full bg-secondary hover:bg-secondary/90 font-bold"
              >
                <MessageCircle className="w-5 h-5 mr-2" /> Pošalji preko WhatsAppa
              </Button>
              <Button
                type="button"
                size="lg"
                variant="outline"
                className="rounded-full font-bold"
                onClick={(e) => handleSubmit(e, "email")}
              >
                <CalendarCheck className="w-5 h-5 mr-2" /> Pošalji email
              </Button>
            </div>
            <p className="text-xs text-center text-muted-foreground">
              * Konačna cijena ovisi o lokaciji i dodatnim uslugama.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceInquiryForm;
