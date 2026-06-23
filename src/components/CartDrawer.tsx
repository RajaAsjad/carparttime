"use client";

import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/data/products";

export default function CartDrawer() {
  const {
    items,
    isOpen,
    closeCart,
    removeItem,
    updateQuantity,
    total,
    clearCart,
  } = useCart();

  return (
    <>
      <div
        className={`cart-backdrop ${isOpen ? "open" : ""}`}
        onClick={closeCart}
        aria-hidden={!isOpen}
      />

      <aside
        className={`cart-drawer ${isOpen ? "open" : ""}`}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-cream/10 px-6 py-5">
          <h2 className="font-display text-2xl text-cream">Cart</h2>
          <button
            type="button"
            onClick={closeCart}
            className="text-cream/60 transition hover:text-cream"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <p className="py-12 text-center text-sm text-cream/50">
              Your cart is empty.
            </p>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4">
                  <div className="relative h-20 w-16 shrink-0 overflow-hidden bg-charcoal-light">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="64px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-medium text-cream">{item.name}</p>
                    <p className="text-sm text-mustard">{formatPrice(item.price)}</p>
                    <div className="mt-2 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="h-7 w-7 border border-cream/20 text-cream/70"
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>
                      <span className="text-sm text-cream">{item.quantity}</span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="h-7 w-7 border border-cream/20 text-cream/70"
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        className="ml-auto text-xs text-cream/40 underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-cream/10 px-6 py-6">
            <div className="mb-4 flex justify-between text-cream">
              <span className="text-sm uppercase tracking-wider text-cream/60">Total</span>
              <span className="font-display text-xl">{formatPrice(total)}</span>
            </div>
            <button type="button" className="btn-primary w-full">
              Checkout
            </button>
            <button
              type="button"
              onClick={clearCart}
              className="mt-3 w-full text-center text-xs text-cream/40 underline"
            >
              Clear cart
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
