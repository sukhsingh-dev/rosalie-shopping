import ProductCard from "../shared/components/ProductCard";
import { PRODUCTS } from "../shared/mockData";

export default function Shop() {
    return (
        <main className="bg-white">
            <div className="max-w-360 mx-auto grid grid-cols-[300px_auto] px-4 py-10">
                <div className="">
                    <h1>Filters</h1>
                </div>
                <div className="grid grid-cols-3">
                    {PRODUCTS.map((product) => (
                        <ProductCard
                            key={product.id}
                            productInfo={product}
                        />
                    ))}
                    {PRODUCTS.map((product) => (
                        <ProductCard
                            key={product.id}
                            productInfo={product}
                        />
                    ))}
                </div>
            </div>
        </main>
    );
}