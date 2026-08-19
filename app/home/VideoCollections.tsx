"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Collection = {
    name: string;
    column: "left" | "right";
    image: string;
};

/* Declared in the order the highlight travels — clockwise from the top-left
   label — so the eye follows a circle around the product instead of jumping
   across it. `column` keeps the layout readable from the data alone. */
const COLLECTIONS: Collection[] = [
    { name: "Winter", column: "left", image: "/videos/vid-1-new.mp4" },
    { name: "Summer", column: "left", image: "/videos/vid-2-new.mp4" },
    { name: "Contemporary", column: "right", image: "/videos/vid-3-new.mp4" },
    { name: "Comfort", column: "right", image: "/videos/vid-4-new.mp4" },
];

const ROTATE_MS = 5000;

const columnLinks = (column: Collection["column"]) =>
    COLLECTIONS.map((collection, index) => ({ collection, index })).filter(
        ({ collection }) => collection.column === column
    );

const VideoCollectionsSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    // Pointing at a label takes the rotation over, so the cycle never yanks the
    // image out from under someone who is reading one of them.
    useEffect(() => {
        if (paused) return;

        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % COLLECTIONS.length);
        }, ROTATE_MS);

        return () => clearInterval(timer);
    }, [paused]);

    const renderLink = ({ collection, index }: { collection: Collection; index: number }) => {
        const isActive = index === activeIndex;
        const line = (
            <span
                aria-hidden="true"
                className={`hidden lg:block h-0.5 flex-1 transition-colors duration-500 ${isActive ? "bg-primary" : "bg-page-dark"
                    }`}
            />
        );

        return (
            <Link
                key={collection.name}
                href={`/shop?collection=${collection.name.toLowerCase()}`}
                data-cursor-label="Explore"
                aria-current={isActive ? "true" : undefined}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                className={`flex items-center gap-4 justify-center font-secondary uppercase tracking-tight text-3xl xl:text-[44px] leading-none transition-colors duration-500 ${isActive ? "text-primary" : "text-page-dark"
                    }`}
            >
                {collection.column === "right" && line}
                <span className="whitespace-nowrap">{collection.name}</span>
                {collection.column === "left" && line}
            </Link>
        );
    };

    return (
        <section
            aria-label="Shop by collection"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            className="relative max-w-360 mx-auto px-4 py-16 overflow-hidden"
        >
            <Image
                src="/images/rose-icon.svg"
                alt=""
                aria-hidden="true"
                width={61}
                height={100}
                className="hidden md:block pointer-events-none select-none absolute top-0 left-2 w-24 xl:w-32 h-auto opacity-25"
            />
            <Image
                src="/images/rose-icon.svg"
                alt=""
                aria-hidden="true"
                width={61}
                height={100}
                className="hidden md:block pointer-events-none select-none absolute bottom-0 right-2 w-24 xl:w-32 h-auto opacity-25"
            />

            <div className="relative flex flex-col items-center gap-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-0">
                <div className="order-2 lg:order-0 flex flex-col items-center lg:items-stretch gap-6 lg:gap-60">
                    {columnLinks("left").map(renderLink)}
                </div>

                <div className="order-1 lg:order-0 relative w-60 lg:w-72 xl:w-90 aspect-9/14 shadow-lg rotate-6 -mx-5">
                    {COLLECTIONS.map((collection, index) => (
                        // <Image
                        //     key={collection.name}
                        //     src={collection.image}
                        //     alt={`${collection.name} collection`}
                        //     fill
                        //     sizes="(max-width: 1024px) 14rem, (max-width: 1280px) 18rem, 20rem"
                        //     quality={100}
                        //     className={`object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"
                        //         }`}
                        // />
                        <video key={collection.name} autoPlay muted loop className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                            <source src={collection.image} type="video/mp4" />
                        </video>
                    ))}
                </div>

                <div className="order-3 lg:order-0 flex flex-col items-center lg:items-stretch gap-6 lg:gap-60 mt-20">
                    {columnLinks("right").map(renderLink)}
                </div>
            </div>
        </section>
    );
};

export default VideoCollectionsSection;
