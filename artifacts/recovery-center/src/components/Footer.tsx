import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center md:items-start text-center md:text-start">
          
          {/* Logo & Desc */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                مركز
              </div>
              <span className="font-bold text-xl">
                {language === "ar" ? "مركز التعافي" : "Recovery Center"}
              </span>
            </div>
            <p className="text-background/70 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Empty Space for layout */}
          <div className="hidden md:block"></div>

          {/* Quick Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold text-lg">{t.contact.title}</h4>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                className="gap-2 bg-transparent text-background border-background/20 hover:bg-background/10 hover:text-background justify-start"
                onClick={() => window.location.href = `tel:${t.contact.phoneNumber.replace(/\s/g, '')}`}
                data-testid="button-footer-call"
              >
                <Phone className="w-4 h-4" />
                <span dir="ltr">{t.contact.phoneNumber}</span>
              </Button>
              <Button
                variant="outline"
                className="gap-2 bg-transparent text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/10 hover:text-[#25D366] justify-start"
                onClick={() => window.open(`https://wa.me/${t.contact.whatsappNumber}`, '_blank')}
                data-testid="button-footer-whatsapp"
              >
                <MessageCircle className="w-4 h-4" />
                <span dir="ltr">+{t.contact.whatsappNumber}</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm">
          <p>{t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
