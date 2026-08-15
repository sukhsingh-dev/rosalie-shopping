"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const line2Items = [
    "Durable & Ultra-Soft Hoodies",
    "Breathable Premium T-Shirts",
    "Crafted For Daily Comfort",
    "Limited Edition Drops",
    "Worldwide Fast Shipping",
    "Sustainable Organic Cotton",
];

const Marquee = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const line2Ref = useRef<HTMLDivElement>(null);
    const tween2Ref = useRef<gsap.core.Tween | null>(null);

    useGSAP(
        () => {
            tween2Ref.current = gsap.fromTo(
                line2Ref.current,
                { xPercent: -50 },
                {
                    xPercent: 0,
                    repeat: -1,
                    duration: 100,
                    ease: "none",
                }
            );
        },
        { scope: containerRef }
    );

    const handleMouseEnter = () => {
        tween2Ref.current?.pause();
    };

    const handleMouseLeave = () => {
        tween2Ref.current?.play();
    };

    return (
        <section
            ref={containerRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="w-full py-4 overflow-hidden select-none"
            aria-label="Brand highlights marquee"
        >
            <div className="overflow-hidden whitespace-nowrap flex w-full py-4 bg-secondary shadow-md">
                <div ref={line2Ref} className="flex shrink-0 w-max will-change-transform">
                    {/* Duplicate 1 */}
                    <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12">
                        {line2Items.map((item, idx) => (
                            <span
                                key={`l2-a-${idx}`}
                                className="inline-flex items-center gap-8 sm:gap-12 text-white font-secondary uppercase text-3xl sm:text-5xl tracking-wide group"
                            >
                                <span>
                                    {item}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-main font-semibold tracking-widest bg-page-dark text-white uppercase">
                                    Rosalie
                                </span>
                            </span>
                        ))}
                    </div>
                    {/* Duplicate 2 */}
                    <div className="flex items-center gap-8 sm:gap-12 pr-8 sm:pr-12" aria-hidden="true">
                        {line2Items.map((item, idx) => (
                            <span
                                key={`l2-b-${idx}`}
                                className="inline-flex items-center gap-8 sm:gap-12 text-white font-secondary uppercase text-3xl sm:text-5xl tracking-wide group"
                            >
                                <span>
                                    {item}
                                </span>
                                <span className="inline-block px-2 py-1 text-xs font-main font-semibold tracking-widest bg-page-dark text-white uppercase">
                                    Rosalie
                                </span>
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Marquee;