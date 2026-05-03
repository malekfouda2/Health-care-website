import React, { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import img1 from "@assets/WhatsApp_Image_2026-05-02_at_22.34.55_1777837019448.jpeg";
import img2 from "@assets/WhatsApp_Image_2026-05-02_at_22.34.57_1777837019450.jpeg";
import img3 from "@assets/WhatsApp_Image_2026-05-02_at_22.34.58_1777837019451.jpeg";
import img4 from "@assets/WhatsApp_Image_2026-05-02_at_22.34.59_(1)_1777837019452.jpeg";
import img5 from "@assets/WhatsApp_Image_2026-05-02_at_22.34.59_1777837019453.jpeg";
import img6 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.00_(1)_1777837019454.jpeg";
import img7 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.00_(2)_1777837019454.jpeg";
import img8 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.00_(3)_1777837019455.jpeg";
import img9 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.00_1777837019455.jpeg";
import img10 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.00_(4)_1777837019456.jpeg";
import img11 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.02_1777837019457.jpeg";
import img12 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.05_1777837019457.jpeg";
import img13 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.08_1777837019458.jpeg";
import img14 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.08_(1)_1777837019458.jpeg";
import img15 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.07_1777837019459.jpeg";
import img16 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.06_1777837019460.jpeg";
import img17 from "@assets/WhatsApp_Image_2026-05-02_at_22.35.06_(1)_1777837019460.jpeg";

const photos = [
  { src: img7,  captionAr: "المبنى من الخارج",       captionEn: "Center Building" },
  { src: img16, captionAr: "منطقة الاستقبال",         captionEn: "Reception Area" },
  { src: img15, captionAr: "مكتب الاستقبال",          captionEn: "Front Desk" },
  { src: img13, captionAr: "مكتب الإدارة",             captionEn: "Management Office" },
  { src: img2,  captionAr: "غرفة الانتظار",            captionEn: "Waiting Room" },
  { src: img8,  captionAr: "قاعة الجلسات الجماعية",   captionEn: "Group Session Hall" },
  { src: img10, captionAr: "منطقة الترفيه",            captionEn: "Recreation Area" },
  { src: img11, captionAr: "قاعة الدعم النفسي",        captionEn: "Counseling Room" },
  { src: img14, captionAr: "غرفة الراحة",              captionEn: "Rest Room" },
  { src: img17, captionAr: "غرفة التلفزيون",           captionEn: "TV Lounge" },
  { src: img3,  captionAr: "غرفة المرضى",              captionEn: "Patient Room" },
  { src: img4,  captionAr: "غرفة مزدوجة",              captionEn: "Double Room" },
  { src: img6,  captionAr: "غرفة مزدوجة (٢)",         captionEn: "Double Room (2)" },
  { src: img12, captionAr: "غرفة مع خزانة",            captionEn: "Room with Lockers" },
  { src: img5,  captionAr: "الغرفة الفردية",           captionEn: "Private Room" },
  { src: img9,  captionAr: "غرفة فردية فاخرة",         captionEn: "Premium Private Room" },
  { src: img1,  captionAr: "الحمام",                   captionEn: "Bathroom" },
];

export default function Gallery() {
  const { t, language } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
  const next = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % photos.length));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") language === "ar" ? next() : prev();
    if (e.key === "ArrowRight") language === "ar" ? prev() : next();
    if (e.key === "Escape") closeLightbox();
  };

  return (
    <section id="gallery" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t.gallery.title}
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: (index % 8) * 0.06 }}
              className="relative group overflow-hidden rounded-xl aspect-[4/3] cursor-pointer shadow-sm hover:shadow-lg transition-shadow duration-300"
              onClick={() => openLightbox(index)}
              data-testid={`gallery-image-${index}`}
            >
              <img
                src={photo.src}
                alt={language === "ar" ? photo.captionAr : photo.captionEn}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                <span className="text-white text-sm font-medium drop-shadow-md">
                  {language === "ar" ? photo.captionAr : photo.captionEn}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            data-testid="gallery-lightbox"
          >
            <button
              className="absolute top-4 end-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
              onClick={closeLightbox}
              data-testid="button-lightbox-close"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              className="absolute start-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              onClick={(e) => { e.stopPropagation(); language === "ar" ? next() : prev(); }}
              data-testid="button-lightbox-prev"
            >
              {language === "ar" ? <ChevronRight className="w-6 h-6" /> : <ChevronLeft className="w-6 h-6" />}
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[85vh] flex flex-col items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[lightboxIndex].src}
                alt={language === "ar" ? photos[lightboxIndex].captionAr : photos[lightboxIndex].captionEn}
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />
              <p className="text-white/80 text-sm">
                {language === "ar" ? photos[lightboxIndex].captionAr : photos[lightboxIndex].captionEn}
                <span className="text-white/40 mx-2">·</span>
                <span className="text-white/40">{lightboxIndex + 1} / {photos.length}</span>
              </p>
            </motion.div>

            <button
              className="absolute end-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors"
              onClick={(e) => { e.stopPropagation(); language === "ar" ? prev() : next(); }}
              data-testid="button-lightbox-next"
            >
              {language === "ar" ? <ChevronLeft className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
