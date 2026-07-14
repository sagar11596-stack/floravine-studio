import { createFileRoute } from "@tanstack/react-router";

import { PageHero } from "@/components/page-hero";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FloraVineStudio" },
      {
        name: "description",
        content:
          "Speak with the studio. Bespoke commissions, press, and quiet questions all welcome.",
      },
      { property: "og:title", content: "Contact — FloraVineStudio" },
      {
        property: "og:description",
        content: "Speak with the studio.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="A few quiet"
        italic="ways to reach us."
        description="We answer every message ourselves, usually within a day. For bespoke commissions, the more you share, the better."
      />

      <section className="bg-ivory px-6 pb-40">
        <div className="mx-auto grid max-w-[1080px] gap-12 md:grid-cols-3">
          {[
            ["WhatsApp", "+44 20 0000 0000", "Mon–Sat · 10–18 GMT"],
            ["Studio Email", "studio@floravine.co", "Replies within 24 hours"],
            ["Instagram", "@floravinestudio", "Behind the scenes, daily"],
          ].map(([t, v, m]) => (
            <article key={t} className="border-t border-charcoal/15 pt-10">
              <p className="fv-eyebrow mb-6">{t}</p>
              <p className="font-display text-2xl italic text-charcoal">{v}</p>
              <p className="mt-4 text-[11px] uppercase tracking-[0.28em] text-warm-gray">
                {m}
              </p>
            </article>
          ))}
        </div>

        <div className="mx-auto mt-32 max-w-[820px] border-t border-charcoal/15 pt-16">
          <p className="fv-eyebrow mb-8 text-center">The Studio</p>
          <p className="text-center font-display text-4xl italic leading-tight text-charcoal md:text-5xl">
            A small atelier on a quiet street,
            <br />
            open by appointment.
          </p>
        </div>
      </section>
    </>
  );
}
