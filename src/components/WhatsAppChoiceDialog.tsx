import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

type Choice = {
  label: string;
  emoji: string;
  message: string;
};

const RESERVE_CHOICES: Choice[] = [
  {
    label: "Najam Stitch maskote",
    emoji: "🎭",
    message: "Pozdrav, želim rezervirati Stitch maskotu!",
  },
  {
    label: "Najam SubSoccer stola",
    emoji: "⚽",
    message: "Pozdrav, želim rezervirati SubSoccer stol!",
  },
];

const CONTACT_CHOICES: Choice[] = [
  {
    label: "Najam maskote",
    emoji: "🎭",
    message: "Pozdrav, zanima me najam maskote!",
  },
  {
    label: "Najam SubSoccer stola",
    emoji: "⚽",
    message: "Pozdrav, zanima me najam SubSoccer stola!",
  },
  {
    label: "Kupnja SubSoccer stola",
    emoji: "🛒",
    message: "Pozdrav, zanima me kupnja SubSoccer stola!",
  },
  {
    label: "Narudžba maskote po mjeri",
    emoji: "✨",
    message: "Pozdrav, zanima me izrada maskote po narudžbi!",
  },
];

const PHONE = "385919419053";

function openWhatsApp(message: string) {
  window.open(
    `https://wa.me/${PHONE}?text=${encodeURIComponent(message)}`,
    "_blank",
    "noopener,noreferrer"
  );
}

interface WhatsAppChoiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  variant: "reserve" | "contact";
}

const WhatsAppChoiceDialog = ({
  open,
  onOpenChange,
  variant,
}: WhatsAppChoiceDialogProps) => {
  const choices = variant === "reserve" ? RESERVE_CHOICES : CONTACT_CHOICES;
  const title =
    variant === "reserve"
      ? "Što želite rezervirati?"
      : "Što vas zanima?";
  const description =
    variant === "reserve"
      ? "Odaberite uslugu koju želite rezervirati i preusmjerit ćemo vas na WhatsApp."
      : "Odaberite opciju koja vas zanima i preusmjerit ćemo vas na WhatsApp.";

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-3 mt-4">
          {choices.map((choice) => (
            <Button
              key={choice.label}
              variant="outline"
              size="lg"
              className="justify-start text-left h-auto py-4 px-5 text-base font-semibold hover:bg-primary/10 hover:border-primary transition-colors"
              onClick={() => {
                openWhatsApp(choice.message);
                onOpenChange(false);
              }}
            >
              <span className="text-2xl mr-3">{choice.emoji}</span>
              {choice.label}
              <MessageCircle className="w-4 h-4 ml-auto text-muted-foreground" />
            </Button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default WhatsAppChoiceDialog;
