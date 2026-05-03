import React from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutAddiction from "@/components/AboutAddiction";
import WhyTreatment from "@/components/WhyTreatment";
import RecoverySteps from "@/components/RecoverySteps";
import HowWeHelp from "@/components/HowWeHelp";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <AboutAddiction />
        <WhyTreatment />
        <RecoverySteps />
        <HowWeHelp />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
