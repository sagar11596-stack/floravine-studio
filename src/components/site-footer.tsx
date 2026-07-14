import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="bg-cream pt-32 pb-12">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12">
        <div className="grid gap-16 border-b border-stone pb-20 md:grid-cols-12">
          <div className="md:col-span-5">
            <h3 className="font-display text-4xl italic leading-[1.05] text-charcoal md:text-5xl">
              Stay in our<br />quiet garden.
            </h3>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-warm-gray">
              Letters from the studio — new collections, the stories behind our bouquets,
              and quiet musings on craft. No noise, ever.
            </p>
            <form className="mt-10 flex max-w-md items-end gap-4 border-b border-charcoal/20 pb-2">
              <input
                type="email"
                placeholder="your email"
                className="w-full bg-transparent text-sm tracking-wide text-charcoal placeholder:text-warm-gray/70 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 text-[10.5px] font-semibold uppercase tracking-[0.28em] text-charcoal hover:text-champagne"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div className="grid gap-12 sm:grid-cols-3 md:col-span-7">
            <FooterColumn
              title="The Studio"
              items={[
                { label: "Our Craft", to: "/craft" },
                { label: "Stories", to: "/stories" },
                { label: "Founder", to: "/founder" },
              ]}
            />
            <FooterColumn
              title="Discover"
              items={[
                { label: "Collections", to: "/collections" },
                { label: "Occasions", to: "/occasions" },
                { label: "Create Yours", to: "/create" },
              ]}
            />
            <FooterColumn
              title="Care"
              items={[
                { label: "Contact", to: "/contact" },
                { label: "WhatsApp", to: "/contact" },
                { label: "Instagram", to: "/stories" },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 pt-10 md:flex-row md:items-end">
          <div>
            <div className="font-display text-5xl italic lowercase tracking-[0.04em] text-charcoal">
              floravine
            </div>
            <p className="mt-3 text-[10.5px] uppercase tracking-[0.32em] text-warm-gray">
              Handcrafted Eternity · Est. 2024
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-[10.5px] uppercase tracking-[0.28em] text-warm-gray">
            <span>© {new Date().getFullYear()} FloraVineStudio</span>
            <span className="hidden h-px w-6 bg-warm-gray/40 md:block" />
            <Link to="/" className="hover:text-charcoal">Privacy</Link>
            <Link to="/" className="hover:text-charcoal">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; to: string }[];
}) {
  return (
    <div>
      <p className="fv-eyebrow mb-5">{title}</p>
      <ul className="flex flex-col gap-3 text-sm text-charcoal">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="transition-colors hover:text-champagne">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
