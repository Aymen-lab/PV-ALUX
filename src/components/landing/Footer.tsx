import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-xl">A</span>
              </div>
              <div>
                <span className="font-bold text-lg">AluPro</span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-4">
              Spécialiste en menuiserie aluminium depuis plus de 15 ans. 
              Qualité, fiabilité et satisfaction client.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#produits" className="hover:text-accent transition-colors">Nos Produits</a></li>
              <li><a href="#avantages" className="hover:text-accent transition-colors">Pourquoi Nous</a></li>
              <li><a href="#zones" className="hover:text-accent transition-colors">Zones d'Intervention</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold mb-4">Nos Produits</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#contact" className="hover:text-accent transition-colors">Fenêtres Aluminium</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Portes d'Entrée</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Baies Coulissantes</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Garde-Corps</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+21671234567" className="hover:text-accent transition-colors">
                  +216 71 234 567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contact@alupro.tn" className="hover:text-accent transition-colors">
                  contact@alupro.tn
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>Zone Industrielle, Tunis, Tunisie</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-primary-foreground/60">
          <p>© {new Date().getFullYear()} AluPro Menuiserie Aluminium. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
