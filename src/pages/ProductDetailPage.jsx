import Footer from "../components/Footer";
import Header from "../components/Header";
import { getProductBySlug, products } from "../data/products";

export default function ProductDetailPage({ slug }) {
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
        <Header />
        <main className="min-h-screen pt-32 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
              Product Not Found
            </p>
            <h1 className="font-garamond text-5xl mb-8">This product is not available.</h1>
            <a href="/products" className="btn-primary">
              View Products
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
      <Header />
      <main className="pt-32">
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <a
              href="/products"
              className="mb-10 inline-block font-outfit text-xs uppercase tracking-[0.16em] text-black/50 no-underline transition hover:text-lavender"
            >
              Back to Products
            </a>

            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="bg-[#f7f4ff]">
                <img src={product.image} alt={product.name} className="h-[520px] w-full object-cover" />
              </div>

              <div>
                <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                  {product.category}
                </p>
                <h1 className="font-garamond text-5xl lg:text-6xl leading-[1.05] mb-6">
                  {product.name}
                </h1>
                <p className="font-outfit text-base leading-relaxed text-black/60 mb-10">
                  {product.short}
                </p>

                <div className="grid gap-px bg-black/8 mb-10 sm:grid-cols-3">
                  {[
                    ["Fabric", product.fabric],
                    ["Fit", product.fit],
                    ["Sizes", product.sizes],
                  ].map(([label, value]) => (
                    <div key={label} className="bg-white p-5">
                      <p className="font-outfit text-[11px] uppercase tracking-[0.16em] text-black/40 mb-3">
                        {label}
                      </p>
                      <p className="font-garamond text-xl italic">{value}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="font-outfit text-xs uppercase tracking-[0.18em] text-black/45 mb-4">
                      Color Options
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {product.colors.map((color) => (
                        <span
                          key={color}
                          className="border border-black/10 bg-[#faf8ff] px-4 py-2 font-outfit text-xs uppercase tracking-wider text-black/60"
                        >
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-outfit text-xs uppercase tracking-[0.18em] text-black/45 mb-4">
                      Branding Methods
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {product.branding.map((method) => (
                        <span
                          key={method}
                          className="border border-lavender/25 bg-white px-4 py-2 font-outfit text-xs uppercase tracking-wider text-lavender"
                        >
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="font-outfit text-xs uppercase tracking-[0.18em] text-black/45 mb-4">
                      Highlights
                    </h2>
                    <div className="grid gap-3 sm:grid-cols-3">
                      {product.highlights.map((highlight) => (
                        <p key={highlight} className="border-t border-black/10 pt-4 font-outfit text-sm text-black/60">
                          {highlight}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="/#quote" className="btn-primary">
                    Request Quote
                  </a>
                  <a href="/products" className="btn-outline">
                    View More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#faf8ff] border-y border-black/8">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex items-end justify-between gap-8 mb-10">
              <div>
                <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                  More Products
                </p>
                <h2 className="font-garamond text-4xl lg:text-5xl leading-tight">You may also need.</h2>
              </div>
            </div>

            <div className="grid gap-px bg-black/8 sm:grid-cols-3">
              {relatedProducts.map((item) => (
                <a key={item.slug} href={`/products/${item.slug}`} className="group bg-white p-5 no-underline">
                  <img src={item.image} alt={item.name} className="mb-5 h-56 w-full object-cover" />
                  <p className="font-outfit text-xs uppercase tracking-[0.16em] text-lavender mb-3">
                    {item.category}
                  </p>
                  <h3 className="font-garamond text-2xl text-black group-hover:text-lavender transition">
                    {item.name}
                  </h3>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
