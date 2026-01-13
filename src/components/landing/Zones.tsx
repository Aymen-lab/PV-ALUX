import { MapPin, Check } from "lucide-react";

const zones = [
  {
    region: "Grand Tunis",
    cities: ["Tunis", "Ariana", "Ben Arous", "Manouba"],
    highlight: true,
  },
  {
    region: "Nord",
    cities: ["Bizerte", "Béja", "Jendouba", "Le Kef"],
    highlight: false,
  },
  {
    region: "Sahel",
    cities: ["Sousse", "Monastir", "Mahdia", "Nabeul"],
    highlight: false,
  },
  {
    region: "Centre",
    cities: ["Kairouan", "Kasserine", "Sidi Bouzid"],
    highlight: false,
  },
  {
    region: "Sud",
    cities: ["Sfax", "Gabès", "Médenine", "Djerba"],
    highlight: false,
  },
  {
    region: "Sud-Ouest",
    cities: ["Gafsa", "Tozeur", "Kébili"],
    highlight: false,
  },
];

const Zones = () => {
  return (
    <section id="zones" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              <MapPin className="w-4 h-4 inline mr-2" />
              Zones d'Intervention
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            À Votre Service <span className="text-gradient-gold">Partout</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Notre équipe intervient sur l'ensemble du territoire tunisien avec le même 
            niveau d'exigence et de professionnalisme.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div
              key={zone.region}
              className={`p-6 border transition-all duration-500 hover-lift ${
                zone.highlight
                  ? "bg-charcoal text-white border-charcoal"
                  : "bg-white border-border hover:border-accent/30"
              }`}
            >
              <div className="flex items-center justify-between mb-5">
                <h3 className={`font-display text-xl ${zone.highlight ? "text-white" : "text-foreground"}`}>
                  {zone.region}
                </h3>
                {zone.highlight && (
                  <span className="px-3 py-1 text-xs bg-accent text-charcoal uppercase tracking-wider font-medium">
                    Siège
                  </span>
                )}
              </div>
              <ul className="space-y-3">
                {zone.cities.map((city) => (
                  <li key={city} className="flex items-center gap-3">
                    <Check className={`w-4 h-4 shrink-0 ${zone.highlight ? "text-accent" : "text-accent"}`} />
                    <span className={`text-sm ${zone.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                      {city}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-10 font-light">
          <span className="text-foreground font-medium">Votre ville n'est pas listée ?</span>{" "}
          Contactez-nous, nous intervenons partout en Tunisie.
        </p>
      </div>
    </section>
  );
};

export default Zones;
