export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Redesign Feed Kopi Lokal Semarang",
    category: "F&B",
    image: "/portfolio/fnb.png",
    description: "Desain feed Instagram untuk brand F&B dengan konsep warm & inviting.",
  },
  {
    id: 2,
    title: "Visual Identity Brand Fashion Muslimah",
    category: "Fashion",
    image: "/portfolio/fashion.png",
    description: "Instagram feed fashion brand dengan aesthetic minimalis dan elegan.",
  },
  {
    id: 3,
    title: "Konten Edukasi Skincare Lokal",
    category: "Beauty",
    image: "/portfolio/beauty.png",
    description: "Konten Instagram skincare brand dengan tone soft pink dan premium.",
  },
  {
    id: 4,
    title: "Brand Awareness Cafe Semarang",
    category: "F&B",
    image: "/portfolio/cafe.png",
    description: "Feed Instagram coffee shop dengan warm brown tones dan cozy vibes.",
  },
  {
    id: 5,
    title: "Engagement Boost Artisan Bakery",
    category: "F&B",
    image: "/portfolio/bakery.png",
    description: "Desain konten bakery dengan pastel aesthetic dan artisan feel.",
  },
  {
    id: 6,
    title: "Campaign Promo Gym & Fitness",
    category: "Lifestyle",
    image: "/portfolio/fitness.png",
    description: "Instagram feed gym dengan bold design dan energetic vibes.",
  },
];

export const categories = ["Semua", "F&B", "Fashion", "Beauty", "Lifestyle"];
