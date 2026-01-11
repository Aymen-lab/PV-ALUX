import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 border-2 border-accent flex items-center justify-center">
                <span className="font-display text-2xl text-accent">A</span>
              </div>
              <div>
                <span className="font-display text-xl">AluPro</span>
              </div>
            </div>
            <p className="text-white/50 text-sm font-light leading-relaxed mb-6">
              L'excellence en menuiserie aluminium depuis plus de 15 ans. 
              Qualité, savoir-faire et satisfaction client.
            </p>
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#produits" className="text-white/60 hover:text-accent transition-colors">Nos Produits</a></li>
              <li><a href="#avantages" className="text-white/60 hover:text-accent transition-colors">Notre Excellence</a></li>
              <li><a href="#zones" className="text-white/60 hover:text-accent transition-colors">Zones d'Intervention</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Nos Créations</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#contact" className="text-white/60 hover:text-accent transition-colors">Fenêtres Aluminium</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent transition-colors">Portes d'Entrée</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent transition-colors">Baies Coulissantes</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-accent transition-colors">Garde-Corps</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-accent mb-6">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a href="tel:+21671234567" className="text-white/60 hover:text-accent transition-colors">
                  +216 71 234 567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:contact@alupro.tn" className="text-white/60 hover:text-accent transition-colors">
                  contact@alupro.tn
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span className="text-white/60">Zone Industrielle, Tunis, Tunisie</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <p className="text-center text-sm text-white/40">
            © {new Date().getFullYear()} AluPro Menuiserie d'Excellence. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
