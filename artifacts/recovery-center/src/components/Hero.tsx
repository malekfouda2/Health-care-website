import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/images/hero-bg.png";

export default function Hero() {
  const { t, dir } = useLanguage();

  return (
    <section id="top" className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Serene Recovery Center"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" dir={dir} />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              {t.nav.contactBtn}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              {t.hero.headline}
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed max-w-2xl">
              {t.hero.subtext}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-base gap-2 h-14 px-8 shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.location.href = `tel:${t.contact.phoneNumber.replace(/\s/g, '')}`}
                data-testid="button-hero-call"
              >
                <Phone className="w-5 h-5" />
                {t.hero.callNow}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base gap-2 h-14 px-8 bg-[#25D366] text-white border-transparent hover:bg-[#128C7E] hover:text-white shadow-lg hover:shadow-xl transition-all"
                onClick={() => window.open(`https://wa.me/${t.contact.whatsappNumber}`, '_blank')}
                data-testid="button-hero-whatsapp"
              >
                <MessageCircle className="w-5 h-5" />
                {t.hero.whatsapp}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
