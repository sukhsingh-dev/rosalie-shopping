import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/types";
import { RiArrowRightLongLine, RiHeart2Line } from "react-icons/ri";

const ProductCard = ({ productInfo }: { productInfo: Product }) => {
    return (
        <Link href="/product-details" className="grid grid-rows-[auto_1fr] group/card border border-slate-300 overflow-hidden">
            <div className="overflow-hidden w-full relative">
                <div className="absolute right-4 top-4 z-1 text-tertiary [@media(hover:hover)]:opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"><RiHeart2Line size={24} /></div>
                <Image
                    src={productInfo.image}
                    alt="product image"
                    width={250}
                    height={275}
                    quality={100}
                    className="transition-transform duration-300 group-hover/card:scale-[1.05] object-cover w-full"
                />
            </div>
            <div className="py-3 px-4 flex gap-12 justify-between w-full items-baseline">
                <div className="flex flex-col justify-between">
                    <span className="text-[14px] md:text-[16px] text-black/90 line-clamp-2">{productInfo.title}</span>
                    <span className="text-secondary mt-1">£{productInfo.price}</span>
                </div>
                <button className="inline-flex items-center gap-2 text-sm py-1.5 px-2.5 bg-page-dark text-white font-medium group/button hover:bg-tertiary transition-colors duration-300 tracking-widest text-[12px]">ADD<RiArrowRightLongLine className="transition-transform duration-300 group-hover/button:translate-x-1" /></button>
            </div>
        </Link>
    )
}

export default ProductCard;
