"use client";

import { ASSETS } from "@/lib/assets";
import HeroCanvas from "./HeroCanvas";

export default function VideoBanner() {
  return (
    <section className="hero-banner relative min-h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={ASSETS.video.poster}
      >
        <source src={ASSETS.video.webm} type="video/webm" />
        <source src={ASSETS.video.mp4} type="video/mp4" />
      </video>

      <div className="hero-overlay absolute inset-0 z-[1]" aria-hidden />

      <HeroCanvas />

      <div className="relative z-[3] flex min-h-[100svh] flex-col justify-end px-5 pb-16 pt-32 md:px-10 md:pb-24 lg:px-16">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.35em] text-sage">
          Brooklyn, NY
        </p>
        <h1 className="font-display max-w-4xl text-[clamp(2.5rem,8vw,5.5rem)] leading-[0.95] text-cream">
          Buy a car,
          <br />
          <span className="text-mustard">stay a while.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-cream/75 md:text-lg">
          An automotive concept space for drivers, collectors, and friends.
          Showroom, lounge, and community — designed by Office of Tangible Space.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
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
