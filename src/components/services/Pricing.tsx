"use client";

import { motion } from "framer-motion";
import { pricingPlans } from "@/data/pricing";
import { getWhatsAppLink } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Editorial Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 lg:mb-24">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-bitra-green text-sm font-bold tracking-[0.2em] uppercase mb-4 flex items-center gap-3">
              <span className="w-12 h-0.5 bg-bitra-green" /> Layanan Kami
            </p>
            <h2 className="text-5xl sm:text-7xl lg:text-[6rem] font-bold text-foreground tracking-tighter uppercase leading-[0.9]">
              Pilih Paket <br />
              <span className="font-serif italic font-light text-bitra-green lowercase">terbaik.</span>
            </h2>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-md">
            <p className="text-gray text-lg leading-relaxed font-medium">
              Semua paket dirancang secara strategis. Transparan tanpa biaya tersembunyi.
            </p>
          </motion.div>
        </div>

        {/* Invoice / Ticket Style Pricing Grid (Out of the Box but Clear) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-start">
          {pricingPlans.map((plan, i) => (
            <motion.div 
              key={plan.id} 
              initial={{ opacity: 0, y: 40 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: i * 0.15 }} 
              className={`relative flex flex-col bg-background border-4 border-foreground transition-all duration-500 hover:-translate-y-2 group
                ${plan.popular ? "lg:scale-105 shadow-[12px_12px_0px_#95C93D] z-10" : "shadow-[8px_8px_0px_#000]"}
              `}
            >
              {/* Ticket Top Hole Punches (Decorative) */}
              <div className="absolute -top-3 w-full flex justify-around px-4">
                {[1,2,3,4,5].map(n => <div key={n} className="w-4 h-4 rounded-full bg-background border-b-4 border-foreground" />)}
              </div>

              {/* Top Bar of the ticket */}
              <div className={`border-b-4 border-foreground p-8 pt-10 flex justify-between items-start ${plan.popular ? "bg-foreground text-background" : "bg-surface"}`}>
                 <div className="pr-2">
                   <h3 className="text-2xl lg:text-3xl font-bold uppercase tracking-widest leading-none">{plan.name}</h3>
                   <p className="text-xs uppercase font-mono mt-3 opacity-80 leading-relaxed">[ {plan.description} ]</p>
                 </div>
                 {plan.popular && (
                   <span className="bg-bitra-green text-background px-3 py-1 text-[10px] sm:text-xs font-bold uppercase tracking-widest border-2 border-background shrink-0 rotate-12">
                     Popular
                   </span>
                 )}
              </div>

              {/* Price Area */}
              <div className="p-8 border-b-4 border-dashed border-foreground/30 bg-background flex-1">
                 <div className="flex items-start gap-1 mb-8">
                   <span className="text-sm font-bold mt-2">Rp</span>
                   <span className="text-5xl sm:text-6xl font-serif italic font-medium">{plan.price}</span>
                   <span className="text-sm self-end mb-2 font-mono uppercase opacity-60">/{plan.period}</span>
                 </div>
                 
                 <p className="text-sm font-bold uppercase tracking-widest mb-4 bg-foreground text-background inline-block px-3 py-1">INCLUDES:</p>
                 <ul className="space-y-3 font-mono text-xs sm:text-sm">
                    {plan.features.map(f => (
                       <li key={f} className="flex items-start gap-3">
                         <span className={plan.popular ? "text-bitra-green font-bold" : "text-foreground font-bold"}>{'->'}</span>
                         <span className="opacity-90">{f}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* Action Button & Barcode */}
              <div className="p-8 bg-surface flex flex-col justify-between">
                 <a href={getWhatsAppLink(plan.waMessage)} target="_blank" rel="noopener noreferrer" className={`w-full block text-center py-5 text-sm font-bold uppercase tracking-[0.2em] border-4 transition-colors duration-300 ${plan.popular ? "bg-bitra-green border-bitra-green text-background hover:bg-background hover:text-bitra-green" : "bg-background border-foreground text-foreground hover:bg-foreground hover:text-background"}`}>
                   Pilih {plan.name}
                 </a>
                 
                 {/* Decorative Barcode */}
                 <div className="mt-8 flex justify-center items-end gap-1 h-12 opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                    {[2,1,4,1,3,1,2,1,5,1,2,3,1,4,1,2,1,3,2].map((w, idx) => (
                      <div key={idx} className="bg-foreground" style={{ width: `${w * 2}px`, height: idx % 3 === 0 ? '100%' : '80%' }}></div>
                    ))}
                 </div>
                 <div className="text-center font-mono text-[10px] mt-2 opacity-40">BITRA-{plan.name.toUpperCase()}-2024</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
