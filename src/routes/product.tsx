import { createFileRoute, Link } from "@tanstack/react-router";
import { useCallback, useMemo, useRef, useState } from "react";
import { toast } from "sonner";
import { Heart } from "lucide-react";

import galleryWhite from "@/assets/gallery-01.jpg";
import galleryRose from "@/assets/gallery-02.jpg";
import collectionBlush from "@/assets/collection-01.jpg";
import collectionPastel from "@/assets/collection-03.jpg";
import collectionBurgundy from "@/assets/collection-02.jpg";
import craftPetals from "@/assets/craft-stage-02.png";
import craftWire from "@/assets/craft-stage-01.png";
import craftRibbon from "@/assets/craft-stage-03.png";
import craftBouquet from "@/assets/craft-stage-04.png";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "L'Hiver Blanc — FloraVineStudio" },
      {
        name: "description",
        content:
          "A handcrafted bouquet in ivory and champagne. Rotate, examine the fibre, and compose the piece to your memory.",
      },
      { property: "og:title", content: "L'Hiver Blanc — FloraVineStudio" },
      { property: "og:image", content: galleryWhite },
    ],
  }),
  component: ProductPage,
});

// eight-frame turntable, cycled from the studio's editorial imagery
const rotationFrames = [
  galleryWhite,
  craftBouquet,
  galleryRose,
  craftPetals,
  collectionBlush,
  collectionPastel,
  collectionBurgundy,
  craftRibbon,
];

const palettes = [
  { id: "ivory", name: "Ivoire", hex: "#F1E9DC", note: "Ivory · Champagne" },
  { id: "blush", name: "Tendresse", hex: "#E8CFC5", note: "Blush · Cream" },
  { id: "rose", name: "Rosée", hex: "#C99A8D", note: "Rose · Sage" },
  { id: "burgundy", name: "Minuit", hex: "#6A2A2A", note: "Burgundy · Copper" },
  { id: "pastel", name: "Premier", hex: "#D9D4C4", note: "Pastel · Cream" },
] as const;

const ribbons = [
  { id: "silk-ivory", name: "Silk · Ivory" },
  { id: "velvet-noir", name: "Velvet · Noir" },
  { id: "linen-sand", name: "Linen · Sand" },
];

const sizes = [
  { id: "petite", name: "Petite", stems: "9 stems", w: "22 cm" },
  { id: "signature", name: "Signature", stems: "17 stems", w: "32 cm" },
  { id: "atelier", name: "Atelier", stems: "27 stems", w: "44 cm" },
];

const closeUps = [
  { img: craftPetals, label: "The Petal", meta: "Hand-shaped chenille · 0.4 mm" },
  { img: craftWire, label: "The Stem", meta: "Annealed brass wire · matte" },
  { img: craftRibbon, label: "The Binding", meta: "Silk ribbon · hand-torn edge" },
];

function ProductPage() {
  const [frame, setFrame] = useState(0);
  const [palette, setPalette] = useState<(typeof palettes)[number]["id"]>("ivory");
  const [ribbon, setRibbon] = useState(ribbons[0].id);
  const [size, setSize] = useState(sizes[1].id);
  const [dedication, setDedication] = useState("");
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const [wishlisted, setWishlisted] = useState(false);
  const dragRef = useRef<{ startX: number; startFrame: number } | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const activePalette = useMemo(
    () => palettes.find((p) => p.id === palette) ?? palettes[0],
    [palette],
  );
  const activeSize = useMemo(() => sizes.find((s) => s.id === size) ?? sizes[1], [size]);

  const basePrice = 340;
  const sizeAddon = size === "atelier" ? 220 : size === "petite" ? -80 : 0;
  const price = basePrice + sizeAddon;

  const onPointerDown = useCallback(
    (e: React.PointerEvent) => {
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
      dragRef.current = { startX: e.clientX, startFrame: frame };
    },
    [frame],
  );
  const onPointerMove = useCallback((e: React.PointerEvent) => {
    if (!dragRef.current || !stageRef.current) return;
    const width = stageRef.current.clientWidth;
    const delta = e.clientX - dragRef.current.startX;
    const step = Math.round((delta / width) * rotationFrames.length * 1.4);
    const next =
      (dragRef.current.startFrame - step) % rotationFrames.length;
    setFrame(next < 0 ? next + rotationFrames.length : next);
  }, []);
  const onPointerUp = useCallback(() => {
    dragRef.current = null;
  }, []);

  const onZoomMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setZoom({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const toggleWishlist = useCallback(() => {
    setWishlisted((prev) => {
      const next = !prev;
      if (next) {
        toast("A memory has been saved.", {
          description: "L'Hiver Blanc · added to your keepsakes",
        });
      } else {
        toast("Released from your keepsakes.", {
          description: "L'Hiver Blanc · removed",
        });
      }
      return next;
    });
  }, []);

  return (
    <main className="bg-ivory pt-32 pb-32">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <p className="fv-eyebrow">
          <Link to="/collections" className="hover:text-champagne">Collections</Link>
          <span className="mx-3 text-stone">/</span>
          L'Hiver Blanc
        </p>
      </div>

      {/* Chapter 1 — Turntable + editorial header */}
      <section className="mx-auto mt-10 grid max-w-[1400px] gap-14 px-6 md:px-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
        {/* Stage */}
        <div>
          <div
            ref={stageRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onMouseMove={onZoomMove}
            onMouseLeave={() => setZoom(null)}
            className="relative aspect-[4/5] cursor-grab select-none overflow-hidden bg-cream active:cursor-grabbing"
            style={{ touchAction: "pan-y" }}
          >
            {rotationFrames.map((src, i) => (
              <img
                key={src}
                src={src}
                alt={`L'Hiver Blanc — view ${i + 1}`}
                draggable={false}
                loading={i === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                  i === frame ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}

            {/* Zoom lens */}
            {zoom && (
              <div
                aria-hidden
                className="pointer-events-none absolute h-40 w-40 rounded-full border border-ivory/70 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] hidden md:block"
                style={{
                  left: `calc(${zoom.x}% - 5rem)`,
                  top: `calc(${zoom.y}% - 5rem)`,
                  backgroundImage: `url(${rotationFrames[frame]})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "300% 300%",
                  backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                }}
              />
            )}

            {/* Corner marks */}
            <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-charcoal/40" />
            <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-charcoal/40" />
            <span className="absolute left-4 bottom-4 h-3 w-3 border-l border-b border-charcoal/40" />
            <span className="absolute right-4 bottom-4 h-3 w-3 border-r border-b border-charcoal/40" />

            <div className="pointer-events-none absolute inset-x-0 bottom-4 flex items-center justify-center gap-4 text-[10px] uppercase tracking-[0.32em] text-charcoal/70">
              <span>◁</span>
              <span>Drag to rotate · {String(frame + 1).padStart(2, "0")} / {rotationFrames.length}</span>
              <span>▷</span>
            </div>
          </div>

          {/* Frame thumbs */}
          <div className="mt-5 grid grid-cols-8 gap-2">
            {rotationFrames.map((src, i) => (
              <button
                key={src + i}
                type="button"
                onClick={() => setFrame(i)}
                aria-label={`View frame ${i + 1}`}
                className={`aspect-square overflow-hidden border transition-all ${
                  i === frame ? "border-charcoal" : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right — story + configurator */}
        <div className="lg:pt-6">
          <p className="fv-eyebrow">Edition N°01 · The First Yes</p>
          <h1 className="mt-6 font-display text-[clamp(2.5rem,5vw,4.25rem)] leading-[1.02] text-charcoal">
            L'Hiver <span className="italic text-champagne">Blanc.</span>
          </h1>
          <button
            type="button"
            onClick={toggleWishlist}
            aria-pressed={wishlisted}
            aria-label={wishlisted ? "Remove from keepsakes" : "Save to keepsakes"}
            className="group mt-6 inline-flex items-center gap-3 text-[10.5px] uppercase tracking-[0.32em] text-charcoal transition-colors hover:text-champagne"
          >
            <span
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all ${
                wishlisted
                  ? "border-champagne bg-champagne/10"
                  : "border-charcoal/30 group-hover:border-champagne"
              }`}
            >
              <Heart
                className={`h-4 w-4 transition-all ${
                  wishlisted ? "fill-champagne text-champagne scale-110" : "text-charcoal"
                }`}
              />
            </span>
            {wishlisted ? "Kept in your memory" : "Save to keepsakes"}
          </button>
          <p className="mt-6 max-w-md text-[15px] leading-[1.8] text-warm-gray">
            Nine hours in the atelier. Eighty-four petals, each shaped between thumb and
            forefinger. A quiet bouquet made to hold the shape of a morning that will
            not come again.
          </p>

          <div className="mt-10 flex items-center gap-6 border-y border-charcoal/15 py-6">
            <p className="font-display text-3xl text-charcoal">${price}</p>
            <span className="fv-rule" style={{ height: "2.5rem", width: "1px" }} />
            <p className="text-[11px] uppercase tracking-[0.28em] text-warm-gray">
              Made to order · 3 – 4 weeks
            </p>
          </div>

          {/* Palette */}
          <div className="mt-10">
            <div className="flex items-baseline justify-between">
              <p className="fv-eyebrow">Palette</p>
              <p className="font-display text-lg italic text-charcoal">
                {activePalette.name}
                <span className="ml-3 text-[10px] not-italic uppercase tracking-[0.28em] text-warm-gray">
                  {activePalette.note}
                </span>
              </p>
            </div>
            <div className="mt-5 flex gap-4">
              {palettes.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setPalette(p.id)}
                  aria-label={p.name}
                  className={`relative h-11 w-11 rounded-full transition-transform ${
                    palette === p.id ? "scale-110" : "hover:scale-105"
                  }`}
                  style={{ backgroundColor: p.hex }}
                >
                  {palette === p.id && (
                    <span className="absolute -inset-1.5 rounded-full border border-charcoal" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-10">
            <p className="fv-eyebrow">Composition</p>
            <div className="mt-5 grid grid-cols-3 gap-3">
              {sizes.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setSize(s.id)}
                  className={`flex flex-col items-start border p-4 text-left transition-colors ${
                    size === s.id
                      ? "border-charcoal bg-cream"
                      : "border-stone hover:border-charcoal/40"
                  }`}
                >
                  <span className="font-display text-xl italic text-charcoal">{s.name}</span>
                  <span className="mt-1 text-[10.5px] uppercase tracking-[0.24em] text-warm-gray">
                    {s.stems} · {s.w}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Ribbon */}
          <div className="mt-10">
            <p className="fv-eyebrow">Ribbon</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {ribbons.map((r) => (
                <button
                  key={r.id}
                  type="button"
                  onClick={() => setRibbon(r.id)}
                  className={`px-4 py-2 text-[10.5px] uppercase tracking-[0.28em] transition-colors ${
                    ribbon === r.id
                      ? "bg-charcoal text-ivory"
                      : "border border-stone text-charcoal hover:border-charcoal"
                  }`}
                >
                  {r.name}
                </button>
              ))}
            </div>
          </div>

          {/* Dedication */}
          <div className="mt-10">
            <p className="fv-eyebrow">A quiet dedication</p>
            <p className="mt-3 text-[13px] leading-relaxed text-warm-gray">
              Hand-inscribed on the inner ribbon, in ink. Kept between you and the piece.
            </p>
            <textarea
              value={dedication}
              onChange={(e) => setDedication(e.target.value.slice(0, 80))}
              placeholder="For the morning you said yes —"
              rows={2}
              className="mt-4 w-full resize-none border-b border-charcoal/25 bg-transparent pb-3 font-display text-xl italic text-charcoal placeholder:text-warm-gray/60 focus:border-charcoal focus:outline-none"
            />
            <p className="mt-2 text-right text-[10px] uppercase tracking-[0.28em] text-warm-gray">
              {dedication.length} / 80
            </p>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="group relative flex-1 overflow-hidden bg-charcoal py-5 text-[11px] uppercase tracking-[0.32em] text-ivory transition-colors hover:bg-charcoal/90"
            >
              <span className="relative">Commission this piece</span>
            </button>
            <Link
              to="/create"
              className="flex items-center justify-center border border-charcoal px-8 py-5 text-[11px] uppercase tracking-[0.32em] text-charcoal transition-colors hover:bg-charcoal hover:text-ivory"
            >
              Compose bespoke
            </Link>
          </div>

          <p className="mt-6 text-[11px] uppercase tracking-[0.28em] text-warm-gray">
            Shipped in a keepsake box · Complimentary worldwide
          </p>
        </div>
      </section>

      {/* Chapter 2 — Material close-ups */}
      <section className="mx-auto mt-40 max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <p className="fv-eyebrow">Chapter II</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-charcoal md:text-5xl">
              A study in <span className="italic text-champagne">material.</span>
            </h2>
          </div>
          <p className="max-w-lg text-[15px] leading-[1.8] text-warm-gray md:ml-auto">
            Every material is chosen for how it holds light and time. Here, a closer
            look at the three that make the piece.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {closeUps.map((c) => (
            <figure key={c.label} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={c.img}
                  alt={c.label}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.06]"
                />
                <div className="pointer-events-none absolute inset-0 bg-charcoal/0 transition-colors duration-700 group-hover:bg-charcoal/10" />
              </div>
              <figcaption className="mt-5 flex items-baseline justify-between border-b border-charcoal/15 pb-3">
                <span className="font-display text-2xl italic text-charcoal">{c.label}</span>
                <span className="text-[10px] uppercase tracking-[0.28em] text-warm-gray">
                  {c.meta}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* Chapter 3 — Specification */}
      <section className="mx-auto mt-40 max-w-[1400px] px-6 md:px-12">
        <div className="grid gap-16 border-t border-charcoal/15 pt-16 md:grid-cols-2">
          <div>
            <p className="fv-eyebrow">Chapter III</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] text-charcoal md:text-5xl">
              The specifics,<br />
              <span className="italic text-champagne">quietly noted.</span>
            </h2>
            <p className="mt-8 max-w-md text-[15px] leading-[1.8] text-warm-gray">
              Documented as one would document a small work on paper — because that
              is, in the end, what this is.
            </p>
          </div>

          <dl className="divide-y divide-charcoal/15 text-sm">
            {[
              ["Edition", "N°01 — limited to 24 pieces / year"],
              ["Composition", `${activeSize.stems} · ${activeSize.w} across`],
              ["Palette", `${activePalette.name} — ${activePalette.note}`],
              ["Ribbon", ribbons.find((r) => r.id === ribbon)?.name ?? ""],
              ["Materials", "Cotton chenille · brass wire · silk"],
              ["Atelier time", "≈ 9 hours, one pair of hands"],
              ["Signature", "Hand-numbered on the base stem"],
              ["Care", "Kept from direct sun. No water, no vase."],
            ].map(([k, v]) => (
              <div key={k} className="grid grid-cols-[140px_1fr] gap-6 py-4">
                <dt className="text-[10.5px] uppercase tracking-[0.28em] text-warm-gray">
                  {k}
                </dt>
                <dd className="text-charcoal">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Chapter 4 — Provenance / story quote */}
      <section className="mx-auto mt-40 max-w-[900px] px-6 text-center md:px-12">
        <span className="fv-rule mx-auto" />
        <p className="mt-10 font-display text-3xl italic leading-[1.35] text-charcoal md:text-4xl">
          "She kept it on the mantel. Nine years. It looked the same on the ninth
          winter as it did on the first."
        </p>
        <p className="mt-8 text-[10.5px] uppercase tracking-[0.32em] text-warm-gray">
          — Elin H., commissioned N°01 · 2017
        </p>
      </section>
    </main>
  );
}
