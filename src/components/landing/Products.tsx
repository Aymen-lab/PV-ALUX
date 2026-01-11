import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="produits" className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div className="max-w-xl">
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

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border-2 border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              aria-label="Suivant"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Scroll Gallery */}
      <div
        ref={scrollContainerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-4 md:px-[max(1rem,calc((100vw-1280px)/2+1rem))] pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex-shrink-0 w-[320px] md:w-[380px] bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover-lift snap-start"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Price Badge */}
              <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-bold shadow-lg">
                {product.startingPrice}
              </div>
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{product.description}</p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-4">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
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

      {/* Scroll Indicator for Mobile */}
      <div className="flex justify-center gap-2 mt-6 md:hidden">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="w-2 h-2 rounded-full bg-primary/30"
          />
        ))}
      </div>
    </section>
  );
};

export default Products;
