import { createFileRoute, Link } from "@tanstack/react-router";

import galleryWhite from "@/assets/gallery-01.jpg";
import galleryRose from "@/assets/gallery-02.jpg";
import collectionBlush from "@/assets/collection-01.jpg";
import collectionBurgundy from "@/assets/collection-02.jpg";
import collectionPastel from "@/assets/collection-03.jpg";
import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — FloraVineStudio" },
      {
        name: "description",
        content:
          "Handcrafted floral keepsakes, composed in small editions. Each piece is shaped by hand in our studio.",
      },
      { property: "og:title", content: "Collections — FloraVineStudio" },
      {
        property: "og:description",
        content:
          "Handcrafted floral keepsakes, composed in small editions.",
      },
      { property: "og:image", content: galleryWhite },
    ],
  }),
  component: CollectionsPage,
});

const pieces = [
  {
    title: "L'Hiver Blanc",
    sub: "The First Yes",
    palette: "Ivory · Champagne",
    img: galleryWhite,
  },
  {
    title: "Rosée d'Automne",
    sub: "Forever Together",
    palette: "Rose · Sage",
    img: galleryRose,
  },
  {
    title: "Premier Souffle",
    sub: "Little Miracles",
    palette: "Pastel · Cream",
    img: collectionPastel,
  },
  {
    title: "Tendresse",
    sub: "Thank You Mom",
    palette: "Blush · Ivory",
    img: collectionBlush,
  },
  {
    title: "Minuit",
    sub: "A New Beginning",
    palette: "Burgundy · Copper",
    img: collectionBurgundy,
  },
];

function CollectionsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Collections"
        title="Pieces, composed in"
        italic="small editions."
        description="Each bouquet is shaped by a single pair of hands over many hours. There are no two alike, and we keep our editions small on purpose."
      />

      <section className="bg-ivory px-6 pb-40">
        <div className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-24">
          {pieces.map((p, i) => (
            <Link
              key={p.title}
              to="/collections"
              className={`group block ${i % 2 === 1 ? "md:mt-32" : ""}`}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-8 flex items-baseline justify-between border-b border-charcoal/15 pb-4">
                <h2 className="font-display text-3xl italic text-charcoal">
                  {p.title}
                </h2>
                <span className="text-[10.5px] uppercase tracking-[0.28em] text-warm-gray">
                  {p.palette}
                </span>
              </div>
              <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-warm-gray">
                {p.sub}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
