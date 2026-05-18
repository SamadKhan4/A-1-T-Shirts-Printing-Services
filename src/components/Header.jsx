import { useEffect, useState } from "react";
import logo from "../assets/fav.png";
import { navItems } from "../data/siteData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-black/95 backdrop-blur-md border-b border-white/8" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="A-1 Prints" className="w-10 h-10 object-cover rounded-full" />
          <span className="font-outfit font-semibold text-l tracking-widest uppercase text-white/90">
            A-1 <br />Prints
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="nav-link-item">
              {item}
            </a>
          ))}
        </nav>

        <a href="#quote" className="hidden md:inline-block btn-primary">
          Get a Quote
        </a>

        <button
          className="md:hidden text-white/70 hover:text-white transition-colors"
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
        <div className="md:hidden bg-black/98 border-t border-white/8 px-6 py-8 flex flex-col gap-6">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link-item text-base"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="#quote" className="btn-primary text-center mt-2" onClick={() => setMenuOpen(false)}>
            Get a Quote
          </a>
        </div>
      )}
    </header>
  );
}
