import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Elegant Badge */}
          <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-12 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.3em] uppercase font-medium">
              Excellence & Savoir-Faire
            </span>
            <div className="w-12 h-px bg-accent" />
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            L'Art de la
            <span className="block text-gradient-gold mt-2">Menuiserie Aluminium</span>
          </h1>

          {/* Elegant Subheadline */}
          <p className="text-lg md:text-xl text-white/70 mb-4 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Créations sur mesure alliant design contemporain et performance thermique exceptionnelle.
          </p>
          
          <p className="text-accent font-medium text-lg mb-10 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            Devis personnalisé sous 24h • Partout en Tunisie
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="gold" size="xl" asChild>
              <a href="#contact">
                Demander un Devis
              </a>
            </Button>
            <Button variant="hero-glass" size="xl" asChild>
              <a href="https://wa.me/21698765432" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Trust Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-8 border-t border-white/10 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "15+", label: "Années d'Excellence" },
              { value: "2500+", label: "Projets Réalisés" },
              { value: "24h", label: "Devis Express" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-display text-3xl md:text-4xl text-accent mb-1">{stat.value}</div>
                <div className="text-xs md:text-sm text-white/50 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#produits"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 hover:text-accent transition-colors group"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Découvrir</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </a>
    </section>
  );
};

export default Hero;
