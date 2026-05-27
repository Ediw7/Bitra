"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioItems, categories } from "@/data/portfolio";

export default function Portfolio() {
  const [active, setActive] = useState("Semua");
  const [selected, setSelected] = useState<number | null>(null);

  const filtered = active === "Semua" ? portfolioItems : portfolioItems.filter((p) => p.category === active);
  const selectedItem = portfolioItems.find((p) => p.id === selected);

  return (
    <section id="portfolio" className="scroll-mt-24 py-24 sm:py-32 bg-surface relative">
      <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Creative Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-bitra-green text-sm font-bold tracking-[0.2em] uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-0.5 bg-bitra-green" /> Portfolio Kami
            </p>
            <h2 className="text-6xl sm:text-7xl lg:text-[8rem] font-bold text-foreground tracking-tighter uppercase leading-[0.85]">
              Showcase <br />
              <span className="font-serif italic font-light text-bitra-green lowercase">kreatif.</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-md">
            <p className="text-gray text-lg leading-relaxed font-medium">
              Eksplorasi visual dan desain feed Instagram yang telah kami kerjakan. Bukti nyata bahwa estetika yang kuat mampu meningkatkan konversi.
            </p>
          </motion.div>
        </div>

        {/* Clean Pill Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-12">
          {categories.map((cat) => (
            <button 
              key={cat} 
              onClick={() => setActive(cat)} 
              className={`border-4 px-6 sm:px-8 py-3 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:-translate-y-1 hover:-translate-x-1 ${
                active === cat 
                  ? "border-foreground bg-bitra-green text-foreground shadow-[6px_6px_0px_#000]" 
                  : "border-foreground bg-surface text-foreground shadow-[2px_2px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_#000]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Interactive Expandable Accordion Gallery (Out of the box UX) */}
        <div className="flex flex-col lg:flex-row pb-20 lg:pb-0 lg:h-[650px] w-full gap-4 lg:gap-4">
          <AnimatePresence>
            {filtered.map((item) => (
              <motion.div 
                layout
                key={item.id}
                onClick={() => setSelected(item.id)}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer shadow-2xl border border-foreground/10 bg-foreground/5 flex flex-col justify-end sticky top-32 h-[70vh] w-full lg:relative lg:h-auto lg:transition-[flex] lg:duration-[800ms] lg:ease-[cubic-bezier(0.25,1,0.5,1)] lg:flex-1 lg:hover:flex-[4] lg:w-auto`}
              >
                 {/* Background Image */}
                 <img src={item.image} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-linear group-hover:scale-110" loading="lazy" />
                 
                 {/* Gradient Overlay for Readability */}
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/90 transition-opacity duration-500 opacity-60 group-hover:opacity-90" />
                 
                 {/* Vertical Text (Visible when NOT hovered on Desktop) */}
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 lg:opacity-100 lg:group-hover:opacity-0 transition-opacity duration-300 pointer-events-none">
                   <h3 className="text-white font-bold tracking-[0.2em] uppercase whitespace-nowrap -rotate-90 text-2xl drop-shadow-md">
                     {item.title}
                   </h3>
                 </div>

                 {/* Expanded Content (Visible when hovered, always visible on mobile) */}
                 <div className="relative z-10 p-6 lg:p-10 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 delay-100 lg:translate-y-8 lg:group-hover:translate-y-0 transform">
                    <div className="inline-block bg-bitra-green text-background px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 shadow-lg shadow-bitra-green/30">
                      {item.category}
                    </div>
                    <h3 className="text-3xl lg:text-5xl font-bold text-white leading-none tracking-tight mb-3 drop-shadow-lg">
                      {item.title}
                    </h3>
                    <p className="text-white/80 text-sm lg:text-base max-w-sm line-clamp-2 drop-shadow-md">
                      {item.description}
                    </p>
                    
                    <div className="mt-6 flex items-center gap-3 text-white font-bold uppercase tracking-widest text-sm transition-colors group-hover:text-bitra-green">
                      <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-bitra-green group-hover:border-bitra-green group-hover:text-background transition-all duration-500">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                      <span className="hidden sm:block">Lihat Full Desain</span>
                    </div>
                 </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Modern Lightbox Modal */}
      <AnimatePresence>
        {selected && selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-background/95 backdrop-blur-md p-4 sm:p-8" onClick={() => setSelected(null)}>
            <motion.div initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }} className="relative max-w-5xl w-full bg-surface border border-foreground/10 rounded-3xl overflow-hidden flex flex-col lg:flex-row max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
              
              {/* Image Side */}
              <div className="w-full lg:w-2/3 h-[50vh] lg:h-auto relative overflow-hidden bg-foreground/5">
                <img src={selectedItem.image} alt={selectedItem.title} className="w-full h-full object-contain p-4" />
              </div>
              
              {/* Info Side */}
              <div className="w-full lg:w-1/3 p-8 lg:p-12 flex flex-col justify-center bg-background">
                <div className="mb-6">
                  <span className="text-bitra-green text-sm font-bold uppercase tracking-[0.2em]">{selectedItem.category}</span>
                  <h3 className="text-4xl font-bold text-foreground mt-2 uppercase tracking-tighter">{selectedItem.title}</h3>
                </div>
                <p className="text-gray text-lg leading-relaxed mb-10">{selectedItem.description}</p>
                
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-foreground text-background font-bold tracking-widest text-sm uppercase px-8 py-4 rounded-full hover:bg-bitra-green hover:scale-105 transition-all duration-300 w-full sm:w-auto self-start shadow-xl">
                  Pesan Desain Ini
                </a>
              </div>

              {/* Close Button */}
              <button onClick={() => setSelected(null)} className="absolute top-6 right-6 w-12 h-12 rounded-full border border-foreground/10 bg-background text-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors z-10 shadow-lg">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
              </button>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
