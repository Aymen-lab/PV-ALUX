import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Products from "@/components/landing/Products";
import WhyUs from "@/components/landing/WhyUs";
import Zones from "@/components/landing/Zones";
import Testimonials from "@/components/landing/Testimonials";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Products />
        <WhyUs />
        <Zones />
        <Testimonials />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
