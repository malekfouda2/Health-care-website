import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              {t.contact.subtext}
            </p>
          </motion.div>

          <Card className="border-none shadow-lg overflow-hidden bg-background">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Contact Info */}
                <div className="p-8 md:p-12 bg-primary text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-8">{t.contact.title}</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-foreground/10 rounded-full">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/80 text-sm">{t.contact.phoneLabel}</p>
                        <p className="font-semibold text-lg" dir="ltr">{t.contact.phoneNumber}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-foreground/10 rounded-full">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/80 text-sm">{t.contact.whatsappLabel}</p>
                        <p className="font-semibold text-lg" dir="ltr">+{t.contact.whatsappNumber}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary-foreground/10 rounded-full">
                        <MessageCircle className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/80 text-sm">{t.contact.whatsappLabel} (دولي)</p>
                        <p className="font-semibold text-lg" dir="ltr">+{t.contact.whatsappNumber2}</p>
                      </div>
                    </div>

                    <a
                      href="https://www.facebook.com/share/1BeVaJC5ko/?mibextid=wwXIfr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 hover:opacity-80 transition-opacity"
                    >
                      <div className="p-3 bg-primary-foreground/10 rounded-full">
                        <Facebook className="w-6 h-6" />
                      </div>
                      <div>
                        <p className="text-primary-foreground/80 text-sm">Facebook</p>
                        <p className="font-semibold text-lg">صفحتنا على فيسبوك</p>
                      </div>
                    </a>
                  </div>
                </div>

                {/* Actions */}
                <div className="p-8 md:p-12 flex flex-col justify-center items-center gap-6 bg-card">
                  <p className="text-center text-foreground/70 mb-2">
                    {t.hero.subtext}
                  </p>
                  
                  <Button
                    size="lg"
                    className="w-full max-w-sm h-14 text-lg gap-3 shadow-md hover:shadow-lg transition-all"
                    onClick={() => window.location.href = `tel:${t.contact.phoneNumber.replace(/\s/g, '')}`}
                    data-testid="button-contact-call"
                  >
                    <Phone className="w-5 h-5" />
                    {t.contact.callNow}
                  </Button>
                  
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full max-w-sm h-14 text-lg gap-3 bg-[#25D366] text-white border-transparent hover:bg-[#128C7E] hover:text-white shadow-md hover:shadow-lg transition-all"
                    onClick={() => window.open(`https://wa.me/${t.contact.whatsappNumber}`, '_blank')}
                    data-testid="button-contact-whatsapp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.contact.whatsappBtn}
                  </Button>

                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full max-w-sm h-14 text-lg gap-3 bg-[#25D366] text-white border-transparent hover:bg-[#128C7E] hover:text-white shadow-md hover:shadow-lg transition-all"
                    onClick={() => window.open(`https://wa.me/${t.contact.whatsappNumber2}`, '_blank')}
                    data-testid="button-contact-whatsapp2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.contact.whatsappBtn2}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
