import { createFileRoute, Link } from "@tanstack/react-router";

import heroFlower from "@/assets/hero-sacred-bloom.jpg";
import founder from "@/assets/founder-portrait.jpg";
import galleryWhite from "@/assets/gallery-01.jpg";
import galleryRose from "@/assets/gallery-02.jpg";
import craftWire from "@/assets/craft-stage-01.png";
import craftPetals from "@/assets/craft-stage-02.png";
import craftRibbon from "@/assets/craft-stage-03.png";
import craftBouquet from "@/assets/craft-stage-04.png";
import collectionBlush from "@/assets/collection-01.jpg";
import collectionBurgundy from "@/assets/collection-02.jpg";
import collectionPastel from "@/assets/collection-03.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FloraVineStudio — Flowers That Never Fade" },
      {
        name: "description",
        content:
          "Handcrafted floral keepsakes designed to preserve your most meaningful memories. Forever flowers, individually crafted in our studio.",
      },
      {
        property: "og:title",
        content: "FloraVineStudio — Flowers That Never Fade",
      },
      {
        property: "og:description",
        content:
          "Handcrafted floral keepsakes designed to preserve your most meaningful memories.",
      },
      { property: "og:image", content: heroFlower },
      { name: "twitter:image", content: heroFlower },
    ],
    links: [
      { rel: "preload", as: "image", href: heroFlower, fetchPriority: "high" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <ChapterOneHero />
      <ChapterTwoPhilosophy />
      <ChapterThreeFounder />
      <ChapterFourCraft />
      <ChapterFiveGallery />
      <ChapterSixForever />
      <ChapterSevenCollections />
      <ChapterEightCreate />
      <ChapterNineStories />
    </>
  );
}

/* ───────────────────────── Chapter 1 — Hero ───────────────────────── */
function ChapterOneHero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory px-6 pt-32 pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[60vh] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-champagne/50 to-transparent fv-draw" />
      </div>

      <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="fv-eyebrow fv-fade mb-8">Chapter I · The Opening</p>
          <h1 className="font-display text-[clamp(2.75rem,7vw,6.5rem)] font-medium leading-[0.95] tracking-[-0.015em] text-charcoal fv-fade-up">
            Flowers That
            <br />
            <span className="italic text-champagne">Never Fade.</span>
          </h1>
          <p
            className="mt-10 max-w-[44ch] text-base leading-relaxed text-warm-gray fv-fade-up"
            style={{ animationDelay: "200ms" }}
          >
            Handcrafted floral keepsakes designed to preserve your most meaningful
            memories. Every petal is shaped by hand. Every bouquet, a quiet
            ceremony. None of it will ever wilt.
          </p>
          <div
            className="mt-12 flex flex-col items-start gap-6 fv-fade-up sm:flex-row sm:items-center"
            style={{ animationDelay: "400ms" }}
          >
            <Link
              to="/collections"
              className="group inline-flex items-center gap-3 bg-charcoal px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-champagne hover:text-charcoal"
            >
              Explore the Collection
              <span className="inline-block h-px w-6 bg-ivory transition-all group-hover:w-10 group-hover:bg-charcoal" />
            </Link>
            <Link
              to="/create"
              className="inline-flex items-center gap-3 border-b border-charcoal/30 pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal transition-colors hover:border-champagne hover:text-champagne"
            >
              Create Your Bouquet
            </Link>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div className="fv-reveal relative aspect-[3/4] overflow-hidden bg-cream shadow-[0_40px_80px_-40px_rgba(38,38,38,0.25)]">
            <img
              src={heroFlower}
              alt="Handcrafted floral arrangement from FloraVine Studio"
              width={1280}
              height={1600}
              className="h-full w-full object-cover"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden bg-ivory px-7 py-5 shadow-[0_20px_40px_-20px_rgba(38,38,38,0.2)] lg:block">
            <p className="text-[9.5px] font-semibold uppercase tracking-[0.35em] text-charcoal/60">FloraVineStudio</p>
            <p className="mt-3 font-display text-[1.6rem] italic leading-tight text-charcoal">Sacred Bloom</p>
            <p className="mt-2 text-[13px] leading-relaxed text-warm-gray">Handcrafted for Ganesh Celebrations</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="fv-eyebrow text-[9px]">Scroll</span>
        <span className="block h-12 w-px bg-charcoal/30" />
      </div>
    </section>
  );
}

/* ───────────────────── Chapter 2 — Philosophy ───────────────────── */
function ChapterTwoPhilosophy() {
  return (
    <section className="bg-cream py-40 px-6">
      <div className="mx-auto max-w-[920px] text-center">
        <p className="fv-eyebrow mb-10">Chapter II · A Quiet Belief</p>
        <blockquote className="font-display text-[clamp(2rem,5vw,4.25rem)] font-normal italic leading-[1.05] text-charcoal">
          “Some flowers bloom for days.
          <br />
          Some memories bloom forever.”
        </blockquote>
        <div className="mx-auto mt-12 h-px w-16 bg-champagne" />
        <p className="mx-auto mt-10 max-w-md text-sm leading-relaxed text-warm-gray">
          We don't make replicas of flowers. We make keepsakes of moments —
          quiet objects that stay where you place them, season after season,
          year after year.
        </p>
      </div>
    </section>
  );
}

/* ─────────────────── Chapter 3 — The Founder ───────────────────── */
function ChapterThreeFounder() {
  return (
    <section className="bg-ivory px-6 py-32">
      <div className="mx-auto max-w-[1320px]">
        <p className="fv-eyebrow mb-6">Chapter III · The Founder</p>
        <h2 className="mb-20 max-w-2xl font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-charcoal">
          Where memory meets{" "}
          <span className="italic text-champagne">material.</span>
        </h2>

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

          {/* Story teaser */}
          <div className="lg:col-span-7 lg:pl-12">
            <p className="fv-eyebrow mb-8">Nidhi Nilesh Rana · Founder & Floral Director</p>
            <h3 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.05] text-charcoal fv-fade-up">
              "I wanted to keep the feeling —{" "}
              <span className="italic text-champagne">not the flower.</span>"
            </h3>

            <div className="mt-12 space-y-6 text-sm leading-[1.8] text-warm-gray fv-fade-up">
              <p>
                Nidhi trained in textile arts and botanical illustration before
                turning to flowers. What began as a quiet studio practice —
                pressing silk, shaping petals, studying how light falls on a
                curved edge — slowly became an obsession with permanence. She
                asked a simple question: why should something so meaningful
                disappear in a week?
              </p>
            </div>

            <Link
              to="/founder"
              className="group mt-12 inline-flex items-center gap-3 border-b border-charcoal/30 pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal transition-colors hover:border-champagne hover:text-champagne fv-fade-up"
            >
              Read the full story
              <span className="inline-block h-px w-6 bg-charcoal/30 transition-all group-hover:w-10 group-hover:bg-champagne" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Chapter 4 — The Birth of a Flower ─────────────────── */
function ChapterFourCraft() {
  const steps = [
    { n: "01", label: "Wire", caption: "The Skeleton", img: craftWire },
    { n: "02", label: "Petal", caption: "The Bloom", img: craftPetals },
    { n: "03", label: "Ribbon", caption: "The Embrace", img: craftRibbon },
    { n: "04", label: "Bouquet", caption: "The Keepsake", img: craftBouquet },
  ];
  return (
    <section className="bg-ivory py-40 px-6">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="fv-eyebrow mb-6">Chapter IV · The Making</p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-charcoal">
              The anatomy of <span className="italic">a keepsake.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-warm-gray">
            Each bouquet begins as a single length of wire and a length of
            quiet. From there, hands take over. No machines. No shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {steps.map((s, i) => (
            <figure
              key={s.n}
              className={`group flex flex-col ${i % 2 === 1 ? "md:mt-20" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={s.img}
                  alt={`${s.label} — ${s.caption}`}
                  loading="lazy"
                  width={800}
                  height={1024}
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between">
                <span className="fv-eyebrow text-[9.5px]">{s.n}</span>
                <span className="font-display text-lg italic text-charcoal">
                  {s.label}
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-warm-gray">
                  {s.caption}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Chapter 5 — The Gallery ─────────────────── */
function ChapterFiveGallery() {
  return (
    <section className="bg-stone/60 py-40 px-6">
      <div className="mx-auto max-w-[1320px] space-y-32">
        <header className="max-w-2xl">
          <p className="fv-eyebrow mb-6">Chapter V · The Gallery</p>
          <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-charcoal">
            Bouquets, placed as <span className="italic">they deserve.</span>
          </h2>
        </header>

        <article className="grid items-center gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-ivory shadow-[0_50px_100px_-50px_rgba(38,38,38,0.35)]">
              <img
                src={galleryWhite}
                alt="L'Hiver Blanc — handcrafted ivory bouquet"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 lg:pl-12">
            <p className="fv-eyebrow mb-6">Piece No. 01 · L'Hiver Blanc</p>
            <h3 className="font-display text-5xl italic text-charcoal">
              The First Yes
            </h3>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-warm-gray">
              Fifty-two silk-wrapped petals, each shaped by hand to echo the
              quiet shock of a promise made. Composed in cream, dressed in
              champagne ribbon.
            </p>
            <dl className="mt-12 divide-y divide-charcoal/10">
              {[
                ["Time to craft", "12 hours"],
                ["Elements", "52 petals"],
                ["Palette", "Ivory · Champagne"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-4">
                  <dt className="fv-eyebrow text-[9.5px]">{k}</dt>
                  <dd className="text-xs tracking-[0.15em] text-charcoal">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/collections"
              className="mt-10 inline-flex items-center gap-3 border-b border-charcoal pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal hover:border-champagne hover:text-champagne"
            >
              View the Piece
            </Link>
          </div>
        </article>

        <article className="grid items-center gap-16 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-5 lg:pr-12">
            <p className="fv-eyebrow mb-6">Piece No. 02 · Rosée d'Automne</p>
            <h3 className="font-display text-5xl italic text-charcoal">
              Forever Together
            </h3>
            <p className="mt-8 max-w-md text-sm leading-relaxed text-warm-gray">
              Dusty rose and sage, composed for anniversaries that have outgrown
              counting. A weight in the hand that says: still, after all this.
            </p>
            <dl className="mt-12 divide-y divide-charcoal/10">
              {[
                ["Time to craft", "16 hours"],
                ["Elements", "68 petals"],
                ["Palette", "Rose · Sage"],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between py-4">
                  <dt className="fv-eyebrow text-[9.5px]">{k}</dt>
                  <dd className="text-xs tracking-[0.15em] text-charcoal">{v}</dd>
                </div>
              ))}
            </dl>
            <Link
              to="/collections"
              className="mt-10 inline-flex items-center gap-3 border-b border-charcoal pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal hover:border-champagne hover:text-champagne"
            >
              View the Piece
            </Link>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-7">
            <div className="aspect-[4/5] overflow-hidden bg-ivory shadow-[0_50px_100px_-50px_rgba(38,38,38,0.35)]">
              <img
                src={galleryRose}
                alt="Rosée d'Automne — dusty rose handcrafted bouquet"
                loading="lazy"
                width={1280}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

/* ─────────────────── Chapter 6 — Why Forever Flowers ─────────────────── */
function ChapterSixForever() {
  return (
    <section className="bg-ivory py-40 px-6">
      <div className="mx-auto max-w-[1240px]">
        <p className="fv-eyebrow mb-6 text-center">Chapter VI · The Difference</p>
        <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-charcoal">
          One blooms for a week. <span className="italic">One holds a lifetime.</span>
        </h2>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <div className="relative overflow-hidden bg-stone/50 p-10 md:p-14">
            <p className="fv-eyebrow text-warm-gray">Fresh Flowers</p>
            <p className="mt-6 font-display text-3xl italic text-warm-gray">
              Day 1 — vivid. Day 7 — gone.
            </p>
            <ul className="mt-12 space-y-5 text-sm text-warm-gray">
              {[
                "Wilt within days",
                "Require water, light, care",
                "Carry the memory only until they fall",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="h-px w-6 bg-warm-gray/50" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden bg-charcoal p-10 text-ivory md:p-14">
            <p className="fv-eyebrow text-champagne">FloraVine Keepsakes</p>
            <p className="mt-6 font-display text-3xl italic text-ivory">
              Day 1. Year 1. Year 20.
            </p>
            <ul className="mt-12 space-y-5 text-sm text-ivory/80">
              {[
                "Hold their shape and colour for years",
                "No water, no fading, no end",
                "Carry the memory as long as you want them to",
              ].map((t) => (
                <li key={t} className="flex items-center gap-4">
                  <span className="h-px w-6 bg-champagne" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Chapter 7 — Collections by Emotion ─────────────────── */
function ChapterSevenCollections() {
  const collections = [
    {
      title: "For The First Yes",
      caption: "Proposals · New beginnings",
      img: collectionBlush,
      offset: "lg:mt-0",
    },
    {
      title: "Forever Together",
      caption: "Anniversaries · Quiet milestones",
      img: collectionBurgundy,
      offset: "lg:mt-24",
    },
    {
      title: "Little Miracles",
      caption: "Newborns · Welcomes",
      img: collectionPastel,
      offset: "lg:mt-12",
    },
  ];
  return (
    <section className="bg-cream py-40 px-6">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="fv-eyebrow mb-6">Chapter VII · The Collections</p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-charcoal">
              Chosen by <span className="italic">feeling,</span> not category.
            </h2>
          </div>
          <Link
            to="/collections"
            className="border-b border-charcoal pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal hover:border-champagne hover:text-champagne"
          >
            All Collections
          </Link>
        </div>

        <div className="grid gap-10 md:grid-cols-3">
          {collections.map((c) => (
            <Link
              key={c.title}
              to="/collections"
              className={`group block ${c.offset}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-stone/60">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={900}
                  height={1152}
                  className="h-full w-full object-cover transition-transform duration-[1600ms] ease-out group-hover:scale-[1.04]"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-display text-2xl italic text-charcoal">
                  {c.title}
                </h3>
                <span className="text-[10.5px] uppercase tracking-[0.28em] text-warm-gray">
                  →
                </span>
              </div>
              <p className="mt-2 text-[11px] uppercase tracking-[0.28em] text-warm-gray">
                {c.caption}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Chapter 8 — Create Your Memory ─────────────────── */
function ChapterEightCreate() {
  return (
    <section className="relative overflow-hidden bg-charcoal py-40 px-6 text-ivory">
      <div className="mx-auto grid max-w-[1240px] items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="fv-eyebrow mb-6 text-champagne">Chapter VIII · The Bespoke</p>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.02] text-ivory">
            Compose a memory <br />
            <span className="italic text-champagne">for someone.</span>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-ivory/70">
            Tell us who it's for, what occasion, the colours they love. We'll
            compose a bouquet that holds the feeling — and we'll send a preview
            before a single petal is shaped.
          </p>
          <Link
            to="/create"
            className="group mt-12 inline-flex items-center gap-4 bg-champagne px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal transition-colors hover:bg-ivory"
          >
            Begin Your Bouquet
            <span className="inline-block h-px w-6 bg-charcoal transition-all group-hover:w-10" />
          </Link>
        </div>

        <div className="lg:col-span-5">
          <ul className="space-y-6 border-l border-ivory/15 pl-8">
            {[
              ["I.", "Who is it for?"],
              ["II.", "Which occasion?"],
              ["III.", "Their favourite colours?"],
              ["IV.", "A handwritten note?"],
              ["V.", "When should it arrive?"],
            ].map(([n, q]) => (
              <li key={n} className="flex items-baseline gap-6">
                <span className="fv-eyebrow text-[9.5px] text-champagne">
                  {n}
                </span>
                <span className="font-display text-2xl italic text-ivory">
                  {q}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Chapter 9 — Customer Stories ─────────────────── */
function ChapterNineStories() {
  const stories = [
    {
      title: "The First Anniversary",
      body: "Fifty-two petals over eight hours. Gifted to celebrate a year of being chosen. Still on the mantel.",
      meta: "London · 2024",
    },
    {
      title: "For Mum, On A Quiet Tuesday",
      body: "No occasion. Only a daughter, two cups of tea, and a bouquet of soft cream she still keeps by her window.",
      meta: "Edinburgh · 2024",
    },
    {
      title: "Welcome, Little One",
      body: "Composed in the days before she arrived. The first thing she ever saw in soft focus. Still beside her crib.",
      meta: "Bristol · 2024",
    },
  ];

  return (
    <section className="bg-ivory py-40 px-6">
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-20 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="fv-eyebrow mb-6">Chapter IX · The Stories</p>
            <h2 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] text-charcoal">
              Every bouquet keeps <span className="italic">a quiet story.</span>
            </h2>
          </div>
          <Link
            to="/stories"
            className="border-b border-charcoal pb-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-charcoal hover:border-champagne hover:text-champagne"
          >
            Read All Stories
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {stories.map((s) => (
            <article
              key={s.title}
              className="flex flex-col justify-between border-t border-charcoal/15 pt-10"
            >
              <div>
                <h3 className="font-display text-2xl italic text-charcoal">
                  {s.title}
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-warm-gray">
                  {s.body}
                </p>
              </div>
              <p className="fv-eyebrow mt-12 text-[9.5px]">{s.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
