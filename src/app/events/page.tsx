import type { Metadata } from "next";
import Image from "next/image";
import { LUMA_CALENDAR_EMBED, ASSETS, SITE } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Events — Car Part Time",
  description:
    "Upcoming programming at Car Part Time — cars, culture, and community in Brooklyn.",
};

export default function EventsPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <section className="relative overflow-hidden pt-[calc(var(--nav-height)+var(--safe-top)+2rem)] pb-12 md:pt-40 md:pb-24">
        <div className="absolute inset-0 z-0">
          <Image
            src={ASSETS.images.membership}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-charcoal/95 to-charcoal" />
        </div>

        <div className="page-container relative z-10">
          <p className="label-text">Programming</p>
          <h1 className="section-title mt-3 max-w-2xl">Events & Gatherings</h1>
          <p className="mt-4 max-w-lg text-sm text-cream/60 sm:text-base">
            Listening sessions, product drops, and community programming at our
            East Williamsburg clubhouse. Members receive early access and
            complimentary tickets to select events.
          </p>
        </div>
      </section>

      <section className="section-pad bg-charcoal">
        <div className="page-container">
          <div className="luma-embed-wrap overflow-hidden border border-cream/10 bg-charcoal-deep">
            <iframe
              src={LUMA_CALENDAR_EMBED}
              title="Car Part Time events calendar"
              allow="fullscreen; payment"
              aria-label="Car Part Time events calendar powered by Luma"
              loading="lazy"
            />
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-cream/50">{SITE.address}</p>
            <a
              href="https://lu.ma/calendar/cal-HESIMY29s0r6fKn"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-xs"
            >
              Open on Luma →
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad border-t border-cream/10 bg-charcoal-deep">
        <div className="page-container grid gap-8 md:grid-cols-2 md:gap-12">
          <div>
            <p className="label-text">Past Event</p>
            <h2 className="font-display mt-3 text-2xl text-cream sm:text-3xl">
              Field Notes 01
            </h2>
            <p className="mt-2 text-sm text-sage">An automotive listening session</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Our first vinyl listening series led by Freakout Spot&apos;s Rob
              Davis — exploring German experimental music of the 1970s and
              1980s. Period-correct cars on display, hi-fi by House Under Magic.
            </p>
          </div>
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={ASSETS.images.archivePorsche}
              alt="Field Notes 01 event at Car Part Time"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
