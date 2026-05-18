import logo from "../assets/a-1.png";
import { navItems } from "../data/siteData";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function Footer() {
  return (
    <footer className="border-t border-white/8 py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-5">
              <img src={logo} alt="A-1 Prints" className="w-8 h-8 object-cover rounded-full" />
              <span className="font-outfit font-semibold text-sm tracking-widest uppercase">
                A-1 Prints
              </span>
            </div>
            <p className="font-outfit text-white/35 text-xs leading-relaxed">
              Custom T-shirts, uniforms and printing services for modern brands.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-12 gap-y-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="nav-link-item"
                onClick={(event) => smoothScrollTo(event, `#${item.toLowerCase()}`)}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-outfit text-xs text-white/25 tracking-wider">
            (c) 2026 A-1 T-Shirt and Printing Services. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 font-outfit text-xs tracking-wider text-white/35">
            <span>Made with</span>
            <svg
              aria-label="love"
              className="h-3.5 w-3.5 fill-[#c4b5fd] text-[#c4b5fd]"
              viewBox="0 0 24 24"
              role="img"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>by</span>{" "}
            <a href="#" className="text-white/70 underline decoration-[#c4b5fd]/50 underline-offset-4 hover:text-[#c4b5fd]">
              SAMAD KHAN
            </a>
          </p>
          <p className="font-garamond italic text-[#c4b5fd]/40 text-sm">
            Crafted with care, delivered with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
