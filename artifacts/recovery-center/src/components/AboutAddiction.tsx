import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { HeartPulse, Brain, Users } from "lucide-react";
import aboutImg from "@/assets/images/about.png";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutAddiction() {
  const { t } = useLanguage();

  const cards = [
    {
      icon: <HeartPulse className="w-8 h-8 text-primary" />,
      title: t.about.cards.physical,
    },
    {
      icon: <Brain className="w-8 h-8 text-primary" />,
      title: t.about.cards.mental,
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: t.about.cards.relationships,
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              {t.about.title}
            </h2>
            <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
              <p>{t.about.body1}</p>
              <p>{t.about.body2}</p>
              <p className="font-medium text-foreground/90">{t.about.body3}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {cards.map((card, idx) => (
                <Card key={idx} className="bg-secondary/30 border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                    <div className="p-3 bg-background rounded-full shadow-sm">
                      {card.icon}
                    </div>
                    <span className="font-medium text-foreground">{card.title}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-3xl transform translate-x-4 translate-y-4 -z-10"></div>
            <img
              src={aboutImg}
              alt={t.about.title}
              className="rounded-3xl shadow-xl w-full h-auto object-cover aspect-[4/3]"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
