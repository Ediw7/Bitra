import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BITRA | Jasa Desain Konten Instagram UMKM",
  description:
    "BITRA membantu UMKM membangun Instagram yang lebih profesional dan konsisten. Studio desain konten Instagram terpercaya di Semarang.",
  keywords: [
    "desain instagram",
    "konten instagram UMKM",
    "jasa desain sosial media",
    "feed instagram profesional",
    "BITRA studio",
    "desain konten Semarang",
  ],
  openGraph: {
    title: "BITRA | Jasa Desain Konten Instagram UMKM",
    description:
      "BITRA membantu UMKM membangun Instagram yang lebih profesional dan konsisten.",
    type: "website",
    locale: "id_ID",
    siteName: "BITRA Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "BITRA | Jasa Desain Konten Instagram UMKM",
    description:
      "BITRA membantu UMKM membangun Instagram yang lebih profesional dan konsisten.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
