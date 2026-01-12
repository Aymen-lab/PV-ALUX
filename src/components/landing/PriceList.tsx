import { useState } from "react";
import { ChevronDown, ChevronRight, Sparkles } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Fenêtre aluminium",
    price: "250 DT",
    unit: null,
    icon: "🪟",
  },
  {
    id: 2,
    name: "Façade mur rideau",
    price: "600 DT",
    unit: null,
    icon: "🏢",
  },
  {
    id: 3,
    name: "Porte aluminium",
    price: "600 DT",
    unit: null,
    icon: "🚪",
  },
  {
    id: 4,
    name: "Baie vitrée",
    price: "500 DT",
    unit: null,
    icon: "🖼️",
  },
  {
    id: 5,
    name: "Garde-corps",
    price: "180 DT",
    unit: "/ ml",
    icon: "🏗️",
  },
  {
    id: 6,
    name: "Volet roulant",
    price: "120 DT",
    unit: "/ m²",
    icon: "🎚️",
    variants: ["VR PVC", "VR injecté", "VR extrudé"],
  },
  {
    id: 7,
    name: "Brise-soleil aluminium",
    price: "350 DT",
    unit: "/ m²",
    icon: "☀️",
  },
  {
    id: 8,
    name: "Cloison & agencement",
    price: "250 DT",
    unit: "/ m²",
    icon: "🧱",
  },
];

const PriceList = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section id="tarifs" className="py-20 md:py-28 bg-charcoal relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>
      
      {/* Gold Accent Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-accent/0 via-accent/30 to-accent/0" />
      <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-accent/0 via-accent/20 to-accent/0" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              Tarification
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white mb-4">
            Produits & <span className="text-gradient-gold">Prix Indicatifs</span>
          </h2>
          <p className="text-white/60 text-lg font-light">
            Transparence totale sur nos tarifs. Prix indicatifs, devis personnalisé sur demande.
          </p>
        </div>

        {/* Price Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 hover:border-accent/50 transition-all duration-500 hover:bg-white/10"
            >
              {/* Main Content */}
              <div 
                className={`p-5 md:p-6 ${product.variants ? 'cursor-pointer' : ''}`}
                onClick={() => product.variants && setExpandedId(expandedId === product.id ? null : product.id)}
              >
                {/* Icon & Name */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{product.icon}</span>
                    <h3 className="font-display text-lg text-white group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                  </div>
                  {product.variants && (
                    <button className="text-white/40 hover:text-accent transition-colors md:hidden">
                      {expandedId === product.id ? (
                        <ChevronDown className="w-5 h-5" />
                      ) : (
                        <ChevronRight className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-xs text-white/40 uppercase tracking-wider">À partir de</span>
                </div>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-display text-2xl md:text-3xl text-accent">{product.price}</span>
                  {product.unit && (
                    <span className="text-sm text-white/50">{product.unit}</span>
                  )}
                </div>

                {/* Desktop Variants (always visible) */}
                {product.variants && (
                  <div className="hidden md:flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/10">
                    {product.variants.map((variant) => (
                      <span
                        key={variant}
                        className="px-2 py-1 text-xs text-white/60 border border-white/20 uppercase tracking-wider"
                      >
                        {variant}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Accordion Variants */}
              {product.variants && (
                <div
                  className={`md:hidden overflow-hidden transition-all duration-300 ${
                    expandedId === product.id ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <div className="px-5 pb-5 pt-0">
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                      {product.variants.map((variant) => (
                        <span
                          key={variant}
                          className="px-2 py-1 text-xs text-white/60 border border-white/20 uppercase tracking-wider"
                        >
                          {variant}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/70">
              Prix indicatifs. Devis gratuit et personnalisé sur demande.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceList;
