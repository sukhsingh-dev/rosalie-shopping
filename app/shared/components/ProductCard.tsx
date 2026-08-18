import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/types";
import { RiArrowRightLongLine, RiHeart2Line } from "react-icons/ri";

const ProductCard = ({ productInfo }: { productInfo: Product }) => {
    return (
        <Link href="/product-details" data-cursor-label="View" className="grid grid-rows-[auto_1fr] group/card border border-slate-300 overflow-hidden">
            <div className="overflow-hidden w-full relative">
                <button data-cursor-label="Add to Wishlist" className="absolute right-4 top-4 z-1 text-tertiary [@media(hover:hover)]:opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"><RiHeart2Line size={24} /></button>
                <Image
                    src={productInfo.image}
                    alt="product image"
                    width={250}
                    height={275}
                    quality={100}
                    sizes="(max-width: 1023px) 50vw, 33vw"
                    className="transition-transform duration-300 group-hover/card:scale-[1.05] object-cover w-full"
                />
            </div>
            <div className="py-3 px-3 sm:px-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-baseline sm:gap-6 lg:gap-12 justify-between w-full">
                <div className="flex flex-col justify-between">
                    <span className="text-[14px] md:text-[16px] text-black/90 line-clamp-2">{productInfo.title}</span>
                    <span className="text-secondary mt-1">£{productInfo.price}</span>
                </div>
                <button data-cursor-label="Add to bag" className="inline-flex items-center justify-center sm:justify-start w-full sm:w-auto shrink-0 gap-2 text-sm py-2.5 sm:py-1.5 px-2.5 bg-page-dark text-white font-medium group/button hover:bg-tertiary transition-colors duration-300 tracking-widest text-[12px]">ADD<RiArrowRightLongLine className="transition-transform duration-300 group-hover/button:translate-x-1" /></button>
            </div>
        </Link>
    )
}

export default ProductCard;
