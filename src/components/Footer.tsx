import Link from "next/link";
import { SITE } from "@/lib/assets";

export default function Footer() {
  return (
    <footer className="border-t border-cream/10 bg-charcoal pb-[var(--safe-bottom)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:gap-12 sm:py-16 md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:px-16">
        <div className="md:col-span-2">
          <div className="footer-logo mb-5 sm:mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.svg" alt="Car Part Time" className="h-6 w-auto" />
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-cream/50">
            {SITE.tagline}. A third space for cars and community at {SITE.address}.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-sage sm:mb-4 sm:tracking-[0.25em]">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-cream">
                {SITE.email}
              </a>
            </li>
            <li className="text-cream/50">{SITE.address}</li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-sage sm:mb-4 sm:tracking-[0.25em]">
            Links
          </h3>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-cream/70 sm:grid-cols-1 sm:space-y-2">
            <li>
              <Link href="/shop" className="hover:text-cream">Shop</Link>
            </li>
            <li>
              <Link href="/events" className="hover:text-cream">Events</Link>
            </li>
            <li>
              <Link href="/membership" className="hover:text-cream">Membership</Link>
            </li>
            <li>
              <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                Instagram
              </a>
            </li>
            <li>
              <a href={SITE.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-cream">
                TikTok
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/5 px-5 py-5 text-center text-xs text-cream/30 sm:py-6 md:px-10">
        © {new Date().getFullYear()} Car Part Time LLC — Brooklyn, NY
      </div>
    </footer>
  );
}
