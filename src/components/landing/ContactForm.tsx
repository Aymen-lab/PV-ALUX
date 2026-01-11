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
    
    // Validate required fields
    if (!formData.name || !formData.phone || !formData.gouvernorat) {
      toast.error("Veuillez remplir les champs obligatoires");
      return;
    }

    // Here you would normally send the form data to your backend
    console.log("Form submitted:", formData);
    toast.success("Demande envoyée ! Nous vous contacterons sous 24h.");
    
    // Reset form
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
    <section id="contact" className="py-20 md:py-28 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Info */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-semibold text-sm mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Demandez Votre <span className="text-primary">Devis Gratuit</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Remplissez le formulaire et recevez votre devis personnalisé 
              sous 24 heures. Sans engagement.
            </p>

            {/* Contact Info */}
            <div className="space-y-6 mb-8">
              <a href="tel:+21671234567" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Téléphone</div>
                  <div className="font-semibold text-foreground text-lg">+216 71 234 567</div>
                </div>
              </a>

              <a href="https://wa.me/21698765432" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-whatsapp/10 flex items-center justify-center group-hover:bg-whatsapp/20 transition-colors">
                  <MessageCircle className="w-6 h-6 text-whatsapp" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">WhatsApp</div>
                  <div className="font-semibold text-foreground text-lg">+216 98 765 432</div>
                </div>
              </a>

              <a href="mailto:contact@alupro.tn" className="flex items-center gap-4 group">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-semibold text-foreground text-lg">contact@alupro.tn</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Adresse</div>
                  <div className="font-semibold text-foreground">Zone Industrielle, Tunis</div>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button variant="whatsapp" size="lg" className="w-full sm:w-auto" asChild>
              <a href="https://wa.me/21698765432" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                Contacter via WhatsApp
              </a>
            </Button>
          </div>

          {/* Right Column - Form */}
          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-lg border border-border">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Nom complet *
                  </label>
                  <Input
                    type="text"
                    placeholder="Votre nom"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Téléphone *
                  </label>
                  <Input
                    type="tel"
                    placeholder="+216 XX XXX XXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  type="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Gouvernorat *
                  </label>
                  <Select
                    value={formData.gouvernorat}
                    onValueChange={(value) => setFormData({ ...formData, gouvernorat: value })}
                  >
                    <SelectTrigger>
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
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type de projet
                  </label>
                  <Select
                    value={formData.projectType}
                    onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                  >
                    <SelectTrigger>
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
                <label className="block text-sm font-medium text-foreground mb-2">
                  Votre message
                </label>
                <Textarea
                  placeholder="Décrivez votre projet..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <Button variant="hero" size="lg" type="submit" className="w-full">
                <Send className="w-5 h-5" />
                Envoyer ma demande
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être contacté par notre équipe.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
