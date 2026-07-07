import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImg from "@/assets/images/logo-transparent.png";

export default function Footer() {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-center md:items-start text-center md:text-start">
          
          {/* Logo & Desc */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img
              src={logoImg}
              alt={language === "ar" ? "لا للمخدرات" : "No to Drugs"}
              className="h-40 w-auto object-contain"
            />
            <p className="text-background/70 max-w-sm leading-relaxed">
              {t.footer.description}
            </p>
            {/* Social Links */}
            <a
              href="https://www.facebook.com/share/1BeVaJC5ko/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-background/60 hover:text-[#1877F2] transition-colors mt-1"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Facebook</span>
            </a>
          </div>

          {/* Empty Space for layout */}
          <div className="hidden md:block"></div>

          {/* Quick Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h4 className="font-semibold text-lg">{t.contact.title}</h4>
            <div className="flex flex-col gap-3 w-full sm:w-auto">
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
              <Button
                variant="outline"
                className="gap-2 bg-transparent text-[#25D366] border-[#25D366]/30 hover:bg-[#25D366]/10 hover:text-[#25D366] justify-start"
                onClick={() => window.open(`https://wa.me/${t.contact.whatsappNumber2}`, '_blank')}
                data-testid="button-footer-whatsapp2"
              >
                <MessageCircle className="w-4 h-4" />
                <span dir="ltr">+{t.contact.whatsappNumber2}</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-background/10 text-center text-background/50 text-sm space-y-2">
          <p>{t.footer.copyright}</p>
          <p>
            Powered by{" "}
            <a
              href="https://malekfouda.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-background/70 hover:text-background underline underline-offset-2 transition-colors"
            >
              Malek Fouda
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
