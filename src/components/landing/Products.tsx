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
    title: "Fenêtres",
    subtitle: "Aluminium Premium",
    description: "Élégance et performance thermique supérieure pour votre intérieur.",
    image: productWindow,
    features: ["Double vitrage", "Isolation optimale", "Design épuré"],
    startingPrice: "450 DT/m²",
  },
  {
    id: 2,
    title: "Portes d'Entrée",
    subtitle: "Sécurité & Style",
    description: "Premières impressions inoubliables avec nos portes sur mesure.",
    image: productDoor,
    features: ["Haute sécurité", "Finitions luxe", "Sur mesure"],
    startingPrice: "1200 DT",
  },
  {
    id: 3,
    title: "Baies Vitrées",
    subtitle: "Panoramiques",
    description: "Ouvrez votre espace sur l'extérieur avec une luminosité maximale.",
    image: productVeranda,
    features: ["Grande ouverture", "Rails discrets", "Vue panoramique"],
    startingPrice: "800 DT/m²",
  },
  {
    id: 4,
    title: "Garde-Corps",
    subtitle: "Verre & Aluminium",
    description: "Sécurité et esthétique pour balcons, terrasses et escaliers.",
    image: productGuardrail,
    features: ["Verre trempé", "Inoxydable", "Minimaliste"],
    startingPrice: "350 DT/ml",
  },
];

const Products = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 420;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="produits" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                Collection
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
              Nos Créations <span className="text-gradient-gold">d'Exception</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light">
              Une sélection raffinée de menuiseries aluminium, conçues pour sublimer votre habitat.
            </p>
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="w-14 h-14 border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
              aria-label="Précédent"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-14 h-14 border border-charcoal/20 flex items-center justify-center text-charcoal hover:bg-charcoal hover:text-white transition-all duration-300"
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
        className="flex gap-6 overflow-x-auto px-4 md:px-[max(1rem,calc((100vw-1280px)/2+1rem))] pb-4 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex-shrink-0 w-[340px] md:w-[400px] bg-card overflow-hidden shadow-md hover:shadow-elegant transition-all duration-700 snap-start"
          >
            {/* Image */}
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              
              {/* Price Badge */}
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-white/95 backdrop-blur-sm">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">À partir de</span>
                <span className="block font-display text-lg text-charcoal">{product.startingPrice}</span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 border-t border-border">
              <div className="mb-3">
                <span className="text-accent text-xs tracking-[0.15em] uppercase">{product.subtitle}</span>
                <h3 className="font-display text-2xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {product.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-5 font-light leading-relaxed">
                {product.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-5">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 border border-border text-xs text-muted-foreground uppercase tracking-wider"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <Button variant="outline" className="w-full group/btn" asChild>
                <a href="https://wa.me/21625765000" target="_blank" rel="noopener noreferrer">
                  Demander un Devis
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
