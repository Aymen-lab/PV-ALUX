import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import productWindow from "@/assets/product-window.jpg";
import productDoor from "@/assets/product-door.jpg";
import productVeranda from "@/assets/product-veranda.jpg";
import productGuardrail from "@/assets/product-guardrail.jpg";

const products = [
  {
    id: 1,
    title: "Fenêtres Aluminium",
    description: "Fenêtres coulissantes, à battant et oscillo-battantes. Isolation thermique et acoustique supérieure.",
    image: productWindow,
    features: ["Double vitrage", "Isolation thermique", "Anti-effraction"],
    startingPrice: "À partir de 450 DT/m²",
  },
  {
    id: 2,
    title: "Portes d'Entrée",
    description: "Portes d'entrée sécurisées et élégantes. Design personnalisable selon vos goûts.",
    image: productDoor,
    features: ["Haute sécurité", "Design moderne", "Sur mesure"],
    startingPrice: "À partir de 1200 DT",
  },
  {
    id: 3,
    title: "Baies Coulissantes",
    description: "Baies vitrées panoramiques pour une luminosité maximale et une vue dégagée.",
    image: productVeranda,
    features: ["Grande ouverture", "Rails invisibles", "Luminosité max"],
    startingPrice: "À partir de 800 DT/m²",
  },
  {
    id: 4,
    title: "Garde-Corps",
    description: "Garde-corps en aluminium et verre pour balcons, terrasses et escaliers.",
    image: productGuardrail,
    features: ["Verre trempé", "Inoxydable", "Design épuré"],
    startingPrice: "À partir de 350 DT/ml",
  },
];

const Products = () => {
  return (
    <section id="produits" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Nos Produits
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Une Gamme Complète pour <span className="text-primary">Tous Vos Projets</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Découvrez notre sélection de menuiseries aluminium haut de gamme, 
            adaptées au climat tunisien.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.title}
                  </h3>
                  <span className="shrink-0 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-semibold">
                    {product.startingPrice}
                  </span>
                </div>
                
                <p className="text-muted-foreground mb-4">{product.description}</p>
                
                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <Button variant="outline" className="w-full group/btn" asChild>
                  <a href="#contact">
                    Demander un Devis
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
