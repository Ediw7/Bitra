export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Apakah bisa revisi?",
    answer:
      "Tentu! Setiap paket sudah termasuk revisi. Paket Starter 1x revisi, Growth 2x revisi, dan Pro 3x revisi per desain. Revisi tambahan bisa didiskusikan terpisah.",
  },
  {
    id: 2,
    question: "Berapa lama pengerjaan?",
    answer:
      "Rata-rata pengerjaan 3-7 hari kerja tergantung paket dan jumlah desain. Kami akan memberikan timeline yang jelas di awal project.",
  },
  {
    id: 3,
    question: "Harus punya foto produk sendiri?",
    answer:
      "Tidak harus. Kami bisa menggunakan foto produk Anda, atau menggunakan stock photo berkualitas tinggi. Tapi hasil terbaik tetap dengan foto produk asli Anda.",
  },
  {
    id: 4,
    question: "Pembayaran bagaimana?",
    answer:
      "Pembayaran via transfer bank. Untuk paket Starter, full payment di awal. Untuk Growth dan Pro, bisa DP 50% di awal dan pelunasan setelah desain selesai.",
  },
  {
    id: 5,
    question: "Bisa desain selain Instagram?",
    answer:
      "Saat ini kami fokus di konten Instagram (feed, story, highlight cover). Untuk kebutuhan desain lain seperti logo atau banner, bisa didiskusikan terpisah.",
  },
  {
    id: 6,
    question: "Apakah termasuk posting ke Instagram?",
    answer:
      "Belum. Kami menyediakan desain siap upload beserta caption template. Posting dilakukan oleh klien sendiri agar kontrol penuh atas akun tetap di tangan Anda.",
  },
  {
    id: 7,
    question: "Apakah order harus di Semarang?",
    answer:
      "Tidak, BITRA melayani online via WhatsApp ke seluruh Indonesia.",
  },
  {
    id: 8,
    question: "Apakah ada DP?",
    answer:
      "Ya, kami menerapkan sistem DP 50% sebelum project dimulai sebagai tanda komitmen dan sisanya dibayarkan setelah draft desain selesai.",
  },
];
