"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import Loader from "@/components/Loader";
import VideoBanner from "@/components/VideoBanner";
import { ASSETS } from "@/lib/assets";
import { vehicles, formatPrice } from "@/data/products";

export default function HomePage() {
  const [loaded, setLoaded] = useState(false);
  const onLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <Loader onComplete={onLoadComplete} />}

      <main className={loaded ? "opacity-100" : "opacity-0"}>
        <VideoBanner />

        {/* About */}
        <section className="section-pad bg-charcoal">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-2 md:px-10 lg:px-16">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={ASSETS.images.membership}
                alt="Car Part Time interior designed by Office of Tangible Space"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <p className="label-text">The Space</p>
              <h2 className="section-title mt-3">
                Part gallery,
                <br />
                part lounge.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-cream/60">
                A 2,000 sq ft hangar in East Williamsburg — walnut accents,
                cognac leather, sage inlays, and mustard curtains against raw
                concrete. Vintage cars on rotation, vinyl by Freakout Spot, and
                programming that spans cars, culture, and community.
              </p>
              <Link href="/membership" className="btn-outline mt-6 sm:mt-8">
                Become a Member
              </Link>
            </div>
          </div>
        </section>

        {/* Available vehicles */}
        <section className="section-pad bg-charcoal-deep">
          <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="label-text">Inventory</p>
                <h2 className="section-title mt-3">Now Available</h2>
              </div>
              <Link href="/shop" className="text-sm uppercase tracking-[0.2em] text-mustard hover:text-cream">
                View all →
              </Link>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {vehicles
                .filter((v) => v.status === "available")
                .map((vehicle) => (
                  <article key={vehicle.id} className="vehicle-card group">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover transition duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="mt-4 sm:mt-5">
                      <h3 className="font-display text-xl text-cream sm:text-2xl">{vehicle.name}</h3>
                      <p className="mt-1 text-sm text-cream/50">{vehicle.subtitle}</p>
                      <p className="mt-2 text-lg text-mustard sm:mt-3 sm:text-xl">{formatPrice(vehicle.price)}</p>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* CTA blocks */}
        <section className="section-pad bg-charcoal">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 md:grid-cols-2 md:px-10 lg:px-16">
            <Link
              href="/shop"
              className="cta-block group relative block min-h-[220px] overflow-hidden sm:min-h-[280px]"
            >
              <Image
                src={ASSETS.images.services}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="cta-overlay" />
              <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-6 sm:min-h-[280px] sm:p-8">
                <p className="label-text text-cream/70">Shop</p>
                <h3 className="font-display text-2xl text-cream sm:text-3xl">Product Drops</h3>
              </div>
            </Link>

            <Link
              href="/events"
              className="cta-block group relative block min-h-[220px] overflow-hidden sm:min-h-[280px]"
            >
              <Image
                src={ASSETS.images.archiveMercedes}
                alt=""
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="50vw"
              />
              <div className="cta-overlay" />
              <div className="relative z-10 flex h-full min-h-[220px] flex-col justify-end p-6 sm:min-h-[280px] sm:p-8">
                <p className="label-text text-cream/70">Events</p>
                <h3 className="font-display text-2xl text-cream sm:text-3xl">Programming</h3>
              </div>
            </Link>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section-pad border-t border-cream/10 bg-charcoal-deep">
          <div className="mx-auto max-w-xl px-5 text-center md:px-10">
            <p className="label-text">Newsletter</p>
            <h2 className="section-title mt-3">Stay in the loop</h2>
            <p className="mt-4 text-sm text-cream/50">
              Drops, events, and inventory updates — straight to your inbox.
            </p>
            <form
              className="newsletter-form mt-8"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Email"
                required
                className="input-field min-w-0"
                aria-label="Email for newsletter"
              />
              <button type="submit" className="btn-primary justify-self-center sm:justify-self-auto">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
