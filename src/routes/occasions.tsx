import { createFileRoute, Link } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/occasions")({
  head: () => ({
    meta: [
      { title: "Occasions — FloraVineStudio" },
      {
        name: "description",
        content:
          "Forever bouquets composed for the moments that deserve to stay. Anniversaries, proposals, welcomes, farewells.",
      },
      { property: "og:title", content: "Occasions — FloraVineStudio" },
      {
        property: "og:description",
        content:
          "Forever bouquets composed for the moments that deserve to stay.",
      },
    ],
  }),
  component: OccasionsPage,
});

const occasions = [
  ["Proposals", "The first yes"],
  ["Weddings", "A vow you can hold"],
  ["Anniversaries", "Years, made tangible"],
  ["For Mother", "Quiet gratitude"],
  ["Newborns", "A welcome that lasts"],
  ["Graduation", "A milestone, framed"],
  ["Just Because", "No occasion required"],
  ["In Memory", "A lasting keepsake"],
];

function OccasionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Occasions"
        title="A bouquet for"
        italic="every quiet ceremony."
        description="Some moments deserve more than a week of flowers. Browse by occasion — each one composed to hold its meaning for years."
      />

      <section className="bg-ivory px-6 pb-40">
        <div className="mx-auto max-w-[1240px] divide-y divide-charcoal/15 border-t border-charcoal/15">
          {occasions.map(([title, sub], i) => (
            <Link
              key={title}
              to="/collections"
              className="group flex items-baseline justify-between py-10 transition-colors hover:text-champagne"
            >
              <div className="flex items-baseline gap-8">
                <span className="fv-eyebrow w-16 text-[9.5px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-3xl italic text-charcoal transition-colors group-hover:text-champagne md:text-5xl">
                  {title}
                </span>
              </div>
              <span className="hidden text-[11px] uppercase tracking-[0.28em] text-warm-gray md:inline">
                {sub}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
