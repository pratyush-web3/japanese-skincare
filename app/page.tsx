import Hero from "@/components/Hero";
import RitualGallery from "@/components/RitualGallery";
import Products from "@/components/Products";
import Ingredients from "@/components/Ingredients";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import BrandStory from "@/components/BrandStory";

export default function Home() {
  return (
    <>
      <Hero />
      <RitualGallery />
      <Products />
      <Ingredients />
      <BrandStory />
      <Testimonials />
      <FAQ />
    </>
  );
}
