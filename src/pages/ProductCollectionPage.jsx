import Footer from "../components/Footer";
import Header from "../components/Header";
import { getProductCollection } from "../data/productCollections";

export default function ProductCollectionPage({ slug }) {
  const collection = getProductCollection(slug);

  if (!collection) {
    return (
      <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
        <Header />
        <main className="min-h-screen pt-32 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
              Collection Not Found
            </p>
            <h1 className="font-garamond text-5xl mb-8">This product category is not available.</h1>
            <a href="/products" className="btn-primary">
              View Products
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
      <Header />
      <main className="pt-32">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-12 text-center">
              <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-4">
                {collection.eyebrow}
              </p>
              <h1 className="font-garamond text-5xl lg:text-7xl leading-[1.05] mb-6">
                {collection.title}
              </h1>
              <p className="mx-auto max-w-2xl font-outfit text-sm leading-relaxed text-black/55">
                {collection.intro}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {collection.items.map((item) => (
                <div
                  key={item.name}
                  className="group overflow-hidden border border-black/10 bg-white transition hover:-translate-y-1 hover:bg-[#faf8ff] hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-8">
                    <p className="font-outfit text-xs uppercase tracking-[0.18em] text-lavender mb-6">
                      Custom Product
                    </p>
                    <h2 className="font-garamond text-3xl leading-tight mb-5">{item.name}</h2>
                    <p className="font-outfit text-sm leading-relaxed text-black/55">
                      Available for logo branding, campaign artwork, bulk gifting and custom
                      packaging support.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-black/8 bg-[#faf8ff] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                  Best For
                </p>
                <h2 className="font-garamond text-4xl lg:text-5xl leading-tight">
                  Planned for practical business use.
                </h2>
              </div>
              <div className="grid gap-px bg-black/8 sm:grid-cols-2">
                {collection.uses.map((use) => (
                  <div key={use} className="bg-white p-7">
                    <p className="font-outfit text-sm leading-relaxed text-black/60">{use}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="bg-black px-8 py-12 text-center text-white lg:px-16">
              <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                Need Pricing?
              </p>
              <h2 className="mx-auto max-w-3xl font-garamond text-4xl lg:text-5xl leading-tight mb-6">
                Share quantity and logo details for a fast custom quote.
              </h2>
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
