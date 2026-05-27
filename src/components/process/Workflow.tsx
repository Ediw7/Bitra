"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Briefing",
    desc: "Ceritakan visi dan kebutuhan bisnis Anda. Kami akan mendengarkan, menganalisis, dan memahami karakter brand Anda.",
    bg: "bg-background border border-foreground/10",
    textCol: "text-foreground",
    descCol: "text-gray",
    colSpan: "lg:col-span-5",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        <path d="M8 10h8"/>
        <path d="M8 14h4"/>
      </svg>
    )
  },
  {
    num: "02",
    title: "Design Process",
    desc: "Tim kreatif kami mulai meracik visual dan layout. Menciptakan desain yang tidak hanya indah, tapi juga relevan dengan target market Anda.",
    bg: "bg-[#FFCC00]",
    textCol: "text-black",
    descCol: "text-black/70",
    colSpan: "lg:col-span-7",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/>
      </svg>
    )
  },
  {
    num: "03",
    title: "Review & Revision",
    desc: "Kami presentasikan hasilnya kepada Anda. Ada yang kurang pas? Silakan minta revisi sampai desainnya benar-benar sempurna.",
    bg: "bg-foreground",
    textCol: "text-background",
    descCol: "text-background/70",
    colSpan: "lg:col-span-7",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
      </svg>
    )
  },
  {
    num: "04",
    title: "Final Delivery",
    desc: "Semua aset desain dikirim dalam kualitas tinggi dan siap posting. Tinggal upload ke Instagram dan lihat perbedaannya!",
    bg: "bg-bitra-green",
    textCol: "text-background",
    descCol: "text-background/90",
    colSpan: "lg:col-span-5",
    icon: (
      <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  },
];

export default function Workflow() {
  return (
    <section id="process" className="scroll-mt-24 py-20 sm:py-32 bg-surface relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <p className="text-bitra-green text-sm font-semibold tracking-widest uppercase mb-4 flex items-center gap-3">
              <span className="w-8 h-px bg-bitra-green" /> Cara Kerja
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1]">
              Proses yang <span className="font-serif italic font-light text-bitra-green">Simpel.</span>
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <p className="text-gray max-w-sm text-base sm:text-lg leading-relaxed">
              Dari diskusi awal hingga serah terima file, semua tahapan dirancang agar transparan, cepat, dan anti-ribet.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6">
          {steps.map((step, i) => (
            <motion.div 
              key={step.num} 
              initial={{ opacity: 0, scale: 0.95, y: 30 }} 
              whileInView={{ opacity: 1, scale: 1, y: 0 }} 
              viewport={{ once: true, margin: "-50px" }} 
              transition={{ duration: 0.6, delay: i * 0.15, type: "spring", stiffness: 70 }} 
              className={`group ${step.bg} ${step.colSpan} border-4 border-foreground shadow-[8px_8px_0px_#000] p-8 sm:p-10 lg:p-12 relative overflow-hidden hover:-translate-y-2 hover:shadow-[12px_12px_0px_#95C93D] transition-all duration-500`}
            >
              {/* Giant Background Number */}
              <div className={`absolute -bottom-10 -right-4 text-[10rem] sm:text-[14rem] font-serif italic font-black ${step.textCol} opacity-5 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-700 pointer-events-none select-none leading-none`}>
                {step.num}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                <div className={`w-20 h-20 rounded-none flex items-center justify-center border-4 border-current opacity-80 ${step.textCol} group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500`}>
                  {step.icon}
                </div>
                
                <div>
                  <h3 className={`text-2xl sm:text-3xl font-bold mb-4 ${step.textCol}`}>
                    <span className="font-serif italic mr-2">{step.num}.</span>
                    {step.title}
                  </h3>
                  <p className={`text-base sm:text-lg leading-relaxed ${step.descCol} max-w-md`}>
                    {step.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
