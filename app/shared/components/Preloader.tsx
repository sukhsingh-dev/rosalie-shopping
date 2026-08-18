"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* Ported from the "Rosalie Logo Animation" design file. Ink rises through a
   ghosted wordmark behind a soft wavy surface line, with a glow riding the
   crest and a hairline progress bar underneath.

   The design loops fill -> dissolve forever; a real loader needs an exit, so
   the loop keeps running until the page reports ready, then the current fill is
   held at full and the overlay lifts away. */

const CYCLE = 2.6; // Fill (2s) + Dissolve (0.6s), as authored
const FILL_END = CYCLE - 0.45; // ink has cleared the top of the mark
const HOLD = CYCLE - 0.4; // frame we freeze on while exiting
const MAX_WAIT = 8; // seconds before we stop waiting on `load`

const WAVE_POINTS = 16;
const WAVE_AMP = (19 / 277) * 100; // 19px against the design's 277px-tall mark
const GLOW_SPREAD = [26, -4, -34].map((px) => (px / 277) * 100);

const GHOST = 0.1;
const ACCENT = "#ff00b1";
const INK = "#f00a59";

// The mark is painted as a solid colour through the logo silhouette, so the same
// asset the header inlines can be recoloured here without a second file.
const MASK = {
    WebkitMaskImage: "url(/logo.svg)",
    maskImage: "url(/logo.svg)",
    WebkitMaskSize: "100% 100%",
    maskSize: "100% 100%",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
} as const;

// Hiding overflow takes the scrollbar away, which widens the viewport and nudges
// centred content sideways as the loader leaves. Measure the gap the lock itself
// opens up and pad it straight back, so the reveal holds still. Measuring after
// the fact means this no-ops on overlay-scrollbar platforms and anywhere
// `scrollbar-gutter` already reserves the space.
const lockScroll = () => {
    const before = document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    const gap = document.documentElement.clientWidth - before;
    if (gap > 0) document.body.style.paddingRight = `${gap}px`;
};

// Both properties are cleared together, so the scrollbar and the padding that
// stands in for it swap over within a single frame.
const unlockScroll = () => {
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
};

const clamp01 = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);
const ramp = (t: number, start: number, end: number) => clamp01((t - start) / (end - start));
const easeInOutSine = (p: number) => -(Math.cos(Math.PI * p) - 1) / 2;
const easeOutCubic = (p: number) => 1 - (1 - p) ** 3;

// Wavy top edge of the rising ink, as a clip-path polygon. Percentages keep it
// responsive; the design's px values are expressed against its own mark height.
const inkClip = (level: number, phase: number) => {
    const pts: string[] = [];
    for (let i = 0; i <= WAVE_POINTS; i++) {
        const x = (i / WAVE_POINTS) * 100;
        const y = level + WAVE_AMP * Math.sin(phase + (i / WAVE_POINTS) * Math.PI * 3.2);
        pts.push(`${x.toFixed(2)}% ${y.toFixed(2)}%`);
    }
    pts.push("100% 140%", "0% 140%");
    return `polygon(${pts.join(", ")})`;
};

const glowGradient = (level: number) => {
    const y = Math.min(Math.max(level, -12), 112);
    const [a, b, c] = GLOW_SPREAD;
    return `linear-gradient(to bottom, rgba(255,255,255,0) ${(y - a).toFixed(2)}%, ${ACCENT} ${(y - b).toFixed(2)}%, rgba(255,255,255,0) ${(y - c).toFixed(2)}%)`;
};

// t = 0 state, rendered on the server so nothing flashes before hydration.
const INITIAL_CLIP = inkClip(106, 0);

const Preloader = () => {
    const [done, setDone] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const markRef = useRef<HTMLDivElement>(null);
    const inkRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);
    const barRef = useRef<HTMLDivElement>(null);
    const barFillRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const ink = inkRef.current!;
            const glow = glowRef.current!;
            const bar = barRef.current!;
            const barFill = barFillRef.current!;

            const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

            const frame = (t: number) => {
                const rise = -0.06 + 1.16 * easeInOutSine(ramp(t, 0, FILL_END));
                const level = (1 - rise) * 100;
                const phase = (t / CYCLE) * Math.PI * 4;
                const clip = inkClip(level, phase);

                ink.style.clipPath = clip;
                ink.style.opacity = String(1 - easeOutCubic(ramp(t, CYCLE - 0.4, CYCLE - 0.02)));

                const glowOn = Math.min(ramp(t, 0, 0.2), 1 - ramp(t, CYCLE - 0.55, CYCLE - 0.3));
                glow.style.opacity = String(0.5 * glowOn);
                glow.style.background = glowGradient(level);

                barFill.style.transform = `scaleX(${easeInOutSine(ramp(t, 0.05, CYCLE - 0.4))})`;
                bar.style.opacity = String(1 - ramp(t, CYCLE - 0.35, CYCLE - 0.05));
            };

            // Hold the finished frame, then lift the overlay off the page.
            const exit = () => {
                frame(HOLD);
                gsap.timeline({
                    onComplete: () => {
                        unlockScroll();
                        setDone(true);
                    },
                })
                    .to(bar, { autoAlpha: 0, duration: 0.25, ease: "power2.out" })
                    .to(markRef.current, { scale: 1.06, duration: 0.8, ease: "power2.inOut" }, 0)
                    .to(rootRef.current, { autoAlpha: 0, duration: 0.6, ease: "power2.inOut" }, 0.15);
            };

            let ready = document.readyState === "complete";
            const onLoad = () => {
                ready = true;
            };
            if (!ready) window.addEventListener("load", onLoad);

            lockScroll();

            // Reduced motion gets the finished mark and a plain fade, no wave.
            if (reduced) {
                const wait = gsap.delayedCall(0.4, () => {
                    if (ready) exit();
                    else wait.restart(true);
                });
                frame(HOLD);

                return () => {
                    wait.kill();
                    window.removeEventListener("load", onLoad);
                    unlockScroll();
                };
            }

            let t = 0;
            let elapsed = 0;
            let running = true;

            const onTick = (_time: number, deltaTime: number) => {
                // Clamp the step so a backgrounded tab does not jump the loop.
                const dt = Math.min(deltaTime, 50) / 1000;
                elapsed += dt;
                t += dt;

                // Readiness is only honoured once the ink has topped out, so the
                // mark never vanishes mid-fill.
                if (t >= FILL_END && (ready || elapsed >= MAX_WAIT)) {
                    running = false;
                    gsap.ticker.remove(onTick);
                    exit();
                    return;
                }

                if (t >= CYCLE) t -= CYCLE;
                frame(t);
            };

            frame(0);
            gsap.ticker.add(onTick);

            return () => {
                if (running) gsap.ticker.remove(onTick);
                window.removeEventListener("load", onLoad);
                unlockScroll();
            };
        },
        { scope: rootRef }
    );

    if (done) return null;

    return (
        <div
            ref={rootRef}
            aria-hidden="true"
            className="fixed inset-0 z-9990 flex flex-col items-center justify-center bg-[#FFF5F6]"
        >
            <div ref={markRef} className="relative aspect-1741/689 w-[min(700px,64vw)]">
                <div className="absolute inset-0" style={{ ...MASK, background: INK, opacity: GHOST }} />
                <div
                    ref={inkRef}
                    className="absolute inset-0"
                    style={{ clipPath: INITIAL_CLIP, WebkitClipPath: INITIAL_CLIP }}
                >
                    <div className="absolute inset-0" style={{ ...MASK, background: INK }} />
                    <div
                        ref={glowRef}
                        className="absolute inset-0 opacity-0"
                        style={{ ...MASK, mixBlendMode: "screen" }}
                    />
                </div>
            </div>

            <div
                ref={barRef}
                className="relative mt-14.5 h-0.5 w-60 overflow-hidden rounded-sm bg-[rgba(45,42,44,0.10)]"
            >
                {/* The collapsed start state is inline rather than `scale-x-0`:
                    Tailwind v4 compiles that to the standalone `scale` property,
                    which multiplies with `transform` instead of being overridden
                    by it, and would pin the bar at zero width all the way through. */}
                <div
                    ref={barFillRef}
                    className="absolute inset-0 origin-left bg-[#ff00b1]"
                    style={{ transform: "scaleX(0)" }}
                />
            </div>
        </div>
    );
};

export default Preloader;
