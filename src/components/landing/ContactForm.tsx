import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const gouvernorats = [
  "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte",
  "Béja", "Jendouba", "Le Kef", "Siliana", "Sousse", "Monastir", "Mahdia",
  "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid", "Gabès", "Médenine",
  "Tataouine", "Gafsa", "Tozeur", "Kébili"
];

const projectTypes = [
  "Fenêtres Aluminium",
  "Portes d'Entrée",
  "Baies Coulissantes",
  "Vérandas",
  "Garde-Corps",
  "Projet Complet",
  "Autre"
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    gouvernorat: "",
    projectType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.gouvernorat) {
      toast.error("Veuillez remplir les champs obligatoires");
      return;
    }

    console.log("Form submitted:", formData);
    toast.success("Demande envoyée avec succès ! Nous vous recontactons sous 24h.");
    
    setFormData({
      name: "",
      phone: "",
      email: "",
      gouvernorat: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-accent" />
              <span className="text-accent text-sm tracking-[0.2em] uppercase font-medium">
                Contact
              </span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Parlons de <span className="text-gradient-gold">Votre Projet</span>
            </h2>
            <p className="text-muted-foreground text-lg font-light mb-10 leading-relaxed">
              Remplissez le formulaire pour recevoir votre devis personnalisé 
              sous 24 heures. Consultation gratuite et sans engagement.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-10">
              <a href="tel:+21671234567" className="flex items-center gap-5 group">
                <div className="w-16 h-16 border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:border-charcoal transition-all duration-300">
                  <Phone className="w-6 h-6 text-charcoal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Téléphone</div>
                  <div className="font-display text-xl text-foreground">+216 71 234 567</div>
                </div>
              </a>

              <a href="https://wa.me/21698765432" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 group">
                <div className="w-16 h-16 border border-whatsapp/30 flex items-center justify-center group-hover:bg-whatsapp group-hover:border-whatsapp transition-all duration-300">
                  <MessageCircle className="w-6 h-6 text-whatsapp group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">WhatsApp</div>
                  <div className="font-display text-xl text-foreground">+216 98 765 432</div>
                </div>
              </a>

              <a href="mailto:contact@alupro.tn" className="flex items-center gap-5 group">
                <div className="w-16 h-16 border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:border-charcoal transition-all duration-300">
                  <Mail className="w-6 h-6 text-charcoal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                  <div className="font-display text-xl text-foreground">contact@alupro.tn</div>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=Zone+Industrielle,+Tunis,+Tunisie" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-5 group"
              >
                <div className="w-16 h-16 border border-charcoal/20 flex items-center justify-center group-hover:bg-charcoal group-hover:border-charcoal transition-all duration-300">
                  <MapPin className="w-6 h-6 text-charcoal group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Showroom</div>
                  <div className="font-display text-xl text-foreground group-hover:text-accent transition-colors">Zone Industrielle, Tunis</div>
                  <div className="text-xs text-accent mt-1 opacity-0 group-hover:opacity-100 transition-opacity">Voir sur Google Maps →</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white p-8 md:p-10 shadow-elegant border border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                    Nom complet *
                  </label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="border-border focus:border-accent rounded-none h-12"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                    Téléphone *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-border focus:border-accent rounded-none h-12"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="border-border focus:border-accent rounded-none h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                    Gouvernorat *
                  </label>
                  <Select
                    value={formData.gouvernorat}
                    onValueChange={(value) => setFormData({ ...formData, gouvernorat: value })}
                  >
                    <SelectTrigger className="border-border focus:border-accent rounded-none h-12">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {gouvernorats.map((gov) => (
                        <SelectItem key={gov} value={gov}>
                          {gov}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                    Type de projet
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger className="border-border focus:border-accent rounded-none h-12">
                      <SelectValue placeholder="Sélectionner" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-foreground uppercase tracking-wider mb-2">
                  Votre projet
                </label>
                <Textarea
                  placeholder="Décrivez-nous votre projet..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="border-border focus:border-accent rounded-none resize-none"
                />
              </div>

              <Button variant="gold" size="lg" type="submit" className="w-full">
                <Send className="w-5 h-5" />
                Envoyer ma demande
              </Button>

              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
