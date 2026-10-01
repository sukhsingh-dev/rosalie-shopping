import Image from "next/image";
import Link from "next/link";
import { Product } from "../types/types";
import { RiArrowRightLongLine, RiHeart2Line } from "react-icons/ri";

const ProductCard = ({ productInfo }: { productInfo: Product }) => {
    return (
        <Link href="/product-details" data-cursor-label="View" className="grid grid-rows-[auto_1fr] group/card border border-slate-300 overflow-hidden">
            <div className="overflow-hidden w-full relative">
                <button data-cursor-label="Add to Wishlist" className="absolute right-2 top-2 md:right-4 md:top-4 z-1 text-tertiary [@media(hover:hover)]:opacity-0 transition-opacity duration-300 group-hover/card:opacity-100"><RiHeart2Line size={24} className="w-4 h-4 sm:w-6 sm:h-6" /></button>
                <Image
                    src={productInfo.image}
                    alt="product image"
                    width={250}
                    height={275}
                    quality={100}
                    className="transition-transform duration-300 group-hover/card:scale-[1.05] object-cover w-full"
                />
            </div>
            <div className="py-2 md:py-3 px-2 md:px-4 flex flex-col items-start md:flex-row md:items-baseline gap-2 md:gap-3 lg:gap-12 justify-between w-full">
                <div className="flex flex-col justify-between text-[14px] md:text-[16px]">
                    <span className=" text-black/90 line-clamp-2">{productInfo.title}</span>
                    <span className="text-secondary mt-1">£{productInfo.price}</span>
                </div>
                <button data-cursor-label="Add to bag" className="inline-flex items-center gap-2 text-sm py-1.5 px-2.5 bg-page-dark text-white font-medium group/button hover:bg-tertiary transition-colors duration-300 tracking-widest text-[12px]">ADD<RiArrowRightLongLine className="transition-transform duration-300 group-hover/button:translate-x-1" /></button>
            </div>
        </Link>
    )
}

export default ProductCard;
