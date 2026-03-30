/**
 * ReviewsSection — "Unsere Google-Bewertungen" style band.
 * Combines a centered heading + subtitle and a row of review cards
 * inspired by the Azzawi screenshot (black background, gold accents).
 */

import SectionHeader from "@/components/SectionHeader";

const reviews = [
  {
    name: "Christoph Mathä",
    text: "Sehr nettes und zuvorkommendes Team und sehr professionell wirkender Doktor.",
    time: "3 months ago",
  },
  {
    name: "Edmonda Lekaj",
    text: "Sehr angenehme Atmosphäre, man fühlt sich sofort gut aufgehoben. Präzise und sorgfältige Arbeit.",
    time: "3 months ago",
  },
  {
    name: "Manar Soltan",
    text: "If you think that you need a good and healthy smile, go to this clinic and you can get a flawless smile.",
    time: "2 months ago",
  },
  {
    name: "Manuel Remso",
    text: "Die Mundhygiene war ausgezeichnet! Freundliches und nettes Personal. Allgemein sehr professionell.",
    time: "4 months ago",
  },
  {
    name: "Martin",
    text: "In my opinion the best dentist in Vienna.",
    time: "4 months ago",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="before-after"
      aria-label="Before / After & Google Reviews"
      className="bg-[var(--bg-dark)]"
    >
      <SectionHeader title="Unsere Google-Bewertungen" align="center" />

      <div className="section-padding-x section-padding-y mx-auto max-w-[90rem]">
        <p className="text-center text-sm text-[var(--text-muted-strong)]">
          Was unsere Patienten sagen
        </p>

        <div className="mt-4 flex items-center justify-center gap-1 text-[var(--accent-warm)]">
          {Array.from({ length: 5 }).map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <span key={i} aria-hidden>
              ★
            </span>
          ))}
          <span className="sr-only">5 out of 5 stars</span>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex flex-col justify-between rounded-xl bg-[var(--bg-soft)] px-4 py-4 text-sm shadow-card"
            >
              <div>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-semibold">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">
                        {review.name}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {review.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[var(--accent-warm)] text-xs">
                    {Array.from({ length: 5 }).map((_, i) => (
                      // eslint-disable-next-line react/no-array-index-key
                      <span key={i} aria-hidden>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-[var(--text-muted-strong)]">
                  {review.text}
                </p>
              </div>
              <div className="mt-3 flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                <span>Google review</span>
                <span>Verified</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

