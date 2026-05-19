import { useEffect, useState } from "react";
import logo from "../assets/fav.png";
import { productDropdownItems } from "../data/productCollections";
import { services } from "../data/services";
import { navItems } from "../data/siteData";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const offerItems = [
    "20% OFF on bulk T-shirt printing",
    "Limited time offer",
    "Custom uniforms, polos and merch",
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = window.location.pathname === "/";

  const handleSectionNav = (event, item, onComplete) => {
    const target = `#${item.toLowerCase()}`;

    if (item === "Products" || item === "Services" || !isHome) {
      onComplete?.();
      return;
    }

    smoothScrollTo(event, target, onComplete);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-black/8 shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="overflow-hidden border-b border-black/8 bg-lavender/70  py-2">
        <div className="flex whitespace-nowrap marquee-track">
          {[...offerItems, ...offerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="px-8 font-outfit text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              {item} <span className="mx-3 text-black">20% OFF</span>
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a
          href={isHome ? "#top" : "/"}
          className="flex items-center gap-3"
          onClick={(event) => {
            if (isHome) smoothScrollTo(event, "#top");
          }}
        >
          <img src={logo} alt="A-1 Prints" className="w-10 h-10 object-cover rounded-full" />
          <span className="font-outfit font-semibold text-l tracking-widest  text-black/90">
            A-1 Tshirts  &<br />Printing
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            item === "Products" ? (
              <div key={item} className="group relative py-6">
                <a href="/products" className="nav-link-item">
                  {item}
                </a>
                <div className="invisible absolute left-1/2 top-full min-w-52 -translate-x-1/2 border border-black/8 bg-white p-3 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition group-hover:visible group-hover:opacity-100">
                  {productDropdownItems.map((dropdownItem) => (
                    <a
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="block px-4 py-3 font-outfit text-xs uppercase tracking-[0.14em] text-black/60 no-underline transition hover:bg-[#faf8ff] hover:text-lavender"
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : item === "Services" ? (
              <div key={item} className="group relative py-6">
                <a href="/services" className="nav-link-item">
                  {item}
                </a>
                <div className="invisible absolute left-1/2 top-full min-w-56 -translate-x-1/2 border border-black/8 bg-white p-3 opacity-0 shadow-[0_18px_45px_rgba(0,0,0,0.08)] transition group-hover:visible group-hover:opacity-100">
                  {services.map((service) => (
                    <a
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="block px-4 py-3 font-outfit text-xs uppercase tracking-[0.14em] text-black/60 no-underline transition hover:bg-[#faf8ff] hover:text-lavender"
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item}
                href={item === "Services" ? "/services" : isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                className="nav-link-item"
                onClick={(event) => handleSectionNav(event, item)}
              >
                {item}
              </a>
            )
          ))}
        </nav>

        <a
          href={isHome ? "#quote" : "/#quote"}
          className="hidden md:inline-block btn-primary"
          onClick={(event) => {
            if (isHome) smoothScrollTo(event, "#quote");
          }}
        >
          Get a Quote
        </a>

        <button
          className="md:hidden text-black/70 hover:text-black transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          type="button"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-current transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white/98 border-t border-black/8 px-6 py-8 flex flex-col gap-6 shadow-sm">
          {navItems.map((item) => (
            item === "Products" ? (
              <div key={item} className="flex flex-col gap-3">
                <a href="/products" className="nav-link-item text-base" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
                <div className="ml-4 flex flex-col gap-3 border-l border-black/10 pl-4">
                  {productDropdownItems.slice(1).map((dropdownItem) => (
                    <a
                      key={dropdownItem.href}
                      href={dropdownItem.href}
                      className="font-outfit text-xs uppercase tracking-[0.14em] text-black/55 no-underline transition hover:text-lavender"
                      onClick={() => setMenuOpen(false)}
                    >
                      {dropdownItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : item === "Services" ? (
              <div key={item} className="flex flex-col gap-3">
                <a href="/services" className="nav-link-item text-base" onClick={() => setMenuOpen(false)}>
                  {item}
                </a>
                <div className="ml-4 flex flex-col gap-3 border-l border-black/10 pl-4">
                  {services.map((service) => (
                    <a
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="font-outfit text-xs uppercase tracking-[0.14em] text-black/55 no-underline transition hover:text-lavender"
                      onClick={() => setMenuOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item}
                href={item === "Services" ? "/services" : isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
                className="nav-link-item text-base"
                onClick={(event) => handleSectionNav(event, item, () => setMenuOpen(false))}
              >
                {item}
              </a>
            )
          ))}
          <a
            href={isHome ? "#quote" : "/#quote"}
            className="btn-primary text-center mt-2"
            onClick={(event) => {
              if (isHome) {
                smoothScrollTo(event, "#quote", () => setMenuOpen(false));
              } else {
                setMenuOpen(false);
              }
            }}
          >
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
