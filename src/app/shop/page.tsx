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
    <main className="w-full overflow-x-hidden">
      <section className="shop-hero relative overflow-hidden pt-[calc(var(--nav-height)+var(--safe-top)+2rem)] pb-12 md:pt-40 md:pb-24">
        <div className="page-container">
          <p className="label-text">Shop</p>
          <h1 className="section-title mt-3 max-w-2xl">Curated drops & goods</h1>
          <p className="mt-4 max-w-lg text-sm text-cream/60 sm:text-base">
            Apparel, vinyl, and automotive accessories from the Car Part Time
            clubhouse. Member exclusives marked below.
          </p>
        </div>
      </section>

      <section className="sticky-below-nav border-y border-cream/10 bg-charcoal/95 backdrop-blur-md">
        <div className="page-container flex gap-2 overflow-x-auto py-3 hide-scrollbar sm:py-4">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 px-4 py-2.5 text-xs uppercase tracking-[0.12em] transition sm:tracking-[0.15em] ${
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

      <section className="section-pad bg-charcoal">
        <div className="page-container">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-cream/10 bg-charcoal-deep">
        <div className="page-container">
          <p className="label-text">Collector Cars</p>
          <h2 className="section-title mt-3">Available Inventory</h2>
          <p className="mt-4 max-w-lg text-sm text-cream/50">
            Each vehicle documented with extensive photography. Shown by
            appointment only. Contact hello@carparttime.com for inquiries.
          </p>

          <div className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-2">
            {vehicles
              .filter((v) => v.status === "available")
              .map((vehicle) => (
                <article
                  key={vehicle.id}
                  className="flex flex-col gap-4 border border-cream/10 bg-charcoal p-5 sm:p-6 md:flex-row md:items-center md:justify-between md:gap-8"
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display text-lg text-cream sm:text-xl">{vehicle.name}</h3>
                    <p className="mt-1 text-sm text-cream/50">{vehicle.subtitle}</p>
                  </div>
                  <div className="flex shrink-0 flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
                    <span className="font-display text-xl text-mustard sm:text-2xl">
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
