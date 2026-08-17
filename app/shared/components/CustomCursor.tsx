"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { PiHandPointingFill } from "react-icons/pi";

const HOVER_SELECTOR = "a, button, [data-cursor-label]";
const LABEL_OFFSET_X = 20;
const LABEL_OFFSET_Y = 22;

const labelFor = (el: Element) => {
    const custom = el.getAttribute("data-cursor-label");
    if (custom) return custom;
    return el.tagName === "BUTTON" ? "Click" : "View";
};

const Cursor = () => {
    const rootRef = useRef<HTMLDivElement>(null);
    const ringWrapRef = useRef<HTMLDivElement>(null);
    const ringRef = useRef<HTMLDivElement>(null);
    const pointWrapRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const handRef = useRef<HTMLSpanElement>(null);
    const labelRootRef = useRef<HTMLDivElement>(null);
    const labelWrapRef = useRef<HTMLDivElement>(null);
    const pillRef = useRef<HTMLSpanElement>(null);
    const labelTextRef = useRef<HTMLSpanElement>(null);

    useGSAP(
        () => {
            const root = rootRef.current!;
            const ringWrap = ringWrapRef.current!;
            const ring = ringRef.current!;
            const pointWrap = pointWrapRef.current!;
            const dot = dotRef.current!;
            const hand = handRef.current!;
            const labelRoot = labelRootRef.current!;
            const labelWrap = labelWrapRef.current!;
            const pill = pillRef.current!;
            const labelText = labelTextRef.current!;

            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            const lag = reduced ? 0 : 0.5;

            gsap.set(ring, { xPercent: -50, yPercent: -50 });
            gsap.set(dot, { xPercent: -50, yPercent: -50 });
            // The glyph's fingertip sits at the top-centre of its box, so nudge it
            // down-right to put the tip exactly on the pointer.
            gsap.set(hand, { xPercent: -32, yPercent: -6, scale: 0.4, autoAlpha: 0 });
            gsap.set(pill, { clipPath: "inset(0% 100% 0% 0%)", autoAlpha: 0, x: -10 });

            const ringX = gsap.quickTo(ringWrap, "x", { duration: lag, ease: "power3" });
            const ringY = gsap.quickTo(ringWrap, "y", { duration: lag, ease: "power3" });
            const pointX = gsap.quickTo(pointWrap, "x", { duration: reduced ? 0 : 0.12, ease: "power3" });
            const pointY = gsap.quickTo(pointWrap, "y", { duration: reduced ? 0 : 0.12, ease: "power3" });
            const labelX = gsap.quickTo(labelWrap, "x", { duration: reduced ? 0 : 0.22, ease: "power3" });
            const labelY = gsap.quickTo(labelWrap, "y", { duration: reduced ? 0 : 0.22, ease: "power3" });

            let visible = false;
            let hovered: Element | null = null;
            let pillWidth = 0;
            let lastX = 0;
            let lastY = 0;

            // Keep the label inside the viewport: flip it to the left of the pointer
            // when there is no room on the right.
            const labelPos = (x: number) =>
                x + LABEL_OFFSET_X + pillWidth > window.innerWidth - 8
                    ? x - LABEL_OFFSET_X - pillWidth
                    : x + LABEL_OFFSET_X;

            const onMove = (e: PointerEvent) => {
                lastX = e.clientX;
                lastY = e.clientY;

                if (!visible) {
                    // Jump to the pointer before fading in so nothing flies in from 0,0.
                    gsap.set(ringWrap, { x: lastX, y: lastY });
                    gsap.set(pointWrap, { x: lastX, y: lastY });
                    gsap.set(labelWrap, { x: labelPos(lastX), y: lastY + LABEL_OFFSET_Y });
                    visible = true;
                    gsap.to([root, labelRoot], { autoAlpha: 1, duration: 0.3, ease: "power2.out" });
                }

                ringX(lastX);
                ringY(lastY);
                pointX(lastX);
                pointY(lastY);
                labelX(labelPos(lastX));
                labelY(lastY + LABEL_OFFSET_Y);
            };

            const setHovered = (on: boolean) => {
                // Idle ring collapses out of the way; the hand takes over.
                gsap.to(ring, {
                    scale: on ? 0.2 : 1,
                    autoAlpha: on ? 0 : 1,
                    duration: 0.35,
                    ease: "power3.out",
                    overwrite: "auto",
                });
                gsap.to(dot, {
                    scale: on ? 0 : 1,
                    autoAlpha: on ? 0 : 1,
                    duration: 0.25,
                    ease: "power3.out",
                    overwrite: "auto",
                });
                gsap.to(hand, {
                    scale: on ? 1 : 0.4,
                    autoAlpha: on ? 1 : 0,
                    duration: on ? 0.4 : 0.2,
                    ease: on ? "back.out(2.6)" : "power2.in",
                    overwrite: "auto",
                });
                gsap.to(pill, {
                    clipPath: on ? "inset(0% 0% 0% 0%)" : "inset(0% 100% 0% 0%)",
                    autoAlpha: on ? 1 : 0,
                    x: on ? 0 : -10,
                    duration: on ? 0.4 : 0.2,
                    ease: on ? "power3.out" : "power2.in",
                    overwrite: "auto",
                });
            };

            const onOver = (e: PointerEvent) => {
                const target = (e.target as Element | null)?.closest?.(HOVER_SELECTOR);
                if (!target || target === hovered) return;
                const first = !hovered;
                hovered = target;
                labelText.textContent = labelFor(target);
                pillWidth = pill.offsetWidth;
                // Re-anchor instantly when the label first appears, otherwise let it glide.
                if (first) gsap.set(labelWrap, { x: labelPos(lastX), y: lastY + LABEL_OFFSET_Y });
                setHovered(true);
            };

            const onOut = (e: PointerEvent) => {
                if (!hovered) return;
                const next = e.relatedTarget as Element | null;
                if (next && hovered.contains(next)) return;
                // Moving straight onto another target: let onOver relabel instead of
                // wiping the pill out and back in.
                if (next?.closest?.(HOVER_SELECTOR)) return;
                hovered = null;
                setHovered(false);
            };

            const onDown = () => {
                gsap.to(hand, { scale: 0.82, rotate: -12, duration: 0.15, ease: "power2.out" });
                gsap.to(ring, { scale: hovered ? 0.2 : 0.78, duration: 0.2, ease: "power2.out" });
                gsap.to(dot, { scale: hovered ? 0 : 0.6, duration: 0.2, ease: "power2.out" });
            };

            const onUp = () => {
                gsap.to(hand, {
                    scale: hovered ? 1 : 0.4,
                    rotate: 0,
                    duration: 0.4,
                    ease: "back.out(3)",
                });
                gsap.to(ring, { scale: hovered ? 0.2 : 1, duration: 0.35, ease: "back.out(2.5)" });
                gsap.to(dot, { scale: hovered ? 0 : 1, duration: 0.35, ease: "back.out(2.5)" });
            };

            const onLeaveWindow = () => {
                visible = false;
                gsap.to([root, labelRoot], { autoAlpha: 0, duration: 0.2 });
            };

            window.addEventListener("pointermove", onMove);
            window.addEventListener("pointerover", onOver);
            window.addEventListener("pointerout", onOut);
            window.addEventListener("pointerdown", onDown);
            window.addEventListener("pointerup", onUp);
            document.addEventListener("mouseleave", onLeaveWindow);

            document.documentElement.classList.add("has-custom-cursor");

            return () => {
                window.removeEventListener("pointermove", onMove);
                window.removeEventListener("pointerover", onOver);
                window.removeEventListener("pointerout", onOut);
                window.removeEventListener("pointerdown", onDown);
                window.removeEventListener("pointerup", onUp);
                document.removeEventListener("mouseleave", onLeaveWindow);
                document.documentElement.classList.remove("has-custom-cursor");
            };
        },
        { scope: rootRef }
    );

    return (
        <>
            {/* Zero-sized so the blend layer only covers the cursor itself, not the whole
                viewport. The blend lives on this wrapper (not on the children) because a
                stacking context here would otherwise isolate them from the page. */}
            <div
                ref={rootRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 h-0 w-0 z-9999 mix-blend-difference opacity-0"
            >
                <div ref={ringWrapRef} className="absolute left-0 top-0 will-change-transform">
                    <div
                        ref={ringRef}
                        className="absolute rounded-full border-[1.5px] border-solid border-white/90"
                        style={{ width: 24, height: 24 }}
                    />
                </div>
                <div ref={pointWrapRef} className="absolute left-0 top-0 will-change-transform">
                    <div ref={dotRef} className="absolute h-1.5 w-1.5 rounded-full bg-white" />
                    <span ref={handRef} className="absolute block text-white">
                        <PiHandPointingFill size={26} />
                    </span>
                </div>
            </div>

            {/* The label rides outside the blend layer so the pill keeps its brand colour. */}
            <div
                ref={labelRootRef}
                aria-hidden="true"
                className="pointer-events-none fixed left-0 top-0 h-0 w-0 z-9998 opacity-0"
            >
                <div ref={labelWrapRef} className="absolute left-0 top-0 will-change-transform">
                    <span ref={pillRef} className="absolute block bg-page-dark/75 px-2 py-1 shadow-lg">
                        <span
                            ref={labelTextRef}
                            className="block font-secondary text-[10px] uppercase leading-none tracking-[0.18em] text-white whitespace-nowrap"
                        />
                    </span>
                </div>
            </div>
        </>
    );
};

const CustomCursor = () => {
    const [enabled, setEnabled] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
        const update = () => setEnabled(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);

    return enabled ? <Cursor /> : null;
};

export default CustomCursor;
