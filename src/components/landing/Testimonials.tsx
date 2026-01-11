import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Mohamed Ben Ali",
    location: "Tunis, La Marsa",
    rating: 5,
    text: "Excellent travail ! Les fenêtres sont magnifiques et l'isolation est parfaite. L'équipe était très professionnelle et ponctuelle. Je recommande vivement.",
    project: "Fenêtres coulissantes",
  },
  {
    id: 2,
    name: "Fatma Trabelsi",
    location: "Sousse",
    rating: 5,
    text: "Très satisfaite de la baie vitrée installée dans mon salon. Le rendu est superbe et le prix était compétitif. Merci pour votre professionnalisme !",
    project: "Baie vitrée",
  },
  {
    id: 3,
    name: "Karim Bouaziz",
    location: "Sfax",
    rating: 5,
    text: "Service impeccable du début à la fin. Le devis était clair, la livraison à temps et l'installation soignée. Une entreprise sérieuse.",
    project: "Porte d'entrée + Fenêtres",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ce Que Disent <span className="text-primary">Nos Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            La satisfaction de nos clients est notre meilleure publicité. 
            Découvrez leurs avis.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-bold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                </div>
              </div>

              {/* Project Tag */}
              <div className="mt-4">
                <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs font-medium">
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
