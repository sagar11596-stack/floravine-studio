import { createFileRoute } from "@tanstack/react-router";

import craftWire from "@/assets/craft-stage-01.png";
import craftPetals from "@/assets/craft-stage-02.png";
import craftRibbon from "@/assets/craft-stage-03.png";
import craftBouquet from "@/assets/craft-stage-04.png";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/craft")({
  head: () => ({
    meta: [
      { title: "Our Craft — FloraVineStudio" },
      {
        name: "description",
        content:
          "Inside the studio: how a single length of wire becomes a keepsake bouquet that lasts a lifetime.",
      },
      { property: "og:title", content: "Our Craft — FloraVineStudio" },
      {
        property: "og:description",
        content:
          "Inside the studio: how a single length of wire becomes a keepsake bouquet.",
      },
      { property: "og:image", content: craftBouquet },
    ],
  }),
  component: CraftPage,
});

const stages = [
  {
    n: "01",
    title: "The Skeleton",
    body: "Each flower begins as a length of fine wire, shaped by hand into the curve a petal will eventually trace.",
    img: craftWire,
  },
  {
    n: "02",
    title: "The Bloom",
    body: "Soft fibers are layered one at a time. No two petals are identical — that's the point.",
    img: craftPetals,
  },
  {
    n: "03",
    title: "The Embrace",
    body: "Stems are gathered and wrapped in silk ribbon, hand-tied with the kind of slowness that machines cannot perform.",
    img: craftRibbon,
  },
  {
    n: "04",
    title: "The Keepsake",
    body: "Each finished piece is photographed, inspected, and placed in linen — ready for the moment it was made for.",
    img: craftBouquet,
  },
];

function CraftPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Craft"
        title="Made by hand,"
        italic="hour by quiet hour."
        description="Nothing in our studio is automated. Every petal is shaped, every stem is wrapped, every ribbon is tied by hand. Here's how a keepsake comes to be."
      />

      <section className="bg-ivory px-6 pb-40">
        <div className="mx-auto max-w-[1240px] space-y-32">
          {stages.map((s, i) => (
            <article
              key={s.n}
              className="grid items-center gap-12 lg:grid-cols-12 lg:gap-20"
            >
              <div
                className={`lg:col-span-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-cream shadow-[0_40px_80px_-40px_rgba(38,38,38,0.25)]">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div
                className={`lg:col-span-5 ${
                  i % 2 === 1 ? "lg:order-1 lg:pr-12" : "lg:pl-6"
                }`}
              >
                <p className="fv-eyebrow mb-6">Stage {s.n}</p>
                <h2 className="font-display text-5xl italic text-charcoal">
                  {s.title}
                </h2>
                <p className="mt-8 max-w-md text-base leading-relaxed text-warm-gray">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
