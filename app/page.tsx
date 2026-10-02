import HeroSection from "./home/Hero";
import Marquee from "./home/Marquee";
import AboutSection from "./home/About";
import ProductList from "./shared/components/ProductList";
import { PRODUCTS } from "./shared/mockData";
import Collection from "./home/Collection";
import NewsLetter from "./home/Newsletter";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Marquee />
      <ProductList
        title="New Arrival"
        linkPath="/shop"
        linkName="See All"
        productList={PRODUCTS}
      />
      <AboutSection />
      <Collection />
      <ProductList
        title="Most Popular"
        linkPath="/shop"
        linkName="See All"
        productList={PRODUCTS}
      />
      <NewsLetter />
    </main>
  );
}


