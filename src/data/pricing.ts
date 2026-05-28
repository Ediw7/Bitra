export interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular: boolean;
  waMessage: string;
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Starter",
    price: "150K",
    period: "/paket",
    description: "Cocok untuk UMKM yang baru mulai bangun Instagram.",
    features: [
      "10 desain feed",
      "Revisi 1x per desain",
      "Caption copywriting",
      "File PNG/JPG siap upload",
      "Pengerjaan 3-5 hari",
      "Konsultasi singkat via WA",
    ],
    popular: false,
    waMessage: "Halo BITRA, saya tertarik dengan paket Starter (150K). Bisa info lebih lanjut?",
  },
  {
    id: 2,
    name: "Growth",
    price: "500K",
    period: "/paket",
    description: "Untuk UMKM yang mau konsisten posting konten.",
    features: [
      "20 desain feed + 10 story",
      "Revisi 2x per desain",
      "Content calendar",
      "Caption copywriting",
      "File PNG/JPG siap upload",
      "Pengerjaan 5-7 hari",
      "Konsultasi via WA",
    ],
    popular: true,
    waMessage: "Halo BITRA, saya tertarik dengan paket Growth (500K). Bisa info lebih lanjut?",
  },
  {
    id: 3,
    name: "Pro",
    price: "800K",
    period: "/paket",
    description: "Solusi lengkap untuk brand yang serius di Instagram.",
    features: [
      "30 desain feed + 15 story",
      "Revisi 3x per desain",
      "Content calendar + strategi",
      "Caption copywriting",
      "File PNG/JPG siap upload",
      "Admin Upload & Penjadwalan Konten",
      "Konsultasi intensif",
      "Priority support",
    ],
    popular: false,
    waMessage: "Halo BITRA, saya tertarik dengan paket Pro (800K). Bisa info lebih lanjut?",
  },
];
