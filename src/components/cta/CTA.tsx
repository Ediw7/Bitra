"use client";

import { motion } from "framer-motion";
import { getWhatsAppLink } from "@/lib/constants";

export default function CTA() {
  return (
    <section className="relative py-32 sm:py-40 bg-foreground text-background overflow-hidden border-t-4 border-background">
      
      {/* Giant Marquee Background via Framer Motion */}
      <motion.div 
        animate={{ x: [0, -2000] }} 
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
        className="absolute top-1/2 -translate-y-1/2 left-0 flex whitespace-nowrap opacity-[0.03] pointer-events-none select-none"
      >
        <h2 className="text-[15rem] sm:text-[20rem] font-bold uppercase tracking-tighter leading-none">
          MARI BERKOLABORASI • LET'S WORK TOGETHER • MARI BERKOLABORASI • LET'S WORK TOGETHER • 
        </h2>
      </motion.div>

      <div className="max-w-5xl mx-auto px-5 relative z-10 text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block border border-background/30 px-6 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em] mb-10 text-bitra-green">
            Langkah Selanjutnya
          </div>
          
          <h2 className="text-4xl sm:text-6xl lg:text-[6rem] font-bold uppercase tracking-tighter leading-[0.9] mb-10">
            Siap Bangun Instagram <br className="hidden sm:block" />
            <span className="font-serif italic font-light lowercase text-bitra-green">Lebih Profesional?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-background/80 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
            Diskusikan kebutuhan brand Anda bersama BITRA.
          </p>

          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={getWhatsAppLink("Halo BITRA, saya tertarik untuk diskusi mengenai desain Instagram bisnis saya.")} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center gap-4 bg-bitra-green text-foreground hover:bg-background hover:text-foreground px-8 sm:px-12 py-5 sm:py-6 rounded-full text-sm sm:text-base font-bold uppercase tracking-[0.2em] transition-colors duration-300 shadow-[8px_8px_0px_rgba(255,255,255,0.2)] hover:shadow-none"
          >
            Chat WhatsApp
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
