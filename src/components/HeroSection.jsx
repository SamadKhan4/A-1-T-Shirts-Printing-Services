import { useState } from "react";
import logo from "../assets/a1_circle_logo (1).svg";
import { smoothScrollTo } from "../utils/smoothScroll";

const garments = ["Polo T-Shirt", "Round Neck", "Uniform", "Event Tee", "Hoodie", "Merchandise"];
const prints = ["Screen Print", "DTF Print", "Embroidery", "Sublimation", "Vinyl Transfer"];
const sizes = ["XS–M", "S–XL", "S–3XL", "S–5XL", "Custom"];

const basePrice = {
  "Polo T-Shirt": [160, 220], "Round Neck": [120, 170], "Uniform": [200, 280],
  "Event Tee": [110, 160], "Hoodie": [280, 380], "Merchandise": [90, 140],
};
const printMult = {
  "Screen Print": [1, 1], "DTF Print": [1.1, 1.2], "Embroidery": [1.3, 1.5],
  "Sublimation": [1.15, 1.25], "Vinyl Transfer": [1.05, 1.15],
};

export default function HeroSection() {
  const [selGarment, setSelGarment] = useState("Polo T-Shirt");
  const [selPrint, setSelPrint]     = useState("Screen Print");
  const [selSize, setSelSize]       = useState("S–XL");
  const [qty, setQty]               = useState(100);

  const disc = qty >= 200 ? 0.88 : qty >= 100 ? 0.93 : 1;
  const bp   = basePrice[selGarment] || [150, 200];
  const pm   = printMult[selPrint]   || [1, 1];
  const lo   = Math.round((bp[0] * pm[0] * qty * disc) / 100) * 100;
  const hi   = Math.round((bp[1] * pm[1] * qty * disc) / 100) * 100;
  const deliveryLabel = qty >= 200 ? "Bulk quote 48hr" : "24 hr quote";

  return (
    <section id="top" className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden">

      <div className="absolute inset-0 z-[1] bg-white/82" />
      <div
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(0,0,0,0.18) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(0,0,0,0.18) 80px)",
        }}
      />
      <div
        className="absolute top-0 right-0 z-[2] w-1/2 h-full opacity-10"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, #8b5cf6 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:items-stretch">

          {/* ── LEFT ── */}
          <div className="flex max-w-xl flex-col justify-center lg:min-h-full lg:py-7">
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-8 fade-up">
              T-shirt printing & bulk apparel partner
            </p>
            <h1 className="font-garamond text-5xl lg:text-7xl leading-[1.08] mb-8 fade-up delay-1">
              Custom branded<br />
              <em>garments</em> made<br />
              sharp & fast.
            </h1>
            <p className="font-outfit text-black/55 text-base leading-relaxed max-w-md mb-12 fade-up delay-2">
              A-1 Prints helps companies, events, creators and teams produce premium T-shirts,
              polos, uniforms and merchandise with clean print quality and dependable delivery.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-3">
              <a href="#quote" className="btn-primary" onClick={(e) => smoothScrollTo(e, "#quote")}>
                Start Your Order
              </a>
              <a href="#products" className="btn-outline" onClick={(e) => smoothScrollTo(e, "#products")}>
                View Products
              </a>
            </div>
          </div>

          {/* ── RIGHT — CONFIGURATOR ── */}
          <div className="relative fade-up delay-4 lg:self-stretch">
            <div className="relative h-full border border-black/10 bg-[#faf8ff] p-7">

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-lavender" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-lavender" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-lavender" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-lavender" />

              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div>
                  <p className="font-outfit text-[10px] tracking-[0.18em] uppercase text-black/40 mb-1">
                    Configure your order
                  </p>
                  <p className="font-garamond text-lg text-black/80">Product Selector</p>
                </div>
                <img src={logo} alt="" className="w-10 h-10 object-cover rounded-full border border-black/10" />
              </div>

              <div className="border-t border-black/8 mb-5" />

              {/* Garment */}
              <p className="font-outfit text-[10px] tracking-[0.12em] uppercase text-black/40 mb-2">
                Garment type
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {garments.map((g) => (
                  <button
                    key={g}
                    onClick={() => setSelGarment(g)}
                    className={`font-outfit text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selGarment === g
                        ? "bg-lavender border-lavender text-white"
                        : "bg-white border-black/10 text-black/55 hover:border-lavender/50"
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>

              {/* Print method */}
              <p className="font-outfit text-[10px] tracking-[0.12em] uppercase text-black/40 mb-2">
                Print method
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {prints.map((p) => (
                  <button
                    key={p}
                    onClick={() => setSelPrint(p)}
                    className={`font-outfit text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selPrint === p
                        ? "bg-lavender border-lavender text-white"
                        : "bg-white border-black/10 text-black/55 hover:border-lavender/50"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              {/* Size range */}
              <p className="font-outfit text-[10px] tracking-[0.12em] uppercase text-black/40 mb-2">
                Size range
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelSize(s)}
                    className={`font-outfit text-xs px-3 py-1.5 rounded-full border transition-all ${
                      selSize === s
                        ? "bg-lavender border-lavender text-white"
                        : "bg-white border-black/10 text-black/55 hover:border-lavender/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* Quantity slider */}
              <div className="flex items-center gap-3 mb-5">
                <p className="font-outfit text-[10px] tracking-[0.12em] uppercase text-black/40 whitespace-nowrap">
                  Quantity
                </p>
                <input
                  type="range" min="10" max="500" step="10"
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="flex-1 accent-lavender"
                />
                <span className="font-outfit text-sm font-medium text-black/70 min-w-[36px] text-right">
                  {qty}
                </span>
              </div>

              <div className="border-t border-black/8 mb-4" />

              {/* Summary card */}
              <div className="bg-white border border-black/8 rounded p-4 mb-4">
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {[
                    ["Garment",      selGarment],
                    ["Print method", selPrint],
                    ["Sizes",        selSize],
                    ["Quantity",     `${qty} pcs`],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="font-outfit text-[10px] uppercase tracking-[0.08em] text-black/35 mb-0.5">
                        {label}
                      </p>
                      <p className="font-outfit text-sm font-medium text-black/80">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="border-t border-black/8 pt-3 flex items-center justify-between">
                  <div>
                    <p className="font-outfit text-[10px] uppercase tracking-[0.08em] text-black/35 mb-0.5">
                      Estimated range
                    </p>
                    <p className="font-garamond text-xl text-black/85">
                      ₹{lo.toLocaleString("en-IN")} – ₹{hi.toLocaleString("en-IN")}
                    </p>
                  </div>
                  <span className="font-outfit text-[11px] font-medium text-green-700 bg-green-50 border border-green-200 rounded px-2.5 py-1">
                    {deliveryLabel}
                  </span>
                </div>
              </div>

              {/* CTA */}
              < a 
                href="#quote"
                onClick={(e) => smoothScrollTo(e, "#quote")}
                className="btn-primary w-full text-center block"
              >
                Get this quoted →
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
