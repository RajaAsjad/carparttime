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
    <main>
      <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
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

        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <p className="label-text">Programming</p>
          <h1 className="section-title mt-3 max-w-2xl">Events & Gatherings</h1>
          <p className="mt-4 max-w-lg text-cream/60">
            Listening sessions, product drops, and community programming at our
            East Williamsburg clubhouse. Members receive early access and
            complimentary tickets to select events.
          </p>
        </div>
      </section>

      <section className="section-pad bg-charcoal">
        <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-16">
          <div className="luma-embed-wrap overflow-hidden border border-cream/10 bg-charcoal-deep">
            <iframe
              src={LUMA_CALENDAR_EMBED}
              width="100%"
              height="600"
              frameBorder="0"
              style={{ border: "none" }}
              allow="fullscreen; payment"
              aria-label="Car Part Time events calendar powered by Luma"
              className="min-h-[500px] w-full md:min-h-[600px]"
            />
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-cream/50">
              {SITE.address}
            </p>
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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-10 lg:px-16">
          <div>
            <p className="label-text">Past Event</p>
            <h2 className="font-display mt-3 text-3xl text-cream">
              Field Notes 01
            </h2>
            <p className="mt-2 text-sm text-sage">An automotive listening session</p>
            <p className="mt-4 text-sm leading-relaxed text-cream/60">
              Our first vinyl listening series led by Freakout Spot&apos;s Rob
              Davis — exploring German experimental music of the 1970s and
              1980s. Period-correct cars on display, hi-fi by House Under Magic.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden">
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
