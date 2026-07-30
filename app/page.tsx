import HeroSection from "./home/Hero";
import ProductList from "./shared/components/ProductList";
import { PRODUCTS } from "./shared/mockData";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProductList
        title="Brand New Collection"
        linkName="See More"
        linkPath="/shop"
        productList={PRODUCTS}
      />
    </main>
  );
}
