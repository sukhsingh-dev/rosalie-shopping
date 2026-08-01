import Image from "next/image";
import Link from "next/link";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { Product } from "../types/types";

const ProductCard = ({ productInfo }: { productInfo: Product }) => {
    return (
        <Link href="/product-details" className="product-card relative group bg-white p-1 pb-2 md:p-1.25 md:pb-3 rounded-[20px] md:rounded-3xl border border-[#e6e6e6]">
            <div className="aspect-[1/1.1] rounded-2xl md:rounded-[20px] overflow-hidden">
                <Image
                    src={productInfo.image}
                    alt="product image"
                    width={250}
                    height={275}
                    quality={100}
                    className="transition-transform duration-500 group-hover:scale-105 aspect-[1/1.1] rounded-2xl md:rounded-[20px] object-cover w-full"
                />
            </div>
            <div className="px-2 mt-2">
                <span className="text-[14px] md:text-[16px] text-black/90 mb-1 line-clamp-2">{productInfo.title}</span>
                <div className="flex justify-between gap-1 " >
                    <span className="font-bold md:text-[18px] text-black/85">${productInfo.price}</span>
                    <div className="flex items-center gap-2 opacity-60">
                        <CiShoppingCart size={20} className="lg:w-6 lg:h-6" />
                        <CiHeart size={20} className="lg:w-6 lg:h-6" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;
