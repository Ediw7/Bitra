"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-28 bg-background relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-surface/50 -skew-x-12 translate-x-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 sm:mb-16">
          <h2 className="text-sm font-bold tracking-widest text-bitra-green uppercase mb-3 flex items-center gap-3">
            <span className="w-8 h-px bg-bitra-green" /> Tentang Kami
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {/* Main Intro (2x2 on lg, 2x2 on md) */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }} className="md:col-span-2 lg:col-span-2 md:row-span-2 bg-surface border-4 border-foreground shadow-[8px_8px_0px_#000] p-8 sm:p-10 lg:p-12 relative overflow-hidden group hover:-translate-y-2 hover:shadow-[12px_12px_0px_#95C93D] transition-all duration-500">
            <div className="relative z-10 h-full flex flex-col justify-center">
              <h3 className="text-4xl sm:text-5xl font-bold text-foreground leading-[1.1] mb-6">
                Bukan sekadar desain, kami membangun <span className="font-serif italic font-light text-bitra-green text-5xl sm:text-6xl tracking-tight">Karakter</span>.
              </h3>
              <p className="text-gray text-lg leading-relaxed max-w-md">
                BITRA adalah studio kreatif yang percaya bahwa setiap UMKM berhak tampil mahal dan profesional di Instagram tanpa biaya yang menguras kantong.
              </p>
            </div>
            {/* Giant Background Letter/Icon */}
            <div className="absolute -bottom-10 -right-4 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none select-none opacity-5">
              <Image 
                src="/logo/bitraLogo3.png" 
                alt="Bitra Background Icon" 
                width={240} 
                height={240} 
                className="w-48 h-48 sm:w-64 sm:h-64 object-contain" 
              />
            </div>
          </motion.div>

          {/* Fokus Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.1 }} className="bg-[#FFCC00] border-4 border-foreground shadow-[8px_8px_0px_#000] p-8 flex flex-col justify-between h-full min-h-[220px] group overflow-hidden relative hover:-translate-y-2 transition-all duration-500">
            <p className="text-black/60 font-bold uppercase tracking-widest text-xs relative z-10">Fokus Utama</p>
            <div className="relative z-10">
              <h4 className="text-4xl font-black text-black leading-none mb-2">UMKM</h4>
              <p className="text-black/70 text-sm font-medium">Membantu bisnis kecil scale-up.</p>
            </div>
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          </motion.div>

          {/* Image/Aesthetic Card (Only visible on lg, takes 2 rows) */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden lg:block lg:col-span-1 lg:row-span-2 border-4 border-foreground shadow-[8px_8px_0px_#000] overflow-hidden relative min-h-[464px] group hover:-translate-y-2 transition-all duration-500">
            <img src="/portfolio/bakery.png" alt="Creative Design" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <p className="text-white font-serif italic text-3xl font-light leading-tight">Visual yang<br/>Bercerita.</p>
            </div>
          </motion.div>

          {/* Spesialisasi Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.2 }} className="bg-foreground border-4 border-foreground shadow-[8px_8px_0px_#000] p-8 flex flex-col justify-between h-full min-h-[220px] group relative overflow-hidden hover:-translate-y-2 transition-all duration-500">
            <p className="text-white/50 font-bold uppercase tracking-widest text-xs relative z-10">Spesialisasi</p>
            <div className="relative z-10">
              <h4 className="text-3xl font-bold text-white leading-tight mb-2">Instagram<br/>Mastery</h4>
            </div>
            {/* Instagram gradient blob */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500 opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500" />
          </motion.div>

          {/* Pendekatan Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.3 }} className="md:col-span-2 lg:col-span-3 bg-bitra-green border-4 border-foreground shadow-[8px_8px_0px_#000] p-8 flex items-center justify-between h-full min-h-[220px] relative overflow-hidden group hover:-translate-y-2 transition-all duration-500">
            <div className="relative z-10">
              <p className="text-background/70 font-bold uppercase tracking-widest text-xs mb-3">Pendekatan</p>
              <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-background leading-none">100% Praktis<br/>via WhatsApp.</h4>
              <p className="text-background/90 text-sm sm:text-base mt-3 font-medium">Tanpa meeting ribet. Langsung brief & kerjakan!</p>
            </div>
            {/* Abstract WhatsApp bubble icon */}
            <svg className="absolute -right-6 -bottom-6 w-40 h-40 sm:w-48 sm:h-48 text-background/10 group-hover:scale-110 transition-transform duration-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12C2 13.7 2.44 15.3 3.2 16.7L2 22L7.48 20.7C8.88 21.5 10.4 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2Z"/>
            </svg>
          </motion.div>

          {/* Goal Card */}
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, delay: 0.4 }} className="bg-[#D696FF] border-4 border-foreground shadow-[8px_8px_0px_#000] p-8 flex flex-col justify-between h-full min-h-[220px] group relative overflow-hidden hover:-translate-y-2 transition-all duration-500">
            <p className="text-black/60 font-bold uppercase tracking-widest text-xs relative z-10">Goal</p>
            <div className="relative z-10">
              <h4 className="text-3xl font-black text-black leading-tight mb-2">Business<br/>Growth</h4>
            </div>
            <svg className="absolute right-6 bottom-6 w-16 h-16 text-black/20 group-hover:-translate-y-2 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
              <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
