import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Početna", path: "/" },
  { label: "Ponuda", path: "/ponuda" },
  { label: "Galerija", path: "/galerija" },
  { label: "Kontakt", path: "/kontakt" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [location]);

  const headerBg = scrolled || !isHome
    ? "bg-background/95 backdrop-blur-md shadow-lg"
    : "bg-transparent";

  const textColor = scrolled || !isHome ? "text-foreground" : "text-primary-foreground";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="container mx-auto flex items-center justify-between py-4 px-4">
        <Link to="/" className={`font-display text-2xl font-bold ${textColor} transition-colors`}>
          🎭 Maskote <span className="text-secondary">&</span> More
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-semibold transition-colors hover:text-secondary ${
                location.pathname === item.path ? "text-secondary" : textColor
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-bold">
            <a href="https://wa.me/385919419053" target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-1" /> Rezerviraj
            </a>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className={`md:hidden ${textColor}`} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md shadow-lg border-t">
          <nav className="flex flex-col items-center gap-4 py-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-semibold transition-colors hover:text-secondary ${
                  location.pathname === item.path ? "text-secondary" : "text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="rounded-full bg-secondary hover:bg-secondary/90 font-bold mt-2">
              <a href="https://wa.me/385919419053" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-1" /> Rezerviraj
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
