import { MapPin, Truck, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Zones = () => {
  return (
    <section id="zones" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-charcoal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              <MapPin className="w-4 h-4 inline mr-2" />
              Zone d'Intervention
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl text-foreground mb-6">
            Nous Intervenons <span className="text-gradient-gold">Partout en Tunisie</span>
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto">
            Du Nord au Sud, de l'Est à l'Ouest — notre équipe se déplace pour vous offrir 
            le même niveau d'excellence, où que vous soyez.
          </p>

          {/* Key Points */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-12 mb-10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-charcoal flex items-center justify-center">
                <Truck className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-display text-lg text-foreground">Livraison Gratuite</p>
                <p className="text-sm text-muted-foreground">Sur tout le territoire</p>
              </div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-charcoal flex items-center justify-center">
                <MapPin className="w-5 h-5 text-accent" />
              </div>
              <div className="text-left">
                <p className="font-display text-lg text-foreground">24 Gouvernorats</p>
                <p className="text-sm text-muted-foreground">Couverture nationale</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Button variant="gold" size="lg" className="group" asChild>
            <a href="tel:+21612345678">
              <Phone className="w-4 h-4 mr-2" />
              Vérifier votre zone
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Zones;
