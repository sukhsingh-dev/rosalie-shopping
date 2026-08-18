import ProductCard from "./ProductCard";
import Link from "next/link";
import { RiArrowRightLongLine } from "react-icons/ri";
import { ProductListProps } from "../types/types";

const ProductList = ({ title, linkPath, linkName, productList }: ProductListProps) => {
    return (
        <section className="px-4 py-8 lg:py-12 max-w-360 mx-auto">
            <div className="flex flex-wrap justify-between items-center mb-6 lg:mb-12">
                <h2 className="font-secondary uppercase text-primary text-4xl sm:text-5xl lg:text-[46px] xl:text-[80px] leading-[0.95] tracking-tight">{title}</h2>
                <Link href={linkPath} className="ml-auto inline-flex items-center gap-2 text-sm rounded-[20px] py-1 pl-2.5 pr-1 text-page-dark/80 font-medium group hover:text-tertiary transition-colors duration-300">{linkName} <RiArrowRightLongLine className="transition-transform duration-300 group-hover:translate-x-1" /></Link>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 product-list" >
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