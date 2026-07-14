import { createFileRoute, Link } from "@tanstack/react-router";

import founder from "@/assets/founder-portrait.jpg";

export const Route = createFileRoute("/founder")({
  head: () => ({
    meta: [
      { title: "Nidhi Nilesh Rana — FloraVineStudio" },
      {
        name: "description",
        content:
          "Meet the founder and floral director behind FloraVineStudio — a quiet craft built on memory, patience, and the belief that flowers can last forever.",
      },
      { property: "og:title", content: "Nidhi Nilesh Rana — FloraVineStudio" },
      {
        property: "og:description",
        content:
          "Meet the founder and floral director behind FloraVineStudio.",
      },
      { property: "og:image", content: founder },
      { name: "twitter:image", content: founder },
    ],
    links: [
      { rel: "preload", as: "image", href: founder, fetchPriority: "high" },
    ],
  }),
  component: FounderPage,
});

const chapters = [
  {
    n: "01",
    title: "Hand over machine",
    text: "Every petal is shaped, tinted, and placed by hand. No shortcuts, no assembly lines — only the rhythm of a single maker’s attention.",
  },
  {
    n: "02",
    title: "Memory over trend",
    text: "A bouquet is not decoration. It is a vessel for a moment. Each piece is designed to carry that feeling forward, untouched by seasons.",
  },
  {
    n: "03",
    title: "Quiet over loud",
    text: "Luxury, here, is restraint. Soft palettes, clean silhouettes, and the confidence of details that reveal themselves slowly.",
  },
];

function FounderPage() {
  return (
    <>
      <section className="bg-ivory px-6 pt-40 pb-24">
        <div className="mx-auto max-w-[1240px]">
          <p className="fv-eyebrow fv-fade mb-8">The Founder</p>
          <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-charcoal fv-fade-up">
            Where memory meets{" "}
            <span className="italic text-champagne">material.</span>
          </h1>
          <p
            className="mt-10 max-w-xl text-base leading-relaxed text-warm-gray fv-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            The story of FloraVineStudio begins with a single belief: that a
            flower can outlast the moment it celebrates, and that the hands who
            make it deserve to be remembered too.
          </p>
        </div>
      </section>

      <section className="bg-ivory px-6 pb-32">
        <div className="mx-auto max-w-[1320px]">
          <div className="grid items-start gap-16 lg:grid-cols-12">
            {/* Portrait */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="fv-reveal relative aspect-[4/5] overflow-hidden bg-cream shadow-[0_40px_80px_-40px_rgba(38,38,38,0.25)]">
                  <img
                    src={founder}
                    alt="Nidhi Nilesh Rana — founder and floral director of FloraVineStudio"
                    width={1024}
                    height={1280}
                    fetchPriority="high"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 hidden bg-ivory px-5 py-4 shadow-[0_20px_40px_-20px_rgba(38,38,38,0.2)] lg:block">
                  <p className="fv-eyebrow text-[9.5px] tracking-[0.25em]">
                    FOUNDER & CREATIVE ARTIST
                  </p>
                  <p className="mt-1 font-display text-xl italic text-charcoal">
                    Nidhi Nilesh Rana
                  </p>
                  <p className="fv-eyebrow mt-1 text-[9.5px] tracking-[0.2em]">
                    FloraVineStudio
                  </p>
                </div>
              </div>
            </div>

            {/* Story */}
            <div className="lg:col-span-7 lg:pl-12">
              <p
                className="fv-eyebrow fv-fade mb-8"
                style={{ animationDelay: "100ms" }}
              >
                Nidhi Nilesh Rana · Founder & Floral Director
              </p>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-charcoal fv-fade-up">
                “I wanted to keep the feeling —{" "}
                <span className="italic text-champagne">not the flower.</span>”
              </h2>

              <div className="mt-12 space-y-6 text-sm leading-[1.8] text-warm-gray fv-fade-up">
                <p>
                  Nidhi trained in textile arts and botanical illustration
                  before turning to flowers. What began as a quiet studio
                  practice — pressing silk, shaping petals, studying how light
                  falls on a curved edge — slowly became an obsession with
                  permanence. She asked a simple question: why should something
                  so meaningful disappear in a week?
                </p>
                <p>
                  FloraVineStudio was born from that question. Every piece is
                  composed as a personal archive: a proposal, a first breath, a
                  thank-you that needs to be said slowly. Her work is not about
                  imitation; it is about translating a feeling into something that
                  can be held, kept, and passed on.
                </p>
                <p>
                  Today, Nidhi leads a small team of makers in a sunlit atelier
                  where each bouquet is built one element at a time. Her hands
                  still touch every design before it leaves for its new home.
                </p>
              </div>

              <div className="mt-14 flex flex-col items-start gap-6 sm:flex-row sm:items-center fv-fade-up">
                <Link
                  to="/create"
                  className="group inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-champagne hover:text-charcoal"
                >
                  Begin Your Keepsake
                  <span className="inline-block h-px w-6 bg-ivory transition-all group-hover:w-10 group-hover:bg-charcoal" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-3 border-b border-charcoal/30 pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal transition-colors hover:border-champagne hover:text-champagne"
                >
                  Speak with the Studio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-cream px-6 py-32">
        <div className="mx-auto max-w-[1240px]">
          <p className="fv-eyebrow mb-6 text-center">Three Quiet Beliefs</p>
          <h2 className="mx-auto max-w-2xl text-center font-display text-[clamp(2rem,4vw,3.25rem)] leading-[1.05] text-charcoal fv-fade-up">
            The code that guides{" "}
            <span className="italic text-champagne">the craft.</span>
          </h2>

          <div className="mt-20 grid gap-10 md:grid-cols-3">
            {chapters.map((c) => (
              <article
                key={c.n}
                className="group border-t border-charcoal/10 pt-8 fv-fade-up"
              >
                <span className="fv-eyebrow text-[9.5px] text-champagne">
                  {c.n}
                </span>
                <h3 className="mt-6 font-display text-2xl italic text-charcoal">
                  {c.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-warm-gray">
                  {c.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="bg-ivory px-6 py-32">
        <div className="mx-auto max-w-[920px] text-center">
          <div className="mx-auto mb-10 h-16 w-px fv-draw bg-gradient-to-b from-transparent via-champagne to-transparent" />
          <blockquote className="font-display text-[clamp(2rem,4.5vw,4rem)] font-normal italic leading-[1.05] text-charcoal fv-fade-up">
            “A finished bouquet is not the end of the work. It is the beginning
            of a memory that someone else will keep.”
          </blockquote>
          <p className="mt-10 text-[10px] font-semibold uppercase tracking-[0.3em] text-warm-gray fv-fade">
            — Nidhi Nilesh Rana
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal px-6 py-24">
        <div className="mx-auto max-w-[1240px] text-center">
          <p className="fv-eyebrow text-champagne mb-6">A Conversation</p>
          <h2 className="mx-auto max-w-3xl font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-ivory fv-fade-up">
            Let your next memory take{" "}
            <span className="italic text-champagne">shape.</span>
          </h2>
          <Link
            to="/contact"
            className="mt-12 inline-flex items-center gap-3 border-b border-ivory/40 pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors hover:border-champagne hover:text-champagne fv-fade-up"
          >
            Write to the Studio
            <span className="inline-block h-px w-6 bg-ivory/60 transition-all group-hover:w-10" />
          </Link>
        </div>
      </section>
    </>
  );
}
