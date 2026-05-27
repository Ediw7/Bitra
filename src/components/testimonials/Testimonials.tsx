"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Feed bisnis saya jadi lebih konsisten dan gampang posting. Desainnya bener-bener bantu naikin trust customer.",
    author: "UMKM Fashion"
  },
  {
    id: 2,
    quote: "Gak nyangka hasil desainnya bisa se-premium ini padahal harganya sangat terjangkau. Proses via WA juga gampang banget.",
    author: "F&B Brand"
  },
  {
    id: 3,
    quote: "Tim BITRA paham banget kemauan kita. Visual identity brand kami jadi makin kuat dan terlihat jauh lebih profesional dari kompetitor.",
    author: "Klinik Kecantikan"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-24 py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-bitra-green text-sm font-semibold tracking-widest uppercase mb-3">Testimonial</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4 uppercase">
            Cerita Klien Kami
          </h2>
          <p className="text-gray text-base max-w-xl mx-auto leading-relaxed">
            Apa kata mereka yang telah mempercayakan identitas visual bisnisnya kepada BITRA?
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <motion.div 
              key={testi.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-surface border-4 border-foreground p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 shadow-[8px_8px_0px_#000] flex flex-col justify-between h-full group"
            >
              <div className="mb-8 text-bitra-green opacity-50 group-hover:opacity-100 group-hover:-rotate-12 transition-all duration-300">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                </svg>
              </div>
              <p className="text-foreground font-medium text-lg leading-relaxed mb-8 italic">
                "{testi.quote}"
              </p>
              <p className="text-gray font-bold tracking-widest uppercase text-sm">
                — {testi.author}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
