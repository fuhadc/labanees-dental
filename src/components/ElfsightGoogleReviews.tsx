"use client";

import Script from "next/script";
import { BoxReveal } from "@/components/BoxReveal";

const ELFSIGHT_APP_ID = "dad9dd53-a990-46bc-9027-f44740741821";

export default function ElfsightGoogleReviews() {
  return (
    <>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />

      <BoxReveal
        origin="center"
        framed={false}
        accent={false}
        className="google-reviews-widget mt-4"
      >
        <p
          className="mb-8 text-center font-display text-[10px] uppercase tracking-[0.4em] text-[var(--accent-warm)]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Verified Google Reviews
        </p>

        <div
          className={`elfsight-app-${ELFSIGHT_APP_ID}`}
          data-elfsight-app-lazy
        />
      </BoxReveal>
    </>
  );
}
