import { categories } from "../data/siteData";

export default function ProductsSection() {
  return (
    <section id="products" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-[#c4b5fd] mb-5">
              Product Range
            </p>
            <h2 className="font-garamond text-4xl lg:text-5xl leading-tight max-w-lg">
              Everything you need for branded apparel.
            </h2>
          </div>
          <p className="font-outfit text-white/45 text-sm leading-relaxed max-w-sm">
            Built for corporate uniforms, promotional campaigns, college events, retail drops
            and everyday team wear.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-white/8">
          {categories.map((cat) => (
            <div key={cat.title} className="category-card-inner hover-lift">
              <p className="font-outfit text-xs tracking-widest text-[#c4b5fd]/60 mb-8">{cat.num}</p>
              <h3 className="font-garamond text-2xl mb-5 lavender-line">{cat.title}</h3>
              <p className="font-outfit text-white/50 text-sm leading-relaxed mb-8">{cat.copy}</p>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-outfit text-xs tracking-wider uppercase border border-white/12 px-3 py-1.5 text-white/45"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
