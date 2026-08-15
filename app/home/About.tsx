import Image from "next/image";
import Link from "next/link";
import { RiArrowRightUpLongLine } from "react-icons/ri";

const AboutSection = () => {
    return (
        <section className="max-w-360 mx-auto px-4 py-16 overflow-hidden">
            <div className="grid grid-cols-3 gap-12 items-center">
                <h2 className="self-end font-secondary uppercase text-white mix-blend-difference text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[116px] 2xl:text-[130px] tracking-tight">
                    <span className="whitespace-nowrap">THE FOUNDATION</span>
                    <br />
                    <span className="whitespace-nowrap">OF CRAFT</span>
                </h2>

                <Image
                    src="/images/about.webp"
                    alt="Rosalie Parisian Elegance"
                    width={600}
                    height={400}
                    objectFit="cover"
                />

                <div>
                    <h3 className="font-secondary uppercase text-primary text-4xl sm:text-5xl lg:text-[46px] xl:text-[54px] leading-[0.95] tracking-tight">
                        Crafting Premium Comfort for the Modern Wardrobe.
                    </h3>

                    <div className="w-full h-px bg-page-dark/20 my-6 sm:my-8" />

                    <p className="font-main text-xs sm:text-[14px] text-page-dark/80 font-medium tracking-wider leading-relaxed mb-8 max-w-sm">
                        At Rosalie, we believe that everyday essentials should be anything but ordinary. Founded with a passion for exceptional quality and effortless British style, our mission is to design apparel that you naturally reach for day after day.
                    </p>

                    <Link
                        href="/about"
                        className="inline-flex items-center gap-3 bg-page-dark text-white uppercase text-xs font-semibold px-6 py-3.5 tracking-widest transition-all duration-300 hover:bg-tertiary group"
                    >
                        <span>DISCOVER MORE</span>
                        <RiArrowRightUpLongLine className="inline-flex -mt-0.5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
