import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { UserCheck, Shield, ClipboardList, HandHeart, Clock, Lock } from "lucide-react";
import howWeHelpImg from "@/assets/images/how-we-help.png";

export default function HowWeHelp() {
  const { t } = useLanguage();

  const features = [
    { icon: <UserCheck className="w-6 h-6" />, title: t.howWeHelp.items.team },
    { icon: <Shield className="w-6 h-6" />, title: t.howWeHelp.items.environment },
    { icon: <ClipboardList className="w-6 h-6" />, title: t.howWeHelp.items.plans },
    { icon: <HandHeart className="w-6 h-6" />, title: t.howWeHelp.items.therapy },
    { icon: <Clock className="w-6 h-6" />, title: t.howWeHelp.items.support },
    { icon: <Lock className="w-6 h-6" />, title: t.howWeHelp.items.confidentiality },
  ];

  return (
    <section id="how-we-help" className="py-20 md:py-32 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-primary-foreground">
              {t.howWeHelp.title}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-primary-foreground/10 p-4 rounded-xl border border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/20 transition-colors">
                  <div className="p-3 bg-primary-foreground text-primary rounded-lg">
                    {feature.icon}
                  </div>
                  <span className="font-medium text-lg">{feature.title}</span>
                </div>
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
            <div className="absolute inset-0 bg-primary-foreground/20 rounded-3xl transform -translate-x-4 translate-y-4"></div>
            <img
              src={howWeHelpImg}
              alt={t.howWeHelp.title}
              className="rounded-3xl shadow-2xl w-full h-auto object-cover aspect-[4/3] relative z-10 border-4 border-primary-foreground/10"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
