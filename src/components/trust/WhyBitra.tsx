"use client";

import { motion } from "framer-motion";

const reasons = [
  {
    title: "Eksekusi Cepat",
    desc: "Waktu Anda sangat berharga. Kami pastikan pengerjaan desain cepat, tepat waktu, dan selesai dalam hitungan hari. Tidak perlu menunggu lama.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },
  {
    title: "Kualitas Konsisten",
    desc: "Feed yang berantakan bikin brand terlihat amatir. Kami menjaga harmoni visual dan warna agar Instagram Anda selalu tampil profesional.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
      </svg>
    )
  },
  {
    title: "100% Praktis",
    desc: "Fokus urus bisnis Anda, biarkan kami urus desainnya. Order semudah chat via WhatsApp, kirim materi, dan tim kami langsung mengeksekusi.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    )
  }
];

export default function WhyBitra() {
  return (
    <section className="py-20 bg-surface relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Simple & Clean Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-bitra-green text-sm font-semibold tracking-widest uppercase mb-3">Keunggulan</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Kenapa Pilih Kami?
          </h2>
          <p className="text-gray text-base max-w-xl mx-auto leading-relaxed">
            Kami menggabungkan kecepatan, konsistensi, dan kepraktisan. Dirancang khusus untuk membantu UMKM tumbuh tanpa ribet.
          </p>
        </motion.div>

        {/* Compact 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <motion.div 
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-background border-4 border-foreground p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 shadow-[8px_8px_0px_#000] group cursor-default flex flex-col h-full"
            >
              {/* Card Icon Header */}
              <div className="w-16 h-16 border-4 border-foreground bg-bitra-green text-background flex items-center justify-center mb-8 group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300">
                {reason.icon}
              </div>
              
              {/* Card Title & Desc */}
              <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 tracking-tighter uppercase leading-none">
                {reason.title}
              </h3>
              
              <p className="text-gray text-sm leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
