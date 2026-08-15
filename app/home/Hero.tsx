import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const HeroSection = () => {
    return (
        <section className="max-w-360 mx-auto px-4 py-8">
            <h1 className="text-primary font-secondary font-bold text-[120px] text-center uppercase">Elevate Your Everyday</h1>
            <div className="max-w-165 mx-auto -mt-30 relative">
                <Image
                    width={660}
                    height={537}
                    quality={100}
                    alt=""
                    src="/images/hero-new.webp"
                    fetchPriority="high"
                    loading="eager"
                />

                <div className="absolute bottom-20 -right-1/3 font-secondary text-secondary text-[52px] uppercase leading-[1.2] w-max">
                    comfort &<br /> contemporary
                </div>
                <div className="absolute bottom-20 -left-1/3  max-w-90">
                    <p className="text-[14px] mix-blend-difference text-white/70 font-normal tracking-wider leading-relaxed">
                        We craft durable, ultra-soft hoodies and breathable <br />t-shirts designed to keep you looking effortlessly stylish, whatever the weather.
                    </p>
                    <Link href="/shop" className="text-white uppercase mt-8 inline-flex text-xs font-semibold px-6 py-3.5 tracking-widest bg-page-dark gap-3 items-center group transition-all duration-300 hover:bg-tertiary" >Shop the Collection <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;