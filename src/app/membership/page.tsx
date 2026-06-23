import type { Metadata } from "next";
import Image from "next/image";
import { ASSETS, SITE } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Membership — Car Part Time",
  description:
    "Your third space for cars and community. $200/month membership in Williamsburg, Brooklyn.",
};

const benefits = [
  "Access to our clubhouse, designed by Office of Tangible Space",
  "Annual programming that spans cars, culture, and community",
  "Product drops and curated collaborations",
  "Access to full-space buyout",
  "Optional vehicle storage",
];

export default function MembershipPage() {
  return (
    <main>
      <section className="relative min-h-[60vh] overflow-hidden pt-32 md:pt-40">
        <Image
          src={ASSETS.images.membership}
          alt="Car Part Time clubhouse interior"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 mx-auto max-w-7xl px-5 pb-20 md:px-10 lg:px-16">
          <p className="label-text text-sage">Membership</p>
          <h1 className="section-title mt-3 max-w-2xl">Become a member</h1>
          <p className="mt-4 max-w-lg text-cream/75">
            Your third space for cars and community. Located in Williamsburg,
            Brooklyn NYC.
          </p>
        </div>
      </section>

      <section className="section-pad bg-charcoal">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 md:grid-cols-2 md:px-10 lg:px-16">
          <div>
            <h2 className="font-display text-3xl text-cream">
              &ldquo;Buy a car, stay a while&rdquo;
            </h2>
            <p className="mt-6 text-base leading-relaxed text-cream/60">
              Car Part Time is an automotive concept space built for drivers,
              collectors, and friends. A place to celebrate the machines we love.
            </p>
            <p className="mt-4 text-sm text-cream/50">{SITE.address}</p>
          </div>

          <div className="border border-cream/10 bg-charcoal-deep p-8">
            <h3 className="text-xs font-medium uppercase tracking-[0.25em] text-sage">
              Programming
            </h3>
            <ul className="mt-6 space-y-4">
              {benefits.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-cream/70">
                  <span className="text-mustard">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-cream/10 bg-charcoal-deep">
        <div className="mx-auto max-w-xl px-5 md:px-10">
          <h2 className="section-title text-center">Membership structure</h2>
          <div className="mt-10 space-y-4 text-center">
            <p className="font-display text-5xl text-mustard">$200<span className="text-2xl text-cream/50">/mo</span></p>
            <ul className="space-y-2 text-sm text-cream/60">
              <li>One membership tier</li>
              <li>No initiation fee</li>
              <li>Membership capped at 150 in Year 1</li>
            </ul>
          </div>

          <form
            className="mt-12 space-y-4"
            action="https://www.carparttime.com/membership"
            method="get"
          >
            <input type="text" placeholder="Full Name" required className="input-field w-full" />
            <input type="email" placeholder="Email" required className="input-field w-full" />
            <input type="tel" placeholder="Phone" required className="input-field w-full" />
            <input type="text" placeholder="Zip Code" required className="input-field w-full" />
            <select required className="input-field w-full" defaultValue="">
              <option value="" disabled>Interested in Storage?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <select required className="input-field w-full" defaultValue="">
              <option value="" disabled>How&apos;d You Hear About Us?</option>
              <option value="socialMedia">Social Media</option>
              <option value="referral">Referral</option>
              <option value="press">Press</option>
              <option value="webSearch">Web Search</option>
              <option value="other">Other</option>
            </select>
            <button type="submit" className="btn-primary w-full">
              Apply
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
