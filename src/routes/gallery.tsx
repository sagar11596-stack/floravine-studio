import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";

import { PageHero } from "@/components/page-hero";
import heroFlower from "@/assets/hero-sacred-bloom.jpg";
import galleryWhite from "@/assets/gallery-01.jpg";
import galleryRose from "@/assets/gallery-02.jpg";
import collectionBlush from "@/assets/collection-01.jpg";
import collectionBurgundy from "@/assets/collection-02.jpg";
import collectionPastel from "@/assets/collection-03.jpg";
import craftBouquet from "@/assets/craft-stage-04.png";
import craftPetals from "@/assets/craft-stage-02.png";
import craftRibbon from "@/assets/craft-stage-03.png";
import craftWire from "@/assets/craft-stage-01.png";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — FloraVineStudio" },
      {
        name: "description",
        content:
          "An editorial archive of our handcrafted floral keepsakes, material studies, and atelier moments.",
      },
      { property: "og:title", content: "Gallery — FloraVineStudio" },
      {
        property: "og:description",
        content: "An editorial archive of handcrafted floral keepsakes.",
      },
      { property: "og:image", content: heroFlower },
    ],
  }),
  component: GalleryPage,
});

type Category = "Pieces" | "Materials" | "Atelier";

type Frame = {
  src: string;
  title: string;
  caption: string;
  year: string;
  category: Category;
  span: "tall" | "wide" | "square" | "portrait";
};

const frames: Frame[] = [
  { src: galleryWhite, title: "L'Hiver Blanc", caption: "Ivory · Champagne", year: "MMXXV · 01", category: "Pieces", span: "tall" },
  { src: craftPetals, title: "Study of a Petal", caption: "Fibre · Light", year: "MMXXV · 02", category: "Materials", span: "square" },
  { src: galleryRose, title: "Rosée d'Automne", caption: "Rose · Sage", year: "MMXXV · 03", category: "Pieces", span: "portrait" },
  { src: craftWire, title: "The Armature", caption: "Brass · Silk thread", year: "MMXXV · 04", category: "Materials", span: "wide" },
  { src: collectionBlush, title: "Tendresse", caption: "Blush · Ivory", year: "MMXXV · 05", category: "Pieces", span: "square" },
  { src: craftBouquet, title: "Composed by Hand", caption: "Atelier, morning", year: "MMXXV · 06", category: "Atelier", span: "tall" },
  { src: collectionPastel, title: "Premier Souffle", caption: "Pastel · Cream", year: "MMXXV · 07", category: "Pieces", span: "portrait" },
  { src: craftRibbon, title: "The Binding", caption: "Silk ribbon, hand-tied", year: "MMXXV · 08", category: "Atelier", span: "wide" },
  { src: collectionBurgundy, title: "Minuit", caption: "Burgundy · Copper", year: "MMXXV · 09", category: "Pieces", span: "square" },
  { src: heroFlower, title: "The Thread", caption: "First fibre, first bloom", year: "MMXXV · 10", category: "Atelier", span: "portrait" },
];

const filters: Array<"All" | Category> = ["All", "Pieces", "Materials", "Atelier"];

function GalleryPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? frames : frames.filter((f) => f.category === filter)),
    [filter],
  );

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight") setActive((i) => (i === null ? 0 : (i + 1) % visible.length));
      if (e.key === "ArrowLeft") setActive((i) => (i === null ? 0 : (i - 1 + visible.length) % visible.length));
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active, visible.length]);

  const spanClass = (span: Frame["span"]) => {
    switch (span) {
      case "tall":
        return "md:row-span-2 aspect-[3/4] md:aspect-auto md:h-full";
      case "wide":
        return "md:col-span-2 aspect-[16/10]";
      case "portrait":
        return "aspect-[4/5]";
      default:
        return "aspect-square";
    }
  };

  return (
    <>
      <PageHero
        eyebrow="The Gallery"
        title="An archive of"
        italic="quiet moments."
        description="Ten frames from the studio — finished pieces, material studies, and mornings at the bench. Click any frame to enter."
      />

      <section className="bg-ivory px-6 pb-40">
        <div className="mx-auto max-w-[1320px]">
          {/* Filter rail */}
          <div className="mb-16 flex flex-wrap items-center justify-between gap-6 border-y border-charcoal/15 py-5">
            <div className="flex flex-wrap items-center gap-8">
              {filters.map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFilter(f)}
                  className={`text-[10.5px] uppercase tracking-[0.32em] transition-colors ${
                    filter === f ? "text-charcoal" : "text-warm-gray hover:text-charcoal"
                  }`}
                >
                  <span
                    className={`mr-3 inline-block h-px w-6 align-middle transition-all ${
                      filter === f ? "bg-champagne w-10" : "bg-charcoal/25"
                    }`}
                  />
                  {f}
                </button>
              ))}
            </div>
            <p className="text-[10.5px] uppercase tracking-[0.32em] text-warm-gray">
              {String(visible.length).padStart(2, "0")} / {String(frames.length).padStart(2, "0")} frames
            </p>
          </div>

          {/* Editorial masonry */}
          <div className="grid auto-rows-[180px] grid-cols-1 gap-6 sm:auto-rows-[220px] sm:grid-cols-2 md:auto-rows-[260px] md:grid-cols-3 md:gap-8">
            {visible.map((frame, i) => (
              <button
                key={frame.title}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative block overflow-hidden bg-cream text-left ${spanClass(frame.span)}`}
              >
                <img
                  src={frame.src}
                  alt={frame.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.04]"
                />
                <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 to-charcoal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute inset-x-6 bottom-6 flex items-baseline justify-between text-ivory opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2">
                  <span className="font-display text-2xl italic">{frame.title}</span>
                  <span className="text-[10px] uppercase tracking-[0.32em] text-ivory/75">
                    {frame.year}
                  </span>
                </span>
                {/* museum corner marks */}
                <span className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l border-t border-ivory/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r border-t border-ivory/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute left-3 bottom-3 h-3 w-3 border-l border-b border-ivory/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <span className="pointer-events-none absolute right-3 bottom-3 h-3 w-3 border-r border-b border-ivory/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {active !== null && visible[active] && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[80] flex items-center justify-center bg-charcoal/95 px-6 py-10 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            className="absolute right-6 top-6 text-[10.5px] uppercase tracking-[0.32em] text-ivory/80 hover:text-ivory"
            aria-label="Close"
          >
            Close ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? 0 : (i - 1 + visible.length) % visible.length));
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[10.5px] uppercase tracking-[0.32em] text-ivory/70 hover:text-ivory"
          >
            ← Prev
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActive((i) => (i === null ? 0 : (i + 1) % visible.length));
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[10.5px] uppercase tracking-[0.32em] text-ivory/70 hover:text-ivory"
          >
            Next →
          </button>

          <figure
            className="relative flex max-h-full max-w-6xl flex-col items-center gap-6"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={visible[active].src}
              alt={visible[active].title}
              className="max-h-[75vh] w-auto object-contain shadow-[0_40px_80px_-40px_rgba(0,0,0,0.6)]"
            />
            <figcaption className="flex w-full items-baseline justify-between border-t border-ivory/20 pt-4 text-ivory">
              <div>
                <p className="font-display text-2xl italic">{visible[active].title}</p>
                <p className="mt-1 text-[10.5px] uppercase tracking-[0.32em] text-ivory/60">
                  {visible[active].caption}
                </p>
              </div>
              <p className="text-[10.5px] uppercase tracking-[0.32em] text-ivory/60">
                {visible[active].year} · {String(active + 1).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}
              </p>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
