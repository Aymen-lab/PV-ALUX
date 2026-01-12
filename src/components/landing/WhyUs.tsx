import { Shield, Award, Truck, Wrench, Clock, ThumbsUp } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const features = [
  {
    icon: Shield,
    title: "Garantie 10 Ans",
    description: "Engagement qualité sur l'ensemble de nos produits et installations.",
  },
  {
    icon: Award,
    title: "Qualité Premium",
    description: "Aluminium de première qualité, normes européennes respectées.",
  },
  {
    icon: Truck,
    title: "Livraison Tunisie",
    description: "Service de livraison et pose sur l'ensemble du territoire.",
  },
  {
    icon: Wrench,
    title: "Artisans Experts",
    description: "Équipe qualifiée avec plus de 15 ans de savoir-faire.",
  },
  {
    icon: Clock,
    title: "Réactivité",
    description: "Devis détaillé et personnalisé sous 24 heures.",
  },
  {
    icon: ThumbsUp,
    title: "Juste Prix",
    description: "Excellence accessible, meilleur rapport qualité-prix.",
  },
];

const WhyUs = () => {
  return (
    <section id="avantages" className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
      {/* Subtle Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, white 0, white 1px, transparent 0, transparent 50%)`,
          backgroundSize: '20px 20px',
        }} />
      </div>

      {/* Gold accent lines */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              Notre Engagement
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-white mb-4 md:mb-6">
            L'Excellence au <span className="text-gradient-gold">Quotidien</span>
          </h2>
          <p className="text-white/60 text-base md:text-lg font-light">
            Depuis plus de 15 ans, nous accompagnons nos clients avec passion et professionnalisme.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {features.map((feature) => (
                <CarouselItem key={feature.title} className="pl-4 basis-[85%]">
                  <div className="p-6 bg-charcoal-light border border-white/10 h-full">
                    <div className="w-14 h-14 border border-accent/30 flex items-center justify-center mb-5 bg-accent/5">
                      <feature.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-lg text-white mb-2">{feature.title}</h3>
                    <p className="text-white/50 text-sm font-light leading-relaxed">{feature.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Swipe indicator */}
            <div className="flex justify-center mt-6 gap-1.5">
              {features.map((_, index) => (
                <div key={index} className="w-1.5 h-1.5 rounded-full bg-white/20" />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-8 md:p-10 bg-charcoal hover:bg-charcoal-light transition-all duration-500"
            >
              <div className="w-16 h-16 border border-accent/30 flex items-center justify-center mb-6 group-hover:border-accent group-hover:bg-accent/10 transition-all duration-500">
                <feature.icon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-xl text-white mb-3">{feature.title}</h3>
              <p className="text-white/50 font-light leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
