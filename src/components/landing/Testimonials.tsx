import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mohamed Ben Ali",
    location: "La Marsa, Tunis",
    rating: 5,
    text: "Un travail d'une finesse remarquable. L'équipe a su comprendre nos attentes et livrer un résultat qui dépasse nos espérances. Je recommande vivement.",
    project: "Villa complète",
  },
  {
    id: 2,
    name: "Fatma Trabelsi",
    location: "Sousse",
    rating: 5,
    text: "Professionnalisme exemplaire du premier contact à l'installation finale. La qualité des finitions est exceptionnelle.",
    project: "Baie vitrée panoramique",
  },
  {
    id: 3,
    name: "Karim Bouaziz",
    location: "Sfax",
    rating: 5,
    text: "Service impeccable et respect des délais. Le rendu est magnifique et l'isolation parfaite. Une entreprise de confiance.",
    project: "Rénovation complète",
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
              Témoignages
            </span>
            <div className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            La Parole à <span className="text-gradient-gold">Nos Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg font-light">
            Leur satisfaction est notre plus belle récompense.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-8 bg-card border border-border hover:border-accent/30 transition-all duration-500 hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-8 right-8 w-12 h-12 text-accent/10" />

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-8 leading-relaxed font-light italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-14 h-14 bg-charcoal flex items-center justify-center">
                  <span className="text-xl font-display text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-5">
                <span className="px-3 py-1 border border-accent/30 text-xs text-accent uppercase tracking-wider">
                  {testimonial.project}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
