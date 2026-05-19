import Footer from "../components/Footer";
import Header from "../components/Header";
import { productDropdownItems } from "../data/productCollections";
import { productCategories, products } from "../data/products";

const buyingPoints = [
  { label: "Fabric Guidance", value: "Cotton, pique, blends and performance options matched to use." },
  { label: "Branding Support", value: "Screen print, DTF, embroidery, vinyl and sublimation options." },
  { label: "Bulk Planning", value: "Size breakup, color options, mockups and dispatch timeline support." },
];

const productSupport = [
  "Corporate uniforms for office, retail, hospitality and field teams.",
  "Promotional T-shirts for events, college fests and product launches.",
  "Premium collar T-shirts and polos with clean logo placement.",
  "Repeat supply support for teams that order throughout the year.",
];

const printMethods = [
  "Screen Printing",
  "DTF Printing",
  "Embroidery",
  "Vinyl Transfer",
  "Sublimation",
  "Heat Transfer",
];

export default function ProductCatalogPage() {
  return (
    <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
      <Header />
      <main className="pt-32">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-12 text-center">
              <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-4">
                Product Catalogue
              </p>
              <h1 className="font-outfit text-2xl font-semibold tracking-tight text-black">
                Cotton Collar T-shirts
              </h1>
              <p className="mx-auto mt-5 max-w-2xl font-outfit text-sm leading-relaxed text-black/55">
                Explore reliable apparel options for uniforms, corporate gifting, events and
                branded merchandise. Each product can be customized with your logo, campaign
                artwork or team identity.
              </p>
            </div>

            <div className="mb-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
              {productDropdownItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="group overflow-hidden border border-black/10 bg-white text-center font-outfit text-xs font-semibold uppercase tracking-[0.14em] text-black/60 no-underline transition hover:-translate-y-1 hover:border-lavender hover:text-lavender hover:shadow-[0_14px_35px_rgba(139,92,246,0.12)]"
                >
                  <img
                    src={item.image}
                    alt={item.label}
                    className="h-24 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="block px-4 py-4">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="mb-10 flex flex-wrap justify-center gap-2">
              {productCategories.slice(1).map((category) => (
                <span
                  key={category}
                  className="border border-black/8 bg-white px-3 py-1.5 font-outfit text-[10px] uppercase tracking-wider text-black/45"
                >
                  {category}
                </span>
              ))}
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <a
                  key={product.slug}
                  href={`/products/${product.slug}`}
                  className="group overflow-hidden rounded border border-black/10 bg-white no-underline transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
                >
                  <div className="overflow-hidden bg-[#f7f4ff]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <p className="mb-3 font-outfit text-[10px] uppercase tracking-[0.16em] text-lavender">
                      {product.category}
                    </p>
                    <h2 className="font-outfit text-xs font-semibold leading-snug text-black">
                      {product.name}
                    </h2>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {product.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="bg-[#faf8ff] px-2.5 py-1 font-outfit text-[10px] uppercase tracking-wider text-black/55"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/8 bg-[#faf8ff] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid gap-px bg-black/8 md:grid-cols-3">
              {buyingPoints.map((point) => (
                <div key={point.label} className="bg-white p-8">
                  <p className="mb-4 font-outfit text-xs uppercase tracking-[0.18em] text-lavender">
                    {point.label}
                  </p>
                  <p className="font-outfit text-sm leading-relaxed text-black/60">{point.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                  Order Support
                </p>
                <h2 className="font-garamond text-4xl lg:text-5xl leading-tight mb-8">
                  Built for teams that need dependable apparel supply.
                </h2>
                <p className="font-outfit text-sm leading-relaxed text-black/55">
                  Share your garment type, quantity, preferred colors and logo file. We can help
                  shortlist the right product, recommend a print method and prepare a clean quote.
                </p>
              </div>

              <div className="grid gap-px bg-black/8 sm:grid-cols-2">
                {productSupport.map((item) => (
                  <div key={item} className="bg-white p-7">
                    <p className="font-outfit text-sm leading-relaxed text-black/60">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/8 bg-[#f7f4ff] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                  Customization
                </p>
                <h2 className="font-garamond text-4xl lg:text-5xl leading-tight">
                  Print methods for every finish.
                </h2>
              </div>
              <div className="flex max-w-2xl flex-wrap gap-3">
                {printMethods.map((method) => (
                  <span
                    key={method}
                    className="border border-black/10 bg-white px-4 py-2 font-outfit text-xs uppercase tracking-wider text-black/60"
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="bg-black px-8 py-12 text-center text-white lg:px-16">
              <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                Need Bulk Pricing?
              </p>
              <h2 className="mx-auto max-w-3xl font-garamond text-4xl lg:text-5xl leading-tight mb-6">
                Send quantity, sizes and logo details for a fast quote.
              </h2>
              <p className="mx-auto mb-9 max-w-2xl font-outfit text-sm leading-relaxed text-white/60">
                We will guide you on product selection, branding method, production timeline and
                delivery planning.
              </p>
              <a href="/#quote" className="btn-primary">
                Request Quote
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
