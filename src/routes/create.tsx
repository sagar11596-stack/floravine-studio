import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/create")({
  head: () => ({
    meta: [
      { title: "Create Your Bouquet — FloraVineStudio" },
      {
        name: "description",
        content:
          "Compose a bespoke handcrafted bouquet, made to hold a specific memory. Tell us a little — we'll send a preview before a petal is shaped.",
      },
      { property: "og:title", content: "Create Your Bouquet — FloraVineStudio" },
      {
        property: "og:description",
        content:
          "Compose a bespoke handcrafted bouquet, made to hold a specific memory.",
      },
    ],
  }),
  component: CreatePage,
});

const palettes = [
  ["Ivory", "Champagne"],
  ["Blush", "Cream"],
  ["Sage", "Dusty Rose"],
  ["Burgundy", "Copper"],
] as const;

function CreatePage() {
  const [palette, setPalette] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="Create Yours"
        title="Compose a bouquet"
        italic="for someone."
        description="A bespoke piece, shaped over many hours. Share a little about the moment — we'll write back with a preview before any petal is shaped."
      />

      <section className="bg-cream px-6 pb-40">
        <div className="mx-auto max-w-[1080px]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("We've received your request. A note will follow shortly.");
            }}
            className="grid gap-x-12 gap-y-16 bg-ivory p-10 shadow-[0_40px_80px_-40px_rgba(38,38,38,0.2)] md:grid-cols-2 md:p-16"
          >
            <Field n="I." label="Who is this bouquet for?">
              <input
                required
                type="text"
                className="fv-input"
                placeholder="A name, or a relationship"
              />
            </Field>
            <Field n="II." label="The occasion?">
              <input
                required
                type="text"
                className="fv-input"
                placeholder="Anniversary, proposal, no occasion at all..."
              />
            </Field>
            <Field n="III." label="Favourite palette?">
              <div className="mt-2 flex flex-wrap gap-3">
                {palettes.map((p, i) => (
                  <button
                    key={p.join("-")}
                    type="button"
                    onClick={() => setPalette(i)}
                    className={`border px-5 py-2 text-[10.5px] uppercase tracking-[0.28em] transition-colors ${
                      palette === i
                        ? "border-charcoal bg-charcoal text-ivory"
                        : "border-charcoal/20 bg-transparent text-charcoal hover:border-charcoal"
                    }`}
                  >
                    {p[0]} · {p[1]}
                  </button>
                ))}
              </div>
            </Field>
            <Field n="IV." label="A handwritten note?">
              <textarea
                rows={3}
                className="fv-input resize-none"
                placeholder="A few words we'll handwrite on linen card..."
              />
            </Field>
            <Field n="V." label="When should it arrive?">
              <input type="date" className="fv-input" />
            </Field>
            <Field n="VI." label="Your email">
              <input
                required
                type="email"
                className="fv-input"
                placeholder="So we can send your preview"
              />
            </Field>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-4 bg-charcoal py-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-ivory transition-colors hover:bg-champagne hover:text-charcoal"
              >
                Create This Memory
                <span className="inline-block h-px w-6 bg-ivory transition-all group-hover:w-10 group-hover:bg-charcoal" />
              </button>
            </div>
          </form>
        </div>
      </section>

      <style>{`
        .fv-input {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid color-mix(in oklch, var(--color-charcoal) 20%, transparent);
          padding: 0.75rem 0;
          font-family: var(--font-sans);
          font-size: 0.95rem;
          color: var(--color-charcoal);
          outline: none;
          transition: border-color 200ms ease;
        }
        .fv-input:focus { border-color: var(--color-champagne); }
        .fv-input::placeholder { color: color-mix(in oklch, var(--color-warm-gray) 80%, transparent); }
      `}</style>
    </>
  );
}

function Field({
  n,
  label,
  children,
}: {
  n: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-baseline gap-3">
        <span className="fv-eyebrow text-[9.5px] text-champagne">{n}</span>
        <label className="text-[11px] uppercase tracking-[0.28em] text-warm-gray">
          {label}
        </label>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
