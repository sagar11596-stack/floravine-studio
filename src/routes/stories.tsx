import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/stories")({
  head: () => ({
    meta: [
      { title: "Stories — FloraVineStudio" },
      {
        name: "description",
        content:
          "Every bouquet carries a quiet story. Proposals, anniversaries, welcomes — told by the people who lived them.",
      },
      { property: "og:title", content: "Stories — FloraVineStudio" },
      {
        property: "og:description",
        content: "Every bouquet carries a quiet story.",
      },
    ],
  }),
  component: StoriesPage,
});

const stories = [
  {
    title: "Eight hours, fifty-two petals, one yes.",
    body: "He hid it behind his back for the entire walk. It hasn't moved from the mantel since.",
    meta: "Anniversary · London",
  },
  {
    title: "She placed it by the window the morning we left.",
    body: "A bouquet for a mother who didn't expect anything that Tuesday. It's still there.",
    meta: "Just Because · Edinburgh",
  },
  {
    title: "The first thing she saw in soft focus.",
    body: "Composed in the week before she arrived. Now it lives beside her crib.",
    meta: "Newborn · Bristol",
  },
  {
    title: "Twenty-two years, in one quiet object.",
    body: "For an anniversary that had outgrown counting. He cried before he could speak.",
    meta: "Anniversary · Manchester",
  },
];

function StoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="The Stories"
        title="Memories,"
        italic="held in petals."
        description="The bouquets leave our studio quietly. Then they live in other homes, mark other moments. These are a few of them."
      />

      <section className="bg-ivory px-6 pb-40">
        <div className="mx-auto max-w-[980px] space-y-20">
          {stories.map((s, i) => (
            <article
              key={s.title}
              className="border-t border-charcoal/15 pt-12"
            >
              <p className="fv-eyebrow mb-6 text-[9.5px]">
                Story {String(i + 1).padStart(2, "0")} · {s.meta}
              </p>
              <h2 className="font-display text-[clamp(2rem,3.5vw,3rem)] italic leading-[1.1] text-charcoal">
                {s.title}
              </h2>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-warm-gray">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
