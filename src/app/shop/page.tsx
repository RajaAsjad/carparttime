"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { vehicles, formatPrice } from "@/data/products";

const categories = ["all", "apparel", "accessories", "vinyl", "parts"] as const;

export default function ShopPage() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("all");

  const filtered =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <main>
      <section className="shop-hero relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <p className="label-text">Shop</p>
          <h1 className="section-title mt-3 max-w-2xl">Curated drops & goods</h1>
          <p className="mt-4 max-w-lg text-cream/60">
            Apparel, vinyl, and automotive accessories from the Car Part Time
            clubhouse. Member exclusives marked below.
          </p>
        </div>
      </section>

      {/* Category filter */}
      <section className="sticky top-[72px] z-30 border-y border-cream/10 bg-charcoal/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-4 md:px-10 lg:px-16">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2 text-xs uppercase tracking-[0.15em] transition ${
                activeCategory === cat
                  ? "bg-mustard text-charcoal"
                  : "border border-cream/15 text-cream/60 hover:text-cream"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section className="section-pad bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles for sale */}
      <section className="section-pad border-t border-cream/10 bg-charcoal-deep">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <p className="label-text">Collector Cars</p>
          <h2 className="section-title mt-3">Available Inventory</h2>
          <p className="mt-4 max-w-lg text-sm text-cream/50">
            Each vehicle documented with extensive photography. Shown by
            appointment only. Contact hello@carparttime.com for inquiries.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {vehicles
              .filter((v) => v.status === "available")
              .map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="flex flex-col justify-between border border-cream/10 bg-charcoal p-6 md:flex-row md:items-center md:gap-8"
                >
                  <div>
                    <h3 className="font-display text-xl text-cream">{vehicle.name}</h3>
                    <p className="mt-1 text-sm text-cream/50">{vehicle.subtitle}</p>
                  </div>
                  <div className="mt-4 flex items-center gap-4 md:mt-0">
                    <span className="font-display text-2xl text-mustard">
                      {formatPrice(vehicle.price)}
                    </span>
                    <a
                      href="mailto:hello@carparttime.com"
                      className="btn-outline text-xs"
                    >
                      Inquire
                    </a>
                  </div>
                </article>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
