import HeroSection from "./home/Hero";
import Marquee from "./home/Marquee";
import AboutSection from "./home/About";
import ProductList from "./shared/components/ProductList";
import { PRODUCTS } from "./shared/mockData";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Marquee />
      <AboutSection />
      <ProductList
        title="New Collection"
        linkPath="/shop"
        linkName="See All"
        productList={PRODUCTS}
      />
    </main>
  );
}


