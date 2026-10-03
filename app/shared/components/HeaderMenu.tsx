"use client";

import { useRef, useState, useCallback } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
    RiCloseLargeLine,
    RiMenu2Fill,
    RiWhatsappFill,
    RiInstagramLine,
    RiFacebookFill,
    RiYoutubeFill,
    RiArrowRightUpLongLine,
} from "react-icons/ri";

/* ─────────────────────────────────── Config ───────────────────────────────── */

const NAV_LINKS = [
    { label: "Shop", href: "/shop" },
    { label: "Collections", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
] as const;

const SOCIALS = [
    { Icon: RiWhatsappFill, href: "#", label: "WhatsApp" },
    { Icon: RiInstagramLine, href: "#", label: "Instagram" },
    { Icon: RiFacebookFill, href: "#", label: "Facebook" },
    { Icon: RiYoutubeFill, href: "#", label: "YouTube" },
] as const;

/* ─────────────────────────────────── Component ────────────────────────────── */

const HeaderMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const onClose = useCallback(() => setIsOpen(false), []);
    const rootRef = useRef<HTMLDivElement>(null);
    const backdropRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<(HTMLAnchorElement | null)[]>([]);
    const socialRef = useRef<HTMLDivElement>(null);
    const closeRef = useRef<HTMLButtonElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    const setLinkRef = useCallback(
        (i: number) => (el: HTMLAnchorElement | null) => {
            linkRefs.current[i] = el;
        },
        []
    );

    /* ── Build master timeline on mount ───────────────────────────────────── */
    useGSAP(
        () => {
            const root = rootRef.current;
            const backdrop = backdropRef.current;
            if (!root || !backdrop) return;

            const links = linkRefs.current.filter(Boolean) as HTMLAnchorElement[];
            const social = socialRef.current;
            const closeBtn = closeRef.current;

            const reduced = window.matchMedia(
                "(prefers-reduced-motion: reduce)"
            ).matches;

            /* ── Initial state ─────────────────────────────────────────────── */
            gsap.set(root, { autoAlpha: 0, pointerEvents: "none" });
            gsap.set(backdrop, { yPercent: -100 });
            gsap.set(links, { autoAlpha: 0, y: 30 });
            if (social) gsap.set(social, { autoAlpha: 0, y: 16 });
            if (closeBtn) gsap.set(closeBtn, { autoAlpha: 0, rotation: -90 });

            /* ── Timeline ──────────────────────────────────────────────────── */
            const tl = gsap.timeline({ paused: true });

            /* 1 ▸ Reveal root instantly */
            tl.to(root, {
                autoAlpha: 1,
                pointerEvents: "auto",
                duration: 0.01,
            });

            /* 2 ▸ Dark backdrop drops down */
            tl.to(backdrop, {
                yPercent: 0,
                duration: reduced ? 0.01 : 0.45,
                ease: "power3.inOut",
            });

            /* 3 ▸ Nav links slide up with stagger */
            tl.to(
                links,
                {
                    autoAlpha: 1,
                    y: 0,
                    duration: reduced ? 0.01 : 0.35,
                    ease: "power3.out",
                    stagger: reduced ? 0 : 0.06,
                },
                reduced ? "<" : "-=0.12"
            );

            /* 4 ▸ Close button rotates in */
            if (closeBtn) {
                tl.to(
                    closeBtn,
                    {
                        autoAlpha: 1,
                        rotation: 0,
                        duration: reduced ? 0.01 : 0.3,
                        ease: "power2.out",
                    },
                    reduced ? "<" : "-=0.3"
                );
            }

            /* 5 ▸ Social icons */
            if (social) {
                tl.to(
                    social,
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: reduced ? 0.01 : 0.3,
                        ease: "power2.out",
                    },
                    reduced ? "<" : "-=0.25"
                );
            }

            tlRef.current = tl;

            return () => {
                tl.kill();
            };
        },
        { scope: rootRef }
    );

    /* ── Play / reverse ──────────────────────────────────────────────────── */
    useGSAP(
        () => {
            const tl = tlRef.current;
            if (!tl) return;

            if (isOpen) {
                document.body.style.overflow = "hidden";
                tl.timeScale(1).play();
            } else {
                tl.timeScale(1.5).reverse();
                tl.eventCallback("onReverseComplete", () => {
                    document.body.style.overflow = "";
                });
            }
        },
        { dependencies: [isOpen], scope: rootRef }
    );

    /* ── Close on Escape ─────────────────────────────────────────────────── */
    useGSAP(
        () => {
            const onKey = (e: KeyboardEvent) => {
                if (e.key === "Escape" && isOpen) onClose();
            };
            window.addEventListener("keydown", onKey);
            return () => window.removeEventListener("keydown", onKey);
        },
        { dependencies: [isOpen] }
    );

    return (
        <>
            {/* ── Hamburger trigger (rendered inside the Header's slot) ──── */}
            <button
                data-cursor-label="Open Menu"
                className="mt-1"
                onClick={() => setIsOpen(true)}
                aria-label="Open menu"
            >
                <RiMenu2Fill size={20} />
            </button>

            {/* ── Full-page overlay ─────────────────────────────────────── */}
            <div
                ref={rootRef}
                aria-hidden={!isOpen}
                className="fixed inset-0 z-9980"
                style={{ visibility: "hidden" }}
            >
            {/* ── Backdrop ─────────────────────────────────────────────────── */}
            <div
                ref={backdropRef}
                aria-hidden="true"
                className="absolute inset-0 bg-page-dark"
            />

            {/* ── Content ──────────────────────────────────────────────────── */}
            <div className="max-w-360 mx-auto relative z-10 flex flex-col justify-between h-full px-4 py-2 lg:py-5 overflow-y-auto">
                {/* Close button */}
                <div className="flex">
                    <button
                        ref={closeRef}
                        onClick={onClose}
                        data-cursor-label="Close Menu"
                        aria-label="Close menu"
                        className="text-white/80 hover:text-tertiary transition-colors duration-200 p-2"
                    >
                        <RiCloseLargeLine size={28} />
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex-1 flex py-10 pl-3 lg:px-24">
                    <ul className="space-y-10">
                        {NAV_LINKS.map((link, i) => (
                            <li key={link.href}>
                                <Link
                                    ref={setLinkRef(i)}
                                    href={link.href}
                                    onClick={onClose}
                                    data-cursor-label={link.label}
                                    className="group flex items-center gap-4 sm:gap-6"
                                >
                                    <span className="font-main text-[11px] sm:text-xs tracking-[0.25em] text-white/30 tabular-nums transition-colors duration-300 group-hover:text-tertiary">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>

                                    <span className="font-secondary uppercase text-white text-[42px] sm:text-[64px] lg:text-[84px] leading-[1.05] tracking-tight transition-all duration-300 group-hover:text-tertiary group-hover:tracking-[4px]">
                                        {link.label}
                                    </span>

                                    <RiArrowRightUpLongLine
                                        size={28}
                                        className="text-tertiary opacity-0 -translate-x-4 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                                    />
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Bottom bar: socials */}
                <div
                    ref={socialRef}
                    className="flex items-center justify-between border-t border-white/10 pt-6 lg:px-24"
                >
                    <span className="text-white/30 text-[11px] uppercase tracking-[0.3em]">
                        Follow Us
                    </span>
                    <div className="flex gap-4">
                        {SOCIALS.map(({ Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                data-cursor-label={label}
                                className="border border-white/20 rounded-full p-2.5 text-white/70 transition-all duration-300 hover:bg-white hover:text-tertiary hover:border-white"
                            >
                                <Icon size={18} />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default HeaderMenu;
