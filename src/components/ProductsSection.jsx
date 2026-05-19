import { products } from "../data/products";

export default function ProductsSection() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section id="products" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="mb-12 text-center">
          <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
            Product Range
          </p>
          <h2 className="font-outfit text-xl font-semibold tracking-tight text-black">
            Cotton Collar T-shirts
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
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
              <h3 className="px-3 py-4 text-center font-outfit text-xs font-semibold leading-snug text-black">
                {product.name}
              </h3>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a href="/products" className="btn-outline">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
}
