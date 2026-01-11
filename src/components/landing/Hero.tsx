import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/80 to-navy-dark/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20 pb-12">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Leader en Menuiserie Aluminium en Tunisie
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Fenêtres & Portes <br />
            <span className="text-gradient">Aluminium Premium</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Qualité supérieure, isolation thermique optimale et design moderne. 
            <strong className="text-white"> Devis gratuit sous 24h</strong> partout en Tunisie.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="whatsapp" size="xl" asChild>
              <a href="https://wa.me/21698765432" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-6 h-6" />
                WhatsApp - Devis Rapide
              </a>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <a href="tel:+21671234567">
                <Phone className="w-5 h-5" />
                Appelez-nous
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            {[
              { value: "15+", label: "Ans d'Expérience" },
              { value: "2500+", label: "Projets Réalisés" },
              { value: "24h", label: "Devis Gratuit" },
              { value: "100%", label: "Satisfaction" },
            ].map((stat) => (
              <div key={stat.label} className="glass-effect rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-bold text-accent">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#produits"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default Hero;
