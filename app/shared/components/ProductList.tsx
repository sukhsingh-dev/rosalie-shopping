import ProductCard from "./ProductCard";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";
import { ProductListProps } from "../types/types";

const ProductList = ({ title, linkPath, linkName, productList }: ProductListProps) => {
    return (
        <section className="px-4 py-8 lg:py-12 max-w-360 mx-auto">
            <div className="flex flex-wrap justify-between items-end mb-6 lg:mb-8">
                <h2 className="font-bold text-black text-2xl lg:text-3xl">{title}</h2>
                <Link href={linkPath} className="ml-auto inline-flex items-center gap-2 text-[12px] rounded-[20px] py-1 pl-2.5 pr-1 text-[#124e4a] font-medium relative before:content-[''] before:absolute before:inset-0 before:bg-[#4dd7c0]/15 before:z-[-1] before:rounded-sm before:skew-x-[-20deg] before:outline-1 before:outline-[#a7f5ff]">{linkName}<span className="p-0.5 rounded-full bg-[#e6feff]"><CiLocationArrow1 /></span></Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 lg:gap-4 product-list" >
                {productList.map((product) => (
                    <ProductCard
                        key={product.id}
                        productInfo={product}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProductList;