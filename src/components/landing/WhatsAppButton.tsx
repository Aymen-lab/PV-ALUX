import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/21625765000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full bg-whatsapp text-white flex items-center justify-center shadow-lg hover:bg-whatsapp-hover transition-all duration-300 hover:scale-110 whatsapp-pulse"
      aria-label="Contacter via WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;
