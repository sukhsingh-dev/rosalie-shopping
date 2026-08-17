import { connection } from "next/server";

/**
 * How long to hold the loading.tsx preloader on screen, in milliseconds.
 *
 * The fallback lives exactly as long as the route segment takes to render, so this is
 * the only knob that controls it. 2200ms lands just after the last letter of the
 * cascade settles, so the loader leaves on the complete wordmark rather than
 * mid-animation. Set to 0 to disable.
 */
export const PRELOADER_HOLD_MS = 2200;

/**
 * Suspends a route segment so its loading.tsx fallback stays up for the beat above.
 *
 * `connection()` stops prerendering first — without it the pause would be spent at
 * build time and real visitors would never see the preloader at all. The trade is
 * that any page calling this renders per request instead of being fully static.
 */
export async function holdPreloader() {
    if (PRELOADER_HOLD_MS <= 0) return;
    await connection();
    await new Promise((resolve) => setTimeout(resolve, PRELOADER_HOLD_MS));
}
