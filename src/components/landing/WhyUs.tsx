import { Shield, Award, Truck, Wrench, Clock, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Garantie 10 Ans",
    description: "Tous nos produits sont garantis 10 ans. Votre tranquillité est notre priorité.",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Aluminium de première qualité, conforme aux normes européennes.",
  },
  {
    icon: Truck,
    title: "Livraison Tunisie",
    description: "Livraison et installation partout en Tunisie, du nord au sud.",
  },
  {
    icon: Wrench,
    title: "Installation Pro",
    description: "Équipe d'installateurs qualifiés avec plus de 15 ans d'expérience.",
  },
  {
    icon: Clock,
    title: "Devis en 24h",
    description: "Réponse rapide garantie. Devis détaillé sous 24 heures.",
  },
  {
    icon: ThumbsUp,
    title: "Prix Compétitifs",
    description: "Meilleur rapport qualité-prix du marché tunisien.",
  },
];

const WhyUs = () => {
  return (
    <section id="avantages" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white font-semibold text-sm mb-4">
            Pourquoi Nous Choisir
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            L'Excellence au Service de <span className="text-accent">Votre Projet</span>
          </h2>
          <p className="text-white/70 text-lg">
            Depuis plus de 15 ans, nous accompagnons les Tunisiens dans leurs projets 
            de menuiserie aluminium avec passion et professionnalisme.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
