import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import brandLogo from "@/assets/brand-logo.jpg";

const links = [
  { to: "/collections", label: "Collections" },
  { to: "/occasions", label: "Occasions" },
  { to: "/craft", label: "Our Craft" },
  { to: "/founder", label: "Founder" },
  { to: "/gallery", label: "Gallery" },
  { to: "/stories", label: "Stories" },
  { to: "/create", label: "Create Yours" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-stone/70"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-5 md:px-12 md:py-7">
        <Link to="/" className="flex items-center">
          <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-full md:h-28 md:w-28">
            <img
              src={brandLogo}
              alt="FloraVineStudio"
              className="h-full w-full object-cover"
            />
          </div>
        </Link>

        <ul className="hidden items-center gap-9 text-[10.5px] font-medium uppercase tracking-[0.28em] text-charcoal -mt-3 md:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="relative inline-block py-1 transition-colors hover:text-champagne"
                activeProps={{ className: "text-champagne" }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 -mt-3">
          <Link
            to="/create"
            className="hidden text-[10.5px] font-semibold uppercase tracking-[0.28em] text-charcoal md:inline"
          >
            Cart · 0
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            <span className="relative block h-px w-5 bg-charcoal before:absolute before:left-0 before:top-[-6px] before:block before:h-px before:w-5 before:bg-charcoal after:absolute after:left-0 after:top-[6px] after:block after:h-px after:w-5 after:bg-charcoal" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-stone bg-ivory md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-6 text-sm uppercase tracking-[0.25em] text-charcoal">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="block py-3"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
