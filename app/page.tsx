import Hero from "@/components/Hero";
import RitualGallery from "@/components/RitualGallery";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredients";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BrandStory from "@/components/BrandStory";
import Services from "@/components/Services";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <RitualGallery />
      <Products />
      <Ingredients />
      <BrandStory />
      <Services />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
