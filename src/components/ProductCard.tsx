"use client";

import Image from "next/image";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";
import { useCart } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <article className="product-card group">
      <div className="product-image-wrap relative aspect-[4/5] overflow-hidden bg-charcoal-light">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 bg-mustard px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-charcoal">
            {product.badge}
          </span>
        )}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <button
          type="button"
          onClick={() => addItem(product)}
          className="product-add-btn hidden sm:block"
          aria-label={`Add ${product.name} to cart`}
        >
          Add to Cart
        </button>
      </div>
      <div className="mt-4">
        <p className="text-[10px] uppercase tracking-[0.15em] text-sage sm:tracking-[0.2em]">
          {product.category}
        </p>
        <h3 className="mt-1 font-display text-lg text-cream sm:text-xl">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-cream/50">
          {product.description}
        </p>
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-lg text-mustard">{formatPrice(product.price)}</p>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="btn-primary shrink-0 px-4 py-2 text-[0.6rem] sm:hidden"
            aria-label={`Add ${product.name} to cart`}
          >
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
