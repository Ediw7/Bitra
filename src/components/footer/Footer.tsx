"use client";

import { getWhatsAppLink, NAV_LINKS } from "@/lib/constants";
import Image from "next/image";

export default function Footer() {
  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-background pt-20 sm:pt-32 overflow-hidden">
      <div className="max-w-[95%] xl:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 pb-20">

          {/* Brand Info */}
          <div className="md:col-span-5 lg:col-span-6">
            <div className="flex items-center gap-3 mb-6">

              <Image
                src="/logo/bitraLogo1.png"
                alt="Bitra Logo"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-gray text-lg font-medium leading-relaxed max-w-sm mb-8">
              Membangun identitas visual Instagram yang kuat, profesional, dan berorientasi pada konversi untuk UMKM Indonesia.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/bitra.studio" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
              <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center hover:bg-foreground hover:text-background transition-colors duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </a>
            </div>
          </div>

          {/* Sitemaps */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-6">Navigasi</h4>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button onClick={() => handleNavClick(link.href)} className="text-gray hover:text-bitra-green hover:translate-x-2 font-medium transition-all duration-300">
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4 lg:col-span-4">
            <h4 className="text-foreground font-bold text-xs uppercase tracking-[0.2em] mb-6">Mulai Proyek</h4>
            <p className="text-gray font-medium mb-6">Punya ide kreatif? Mari bicarakan bagaimana kami bisa membantu bisnis Anda.</p>
            <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="inline-block bg-bitra-green text-background px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-foreground hover:text-background transition-colors duration-300">
              Kirim Pesan
            </a>
          </div>
        </div>
      </div>

      {/* Massive Typography Footer Base */}
      <div className="w-full border-t-4 border-foreground overflow-hidden flex flex-col pt-4">
        <div className="flex flex-col sm:flex-row justify-between items-center px-4 sm:px-12 mb-4 gap-4">
          <p className="text-foreground font-bold uppercase tracking-widest text-xs">© 2024 BITRA Studio. All rights reserved.</p>
          <p className="text-foreground font-bold uppercase tracking-widest text-xs">Semarang, Indonesia</p>
        </div>
        <div className="w-full px-4 sm:px-12 flex justify-center -mb-2 sm:-mb-6 mt-4 opacity-90">
          <Image
            src="/logo/bitraLogo1.png"
            alt="Bitra Logo Massive"
            width={1200}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </footer>
  );
}
