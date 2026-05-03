import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export default function RecoverySteps() {
  const { t, dir } = useLanguage();

  const steps = t.steps.items;

  return (
    <section id="steps" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.steps.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline Line */}
          <div className={`absolute top-0 bottom-0 w-1 bg-border rounded-full ${dir === 'rtl' ? 'right-6 md:right-1/2 md:translate-x-1/2' : 'left-6 md:left-1/2 md:-translate-x-1/2'}`}></div>

          <div className="space-y-8 md:space-y-12 relative z-10">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`hidden md:block w-1/2 ${isEven ? 'text-end pr-8' : 'text-start pl-8'}`}>
                    {/* Empty space for alternating layout */}
                  </div>

                  {/* Step Number Circle */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center shadow-lg border-4 border-background absolute md:relative ${dir === 'rtl' ? 'right-0 md:right-auto' : 'left-0 md:left-auto'} top-0 md:top-auto`}>
                    {index + 1}
                  </div>

                  <div className={`w-full md:w-1/2 ${dir === 'rtl' ? 'pr-16 md:pr-0' : 'pl-16 md:pl-0'} ${isEven ? 'md:pl-8' : 'md:pr-8'}`}>
                    <div className="bg-card border border-border p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-foreground">
                        {step}
                      </h3>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
