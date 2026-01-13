import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import productWindow from "@/assets/product-window.jpg";
import productDoor from "@/assets/product-door.jpg";
import productGuardrail from "@/assets/product-guardrail.jpg";
import productMurRideau from "@/assets/product-mur-rideau.jpg";
import productBaieVitree from "@/assets/product-baie-vitree.jpg";
import productVoletRoulant from "@/assets/product-volet-roulant.jpg";
import productBriseSoleil from "@/assets/product-brise-soleil.jpg";
import productCloison from "@/assets/product-cloison.jpg";

const products = [
  {
    id: 1,
    title: "Fenêtres",
    subtitle: "Aluminium Premium",
    description: "Élégance et performance thermique supérieure pour votre intérieur.",
    image: productWindow,
    features: ["Double vitrage", "Isolation optimale", "Design épuré"],
    startingPrice: "250 DT",
  },
  {
    id: 2,
    title: "Facade Mur Rideau",
    subtitle: "Architecture Moderne",
    description: "Solutions architecturales pour façades vitrées contemporaines.",
    image: productMurRideau,
    features: ["Grande surface", "Design contemporain", "Haute performance"],
    startingPrice: "600 DT",
  },
  {
    id: 3,
    title: "Portes",
    subtitle: "Sécurité & Style",
    description: "Premières impressions inoubliables avec nos portes sur mesure.",
    image: productDoor,
    features: ["Haute sécurité", "Finitions luxe", "Sur mesure"],
    startingPrice: "600 DT",
  },
  {
    id: 4,
    title: "Baies Vitrées",
    subtitle: "Panoramiques",
    description: "Ouvrez votre espace sur l'extérieur avec une luminosité maximale.",
    image: productBaieVitree,
    features: ["Grande ouverture", "Rails discrets", "Vue panoramique"],
    startingPrice: "500 DT",
  },
  {
    id: 5,
    title: "Garde-Corps",
    subtitle: "Verre & Aluminium",
    description: "Sécurité et esthétique pour balcons, terrasses et escaliers.",
    image: productGuardrail,
    features: ["Verre trempé", "Inoxydable", "Minimaliste"],
    startingPrice: "180 DT/ml",
  },
  {
    id: 6,
    title: "Volet Roulant",
    subtitle: "Confort & Protection",
    description: "Protection solaire et isolation thermique optimales.",
    image: productVoletRoulant,
    features: ["Motorisé", "Isolation", "Sécurité"],
    startingPrice: "120 DT/m²",
  },
  {
    id: 7,
    title: "Brise Soleil",
    subtitle: "Design & Efficacité",
    description: "Contrôle de la lumière naturelle avec élégance.",
    image: productBriseSoleil,
    features: ["Orientable", "Aluminium", "Esthétique"],
    startingPrice: "350 DT/m²",
  },
  {
    id: 8,
    title: "Cloison Agencement",
    subtitle: "Espaces Modulables",
    description: "Solutions de cloisonnement pour bureaux et espaces commerciaux.",
    image: productCloison,
    features: ["Modulable", "Vitré", "Professionnel"],
    startingPrice: "250 DT/m²",
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
            className="group flex-shrink-0 w-[300px] md:w-[340px] bg-card overflow-hidden shadow-md hover:shadow-elegant transition-all duration-700 snap-start"
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
            <div className="p-5 border-t border-border">
              <div className="mb-3">
                <span className="text-accent text-xs tracking-[0.15em] uppercase">{product.subtitle}</span>
                <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors duration-300">
                  {product.title}
                </h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 font-light leading-relaxed line-clamp-2">
                {product.description}
              </p>
              
              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-2 py-1 border border-border text-xs text-muted-foreground uppercase tracking-wider"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Central CTA Button */}
      <div className="container mx-auto px-4 mt-12">
        <div className="flex flex-col items-center text-center">
          <p className="text-muted-foreground mb-6 font-light">
            Intéressé par nos produits ? Obtenez un devis personnalisé gratuit.
          </p>
          <Button variant="gold" size="lg" className="group" asChild>
            <a href="#contact">
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Products;
