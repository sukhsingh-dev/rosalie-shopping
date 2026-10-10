import Link from "next/link";
import Image from "next/image";
import { RiArrowRightLongLine, RiArrowRightUpLongLine } from "react-icons/ri";

export default function Collection() {
    return (
        <section className="max-w-360 mx-auto px-4 py-5 md:py-10">
            <div className="flex flex-wrap justify-between items-end mb-6 xl:mb-12">
                <h2 className="font-secondary uppercase text-page-dark text-4xl sm:text-5xl lg:text-[46px] xl:text-[80px] leading-[0.95] tracking-tight">Collections</h2>
                <Link href="/shop" className="ml-auto inline-flex items-center gap-2 text-sm rounded-[20px] py-1 pl-2.5 pr-1 text-secondary font-medium group hover:text-tertiary transition-colors duration-300">See All <RiArrowRightLongLine className="transition-transform duration-300 group-hover:translate-x-1" /></Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-3 lg:gap-5">
                <Link href="/shop" className="grid max-md:min-h-69 overflow-hidden">
                    <Image
                        width={694}
                        height={440}
                        alt=""
                        src="/images/collection-men.webp"
                        quality={90}
                        className="col-span-full row-span-full h-full object-cover object-right"
                    />
                    <div className="col-span-full row-span-full flex flex-col items-start p-4 lg:p-10">
                        <h3 className="text-secondary uppercase font-secondary text-4xl lg:text-6xl">Men</h3>
                        <p className="text-page-dark/75 max-w-[60%] my-2 text-sm lg:text-base font-medium">Discover the ultimate in off-duty style with our exclusive collection of men's hoodies and t-shirts.</p>
                        <span
                            data-cursor-label="Discover"
                            className="mt-auto inline-flex items-center gap-3 bg-primary text-white uppercase text-xs font-semibold px-6 py-3.5 tracking-widest transition-all duration-300 hover:bg-tertiary group"
                        >
                            <span>Check Now</span>
                            <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </span>
                    </div>

                </Link>
                <Link href="/shop" className="grid max-md:min-h-69 overflow-hidden">
                    <Image
                        width={694}
                        height={440}
                        alt=""
                        src="/images/collection-women.webp"
                        quality={90}
                        className="col-span-full row-span-full h-full object-cover object-right"
                    />
                    <div className="col-span-full row-span-full flex flex-col items-start p-4 lg:p-10">
                        <h3 className="text-secondary uppercase font-secondary text-4xl lg:text-6xl">Women</h3>
                        <p className="text-page-dark/75 max-w-[70%] lg:max-w-[60%] my-2 text-sm lg:text-base font-medium">Elevate your casual wardrobe with our thoughtfully designed collection of women's hoodies and t-shirts.</p>
                        <span
                            data-cursor-label="Discover"
                            className="mt-auto inline-flex items-center gap-3 bg-primary text-white uppercase text-xs font-semibold px-6 py-3.5 tracking-widest transition-all duration-300 hover:bg-tertiary group"
                        >
                            <span>Check Now</span>
                            <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </span>
                    </div>

                </Link>
            </div>
        </section>
    )
}
