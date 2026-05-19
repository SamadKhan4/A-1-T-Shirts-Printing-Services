import { useEffect, useState } from "react";
import logo from "../assets/fav.png";
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

    if (item === "Products" || !isHome) {
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
          <span className="font-outfit font-semibold text-l tracking-widest uppercase text-black/90">
            A-1 prints & <br />Enterprices
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Products" ? "/products" : isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
              className="nav-link-item"
              onClick={(event) => handleSectionNav(event, item)}
            >
              {item}
            </a>
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
            <a
              key={item}
              href={item === "Products" ? "/products" : isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`}
              className="nav-link-item text-base"
              onClick={(event) => handleSectionNav(event, item, () => setMenuOpen(false))}
            >
              {item}
            </a>
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
