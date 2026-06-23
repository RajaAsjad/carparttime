"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "@/context/CartContext";
import CartDrawer from "./CartDrawer";

const links = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/events", label: "Events" },
  { href: "/membership", label: "Membership" },
];

export default function Navigation() {
  const pathname = usePathname();
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <>
      <header
        className={`nav-header fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen ? "nav-scrolled" : ""
        }`}
        style={{ paddingTop: "var(--safe-top)" }}
      >
        <div className="mx-auto flex h-[var(--nav-height)] max-w-7xl items-center justify-between px-5 md:px-10 lg:px-16">
          <Link href="/" className="nav-logo shrink-0 text-cream" aria-label="Car Part Time home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Car Part Time" className="h-6 w-auto md:h-7" />
          </Link>

          <nav className="hidden items-center gap-6 lg:gap-8 md:flex" aria-label="Main">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link text-xs uppercase tracking-[0.2em] ${
                  pathname === link.href ? "text-mustard" : "text-cream/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-4">
            <button
              type="button"
              onClick={openCart}
              className="relative flex min-h-11 min-w-11 items-center justify-center text-xs uppercase tracking-[0.15em] text-cream/80 transition hover:text-cream sm:tracking-[0.2em]"
              aria-label={`Open cart, ${count} items`}
            >
              Cart
              {count > 0 && (
                <span className="absolute right-0 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-mustard text-[10px] font-bold text-charcoal sm:right-1">
                  {count}
                </span>
              )}
            </button>

            <button
              type="button"
              className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 md:hidden"
              onClick={() => setMenuOpen((o) => !o)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
              <span className={`hamburger-line ${menuOpen ? "open" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu-backdrop md:hidden ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      <div
        className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="flex flex-col gap-5" aria-label="Mobile">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-[clamp(2rem,10vw,3rem)] leading-tight ${
                pathname === link.href ? "text-mustard" : "text-cream"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      <CartDrawer />
    </>
  );
}
