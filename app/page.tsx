import HeroSection from "./home/Hero";
import Marquee from "./home/Marquee";
import AboutSection from "./home/About";
import VideoCollectionsSection from "./home/VideoCollections";
import ProductList from "./shared/components/ProductList";
import { PRODUCTS } from "./shared/mockData";

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
      <VideoCollectionsSection />
    </main>
  );
}


