import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  italic,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="bg-ivory px-6 pt-40 pb-24">
      <div className="mx-auto max-w-[1240px]">
        <p className="fv-eyebrow mb-8">{eyebrow}</p>
        <h1 className="max-w-4xl font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1.02] text-charcoal">
          {title} {italic ? <span className="italic text-champagne">{italic}</span> : null}
        </h1>
        {description && (
          <p className="mt-10 max-w-xl text-base leading-relaxed text-warm-gray">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
