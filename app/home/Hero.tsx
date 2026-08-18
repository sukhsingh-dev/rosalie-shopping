import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const HeroSection = () => {
    return (
        <section className="max-w-360 mx-auto px-4 py-8">
            {/* Fluid up to the design's 120px so the headline keeps to one line on
                wide screens and scales down instead of overflowing on narrow ones. */}
            <h1 className="text-primary font-secondary font-bold text-[clamp(2.5rem,12vw,120px)] leading-[1.05] xl:leading-normal text-center uppercase">Elevate Your Everyday</h1>

            {/* The flanking captions only have room to sit outside the image once
                the composition's full ~1100px fits, so they stack below until xl. */}
            <div className="max-w-165 mx-auto mt-8 xl:-mt-30 relative">
                <Image
                    width={660}
                    height={537}
                    quality={100}
                    alt=""
                    src="/images/hero-new.webp"
                    sizes="(max-width: 660px) 100vw, 660px"
                    className="w-full h-auto"
                    fetchPriority="high"
                    loading="eager"
                />

                <div className="mt-8 text-center font-secondary text-secondary text-[clamp(2rem,8vw,52px)] uppercase leading-[1.2] xl:mt-0 xl:absolute xl:bottom-20 xl:-right-1/3 xl:w-max xl:text-left xl:text-[52px]">
                    comfort &<br /> contemporary
                </div>
                <div className="mt-8 text-center xl:mt-0 xl:text-left xl:absolute xl:bottom-20 xl:-left-1/3 xl:max-w-90">
                    <p className="text-[14px] mix-blend-difference text-white/70 font-normal tracking-wider leading-relaxed">
                        We craft durable, ultra-soft hoodies and breathable <br className="hidden xl:inline" />t-shirts designed to keep you looking effortlessly stylish, whatever the weather.
                    </p>
                    <Link href="/shop" data-cursor-label="Shop" className="text-white uppercase mt-8 inline-flex text-xs font-semibold px-6 py-3.5 tracking-widest bg-page-dark gap-3 items-center group transition-all duration-300 hover:bg-tertiary" >Shop the Collection <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;
