import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ShieldCheck, Stethoscope, HeartHandshake, ArrowUpRight, Infinity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function WhyTreatment() {
  const { t } = useLanguage();

  const points = [
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      title: t.whyTreatment.points.safety,
    },
    {
      icon: <Stethoscope className="w-10 h-10 text-primary" />,
      title: t.whyTreatment.points.medical,
    },
    {
      icon: <HeartHandshake className="w-10 h-10 text-primary" />,
      title: t.whyTreatment.points.psychological,
    },
    {
      icon: <ArrowUpRight className="w-10 h-10 text-primary" />,
      title: t.whyTreatment.points.relapse,
    },
    {
      icon: <Infinity className="w-10 h-10 text-primary" />,
      title: t.whyTreatment.points.longTerm,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="why-treatment" className="py-20 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.whyTreatment.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-6"
        >
          {points.map((point, idx) => (
            <motion.div key={idx} variants={item} className="w-full sm:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)] xl:w-[calc(20%-1.5rem)] min-w-[200px]">
              <Card className="h-full border-none shadow-sm hover:shadow-md transition-all hover:-translate-y-1 bg-background text-center group">
                <CardContent className="p-8 flex flex-col items-center gap-4">
                  <div className="p-4 rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-colors">
                    {point.icon}
                  </div>
                  <h3 className="font-semibold text-lg text-foreground">
                    {point.title}
                  </h3>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
