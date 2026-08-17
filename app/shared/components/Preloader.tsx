import { LOGO_PATH, LOGO_VIEWBOX, logoGroupPaths } from "./Logo";

const LETTER_STAGGER_MS = 60;

/**
 * Suspense fallback for the root segment (see app/loading.tsx).
 *
 * Deliberately a server component with zero JS: React swaps this out the instant the
 * route is ready and never runs effects for a streamed fallback, so the animation is
 * CSS-only (keyframes live in globals.css) and loops — it has to read well whether it
 * is on screen for 200ms or four seconds, and it gets no exit beat.
 */
const groups = logoGroupPaths();

const Preloader = () => (
    <div
        /* Fixed and opaque so it covers the shared Header too — loading.tsx renders
           inside the layout, not instead of it. Sits under the custom cursor. */
        className="fixed inset-0 z-[9990] flex flex-col items-center justify-center bg-white px-6"
    >
        <span className="rosalie-word mb-8 font-secondary text-[11px] uppercase tracking-[0.5em] text-primary/50">
            Elevate Your Everyday
        </span>

        <div className="relative w-[62vw] max-w-[520px]">
            <svg viewBox={LOGO_VIEWBOX} className="h-auto w-full" aria-hidden="true">
                <path
                    className="rosalie-draw"
                    d={LOGO_PATH}
                    fill="none"
                    fillRule="evenodd"
                    /* User units: the mark renders ~0.3x, so 7 lands near a 2px line. */
                    strokeWidth="7"
                    strokeLinejoin="round"
                    style={{ stroke: "var(--primary)" }}
                />
            </svg>
            <div className="absolute inset-0">
                <svg viewBox={LOGO_VIEWBOX} className="h-auto w-full" aria-hidden="true">
                    {groups.map((d, i) => (
                        <path
                            key={i}
                            className="rosalie-letter"
                            d={d}
                            fillRule="evenodd"
                            style={{
                                // Each letter lands a beat after the one to its left, and
                                // sits one step further along the secondary → tertiary ramp.
                                animationDelay: `${i * LETTER_STAGGER_MS}ms`,
                                fill: `color-mix(in oklab, var(--secondary), var(--tertiary) ${Math.round(
                                    (i / (groups.length - 1)) * 100
                                )}%)`,
                            }}
                        />
                    ))}
                </svg>
            </div>
        </div>

        <span className="mt-14 block h-px w-full max-w-[220px] overflow-hidden bg-secondary-light">
            <span className="rosalie-sweep block h-px w-1/3 bg-tertiary" />
        </span>

        <span className="sr-only" role="status">
            Loading
        </span>
    </div>
);

export default Preloader;
