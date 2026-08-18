"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiCloseFill, RiMenuLine } from "react-icons/ri";

const LINKS = [
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/faq", label: "Faq" },
    { href: "/wishlist", label: "Wishlist" },
];

// Matches the Preloader's lock so the page never shifts as the scrollbar goes.
const lockScroll = () => {
    const before = document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    const gap = document.documentElement.clientWidth - before;
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
};

const unlockScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
};

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();
    const [lastPath, setLastPath] = useState(pathname);

    // Navigating within the app keeps the layout mounted, so the panel has to be
    // dismissed explicitly — this also covers browser back/forward. Adjusting
    // during render rather than in an effect avoids a cascading re-render.
    if (pathname !== lastPath) {
        setLastPath(pathname);
        if (open) setOpen(false);
    }

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        lockScroll();
        return () => {
            document.removeEventListener("keydown", onKey);
            unlockScroll();
        };
    }, [open]);

    return (
        <>
            <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
                aria-expanded={open}
                aria-controls="mobile-menu"
                data-cursor-label="Menu"
                className="flex items-center justify-center p-1 text-page-dark transition-colors duration-150 hover:text-tertiary"
            >
                <RiMenuLine size={24} />
            </button>

            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Site menu"
                className={`fixed inset-0 z-9980 lg:hidden transition-[visibility] duration-300 ${open ? "visible" : "invisible"}`}
            >
                <div
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-page-dark/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
                />

                <nav
                    className={`absolute inset-y-0 left-0 w-4/5 max-w-80 bg-background shadow-xl transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"}`}
                >
                    <div className="flex justify-end p-4">
                        <button
                            type="button"
                            onClick={() => setOpen(false)}
                            aria-label="Close menu"
                            className="p-1 text-page-dark/60 transition-colors duration-150 hover:text-tertiary"
                        >
                            <RiCloseFill size={24} />
                        </button>
                    </div>

                    <ul className="flex flex-col px-6">
                        {LINKS.map(({ href, label }) => (
                            <li key={href} className="border-b border-slate-300/70">
                                <Link
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block py-4 font-secondary text-3xl uppercase text-page-dark transition-colors duration-150 hover:text-tertiary"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default MobileMenu;
