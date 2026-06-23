"use client";

import { ASSETS } from "@/lib/assets";
import HeroCanvas from "./HeroCanvas";

export default function VideoBanner() {
  return (
    <section className="hero-banner relative min-h-[100svh] min-h-[100dvh] w-full">
      <div className="hero-video-wrap" aria-hidden>
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster={ASSETS.video.poster}
        >
          <source src={ASSETS.video.webm} type="video/webm" />
          <source src={ASSETS.video.mp4} type="video/mp4" />
        </video>
      </div>

      <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />

      <HeroCanvas />

      <div className="relative z-[3] flex min-h-[100svh] min-h-[100dvh] w-full flex-col justify-end px-5 pb-[max(4rem,var(--safe-bottom))] pt-[calc(var(--nav-height)+var(--safe-top)+2rem)] md:px-10 md:pb-24 lg:px-16">
        <p className="mb-3 text-[0.65rem] font-medium uppercase tracking-[0.25em] text-sage md:mb-4 md:text-xs md:tracking-[0.35em]">
          Brooklyn, NY
        </p>
        <h1 className="font-display max-w-4xl text-[clamp(2.25rem,10vw,5.5rem)] leading-[0.95] text-cream">
          Buy a car,
          <br />
          <span className="text-mustard">stay a while.</span>
        </h1>
        <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/75 sm:mt-6 sm:text-base md:text-lg">
          An automotive concept space for drivers, collectors, and friends.
          Showroom, lounge, and community — designed by Office of Tangible Space.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
          <a href="/shop" className="btn-primary">
            Shop Drops
          </a>
          <a href="/events" className="btn-outline">
            View Events
          </a>
        </div>
      </div>
    </section>
  );
}
