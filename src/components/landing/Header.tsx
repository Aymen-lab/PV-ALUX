import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#produits", label: "Produits" },
    { href: "#avantages", label: "Excellence" },
    { href: "#zones", label: "Régions" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-6"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className={`w-12 h-12 flex items-center justify-center border-2 transition-all duration-300 ${
              isScrolled ? "border-charcoal" : "border-white"
            }`}>
              <span className={`font-display text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}>A</span>
            </div>
            <div className="hidden sm:block">
              <span className={`font-display text-xl font-semibold tracking-wide transition-colors duration-300 ${
                isScrolled ? "text-charcoal" : "text-white"
              }`}>AluPro</span>
              <span className={`block text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
                isScrolled ? "text-muted-foreground" : "text-white/70"
              }`}>Menuiserie d'Excellence</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm tracking-wide uppercase font-medium transition-all duration-300 gold-underline ${
                  isScrolled ? "text-charcoal hover:text-accent" : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+21671234567"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                isScrolled ? "text-charcoal hover:text-accent" : "text-white/90 hover:text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden lg:inline">71 234 567</span>
            </a>
            <Button variant={isScrolled ? "gold" : "hero-glass"} size="sm" asChild>
              <a href="https://wa.me/21625765000" target="_blank" rel="noopener noreferrer">Devis Gratuit</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? "text-charcoal" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-elegant animate-fade-in">
            <nav className="flex flex-col p-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-charcoal text-sm tracking-wide uppercase font-medium py-4 border-b border-border hover:text-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-3 pt-6">
                <Button variant="gold" asChild>
                  <a href="https://wa.me/21625765000" target="_blank" rel="noopener noreferrer">Demander un Devis</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+21671234567">
                    <Phone className="w-4 h-4" />
                    71 234 567
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
