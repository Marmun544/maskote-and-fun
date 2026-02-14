import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-14">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h3 className="font-display text-2xl font-bold mb-3">🎭 Maskote, Subsoccer ⚽ & More</h3>
          <p className="text-primary-foreground/70 text-sm">
            Zabava koja dolazi na vaš događaj — maskote, SubSoccer i više!
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-3">Brze poveznice</h4>
          <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <Link to="/" className="hover:text-secondary transition-colors">Početna</Link>
            <Link to="/ponuda" className="hover:text-secondary transition-colors">Ponuda</Link>
            <Link to="/galerija" className="hover:text-secondary transition-colors">Galerija</Link>
            <Link to="/kontakt" className="hover:text-secondary transition-colors">Kontakt</Link>
          </nav>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-3">Kontakt</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <a href="tel:+385919419053" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Phone className="w-4 h-4" /> +385 91 941 9053
            </a>
            <a href="https://wa.me/385919419053" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href="mailto:kovadario628@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
              <Mail className="w-4 h-4" /> kovadario628@gmail.com
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Zagreb, Hrvatska
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Maskote, Subsoccer & More. Sva prava pridržana.
      </div>
    </div>
  </footer>
);

export default Footer;
