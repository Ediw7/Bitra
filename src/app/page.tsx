import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import WhyBitra from "@/components/trust/WhyBitra";
import Portfolio from "@/components/portfolio/Portfolio";
import Pricing from "@/components/services/Pricing";
import Workflow from "@/components/process/Workflow";
import About from "@/components/about/About";
import FAQ from "@/components/faq/FAQ";
import CTA from "@/components/cta/CTA";
import Footer from "@/components/footer/Footer";
import Testimonials from "@/components/testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <WhyBitra />
      <Workflow />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
