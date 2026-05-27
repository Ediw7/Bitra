// WhatsApp Configuration
export const WHATSAPP_NUMBER = "6281234567890"; // Ganti dengan nomor WA BITRA
export const WHATSAPP_DEFAULT_MESSAGE =
  "Halo BITRA, saya ingin konsultasi desain Instagram.";

export const getWhatsAppLink = (message?: string) => {
  const msg = encodeURIComponent(message || WHATSAPP_DEFAULT_MESSAGE);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;
};

// Navigation Links
export const NAV_LINKS = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Layanan", href: "#services" },
  { label: "Proses", href: "#process" },
  { label: "Tentang", href: "#about" },
  { label: "FAQ", href: "#faq" },
];
