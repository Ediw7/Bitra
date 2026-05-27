"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";
import Image from "next/image";

export default function Hero() {

  // Create a 4x4 grid of image fragments and solid blocks
  const renderGrid = () => {
    return Array.from({ length: 16 }).map((_, i) => {
      const row = Math.floor(i / 4);
      const col = i % 4;

      // Define layout logic for tiles based on the reference image vibe
      const isSolid = i === 0 || i === 8 || i === 15; // Solid green blocks
      const isEmpty = i === 4 || i === 12; // Empty space (white/transparent)

      if (isEmpty) {
        return <div key={i} className="bg-transparent" />;
      }

      if (isSolid) {
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="bg-bitra-green"
          />
        );
      }

      // Image fragment tile
      return (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
          className="w-full h-full relative overflow-hidden group"
        >
          <div
            className="absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-110"
            style={{
              backgroundImage: "url('/portfolio/fashion.png')",
              backgroundSize: "400% 400%", // 4x4 grid means 400% size
              backgroundPosition: `${(col / 3) * 100}% ${(row / 3) * 100}%`,
            }}
          />
        </motion.div>
      );
    });
  };

  return (
    <section id="hero" className="relative bg-background overflow-hidden min-h-screen flex items-center pt-28 pb-16 lg:pt-30 lg:pb-20">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

        {/* Left: Fragmented Image Grid (Visual) */}
        <div className="w-full lg:w-5/12 flex justify-center lg:justify-start order-2 lg:order-1 mt-10 lg:mt-0 relative">
          <div className="grid grid-cols-4 gap-1 sm:gap-2 w-[280px] sm:w-[400px] lg:w-[450px] aspect-square">
            {renderGrid()}
          </div>

          {/* Bottom Left Offset Square Decoration (Brutalist Style) */}
          <div className="absolute -bottom-10 -left-6 sm:-bottom-16 sm:-left-12 w-20 h-20 sm:w-28 sm:h-28 hidden md:flex items-center justify-center border-4 border-foreground bg-background shadow-[12px_12px_0px_#FFCC00] z-20 group">
            <Image
              src="/logo/bitraLogo3.png"
              alt="Bitra Icon"
              width={64}
              height={64}
              className="w-10 h-10 sm:w-14 sm:h-14 object-contain group-hover:-rotate-12 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Right: Clean Editorial Typography */}
        <div className="w-full lg:w-7/12 flex flex-col order-1 lg:order-2">

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-7xl lg:text-[6rem] font-bold text-foreground leading-[0.95] tracking-tighter uppercase mb-10"
          >
            Desain <br />
            Instagram
          </motion.h1>

          {/* Sub-content Split Layout */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-foreground leading-snug">
                Tampilan lebih rapi, profesional, dan konsisten setiap hari.
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex-1"
            >
              <p className="text-sm sm:text-base text-gray leading-relaxed">
                BITRA membantu UMKM membangun identitas visual Instagram yang kuat dan siap jualan. Dari pembuatan desain feed hingga perencanaan konten yang terarah.
              </p>
            </motion.div>
          </div>

          {/* Solid Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-bitra-green text-foreground border-4 border-foreground font-bold tracking-[0.2em] text-sm uppercase px-10 py-5 transition-all duration-300 shadow-[8px_8px_0px_#000] hover:shadow-none hover:translate-x-2 hover:translate-y-2 hover:bg-foreground hover:text-background"
            >
              Konsultasi Sekarang
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
