"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqItems } from "@/data/faq";

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <section id="faq" className="scroll-mt-24 py-24 sm:py-32 bg-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Massive Editorial Header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-16 lg:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="text-bitra-green text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-12 h-0.5 bg-bitra-green" /> F.A.Q
            </p>
            <h2 className="text-5xl sm:text-7xl lg:text-[7rem] font-bold text-foreground tracking-tighter uppercase leading-[0.85]">
              Tanya <br />
              <span className="font-serif italic font-light text-bitra-green lowercase">jawab.</span>
            </h2>
          </div>
          <p className="text-gray text-lg font-medium max-w-sm pb-4">
            Masih ragu? Temukan jawaban untuk pertanyaan yang paling sering ditanyakan oleh klien kami.
          </p>
        </motion.div>

        {/* Oversized Brutalist Accordion */}
        <div className="flex flex-col border-t-4 border-foreground">
          {faqItems.map((item, i) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-b-4 border-foreground group"
            >
              <button 
                onClick={() => setOpenId(openId === item.id ? null : item.id)} 
                className="w-full text-left py-8 sm:py-10 flex justify-between items-center transition-all duration-500 hover:pl-4 sm:hover:pl-8"
              >
                <h3 className={`text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tighter transition-colors duration-300 pr-8 ${openId === item.id ? "text-bitra-green" : "text-foreground group-hover:text-foreground/70"}`}>
                  {item.question}
                </h3>
                
                {/* Plus/Minus Indicator */}
                <div className={`relative w-12 h-12 rounded-full border-4 flex items-center justify-center shrink-0 transition-all duration-300 ${openId === item.id ? "border-bitra-green bg-bitra-green text-background" : "border-foreground text-foreground group-hover:border-foreground/50 group-hover:text-foreground/50"}`}>
                  <span className="absolute text-3xl font-light mb-1 leading-none">{openId === item.id ? '-' : '+'}</span>
                </div>
              </button>
              
              <AnimatePresence>
                {openId === item.id && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 sm:pb-14 pl-0 sm:pl-8">
                      <div className="w-16 h-1 bg-bitra-green mb-6" />
                      <p className="text-xl sm:text-2xl font-serif text-gray-light leading-relaxed max-w-4xl">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
