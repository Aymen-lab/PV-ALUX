import { MapPin, CheckCircle } from "lucide-react";

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
    region: "Nord-Est",
    cities: ["Nabeul", "Zaghouan", "Sousse", "Monastir"],
    highlight: false,
  },
  {
    region: "Centre",
    cities: ["Kairouan", "Kasserine", "Sidi Bouzid", "Mahdia"],
    highlight: false,
  },
  {
    region: "Sud",
    cities: ["Sfax", "Gabès", "Médenine", "Djerba"],
    highlight: false,
  },
  {
    region: "Sud-Ouest",
    cities: ["Gafsa", "Tozeur", "Kébili", "Tataouine"],
    highlight: false,
  },
];

const Zones = () => {
  return (
    <section id="zones" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            <MapPin className="w-4 h-4 inline mr-1" />
            Zones d'Intervention
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Présents <span className="text-primary">Partout en Tunisie</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Notre équipe intervient sur l'ensemble du territoire tunisien. 
            Livraison et installation assurées dans tous les gouvernorats.
          </p>
        </div>

        {/* Zones Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {zones.map((zone) => (
            <div
              key={zone.region}
              className={`p-6 rounded-2xl border transition-all duration-300 hover-lift ${
                zone.highlight
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/30"
              }`}
            >
              <h3 className={`text-xl font-bold mb-4 ${zone.highlight ? "text-white" : "text-foreground"}`}>
                {zone.region}
                {zone.highlight && (
                  <span className="ml-2 px-2 py-0.5 text-xs bg-accent text-accent-foreground rounded-full">
                    Siège
                  </span>
                )}
              </h3>
              <ul className="space-y-2">
                {zone.cities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <CheckCircle className={`w-4 h-4 shrink-0 ${zone.highlight ? "text-accent" : "text-accent"}`} />
                    <span className={zone.highlight ? "text-white/90" : "text-muted-foreground"}>
                      {city}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground mt-8">
          <strong className="text-foreground">Votre ville n'est pas listée ?</strong> Contactez-nous, 
          nous intervenons partout en Tunisie !
        </p>
      </div>
    </section>
  );
};

export default Zones;
