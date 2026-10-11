import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const HeroSection = () => {
    return (
        <section className="max-w-360 mx-auto px-4 py-8">
            <h1 className="text-primary font-secondary font-bold text-[60px] sm:text-[66px] lg:text-[90px] xl:text-[120px] text-center uppercase leading-[1.1]">Elevate Your Everyday</h1>
            <div className="max-w-100 md:max-w-120 lg:max-w-140 xl:max-w-150 mx-auto -mt-8 xl:-mt-20 relative aspect-660/537">
                <Image
                    width={660}
                    height={537}
                    quality={90}
                    alt="Rosalie streetwear essentials - Elevate Your Everyday"
                    src="/images/hero-4.webp"
                    priority
                    fetchPriority="high"
                    sizes="(max-width: 640px) 380px, (max-width: 1024px) 480px, 600px"
                    className="mx-auto sm:max-md:max-w-120 pointer-none w-full h-auto"
                />
                {/* <video loop autoPlay muted>
                    <source src="/videos/hero-2.mp4" type="video/mp4" />
                </video> */}

                <div className="md:absolute bottom-10 -right-10 md:-right-30 lg:-right-1/3 font-secondary text-secondary text-[32px] sm:text-[48px] md:text-[52px] uppercase leading-[1.2] md:w-max my-2 text-center md:text-left">
                    comfort &<br className="hidden md:block" /> contemporary
                </div>
                <div className="md:absolute bottom-10 md:left-[-24%] lg:left-[-39%]  md:max-w-90 text-center md:text-left">
                    <p className="text-[13px] sm:text-14 mix-blend-difference text-white/70 font-normal tracking-wider leading-relaxed">
                        We craft durable, ultra-soft hoodies and breathable <br />t-shirts designed to keep you looking effortlessly stylish, whatever the weather.
                    </p>
                    <Link href="/shop" data-cursor-label="Shop" className="text-white uppercase mt-4 sm:mt-8 inline-flex text-xs font-semibold px-6 py-3.5 tracking-widest bg-page-dark gap-3 items-center group transition-all duration-300 hover:bg-tertiary" >Shop the Collection <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" /></Link>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;