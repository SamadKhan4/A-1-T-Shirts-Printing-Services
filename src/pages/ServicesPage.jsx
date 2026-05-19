import Footer from "../components/Footer";
import Header from "../components/Header";
import { services } from "../data/services";

export default function ServicesPage() {
  return (
    <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
      <Header />
      <main className="pt-32">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="mb-14 text-center">
              <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-4">
                Printing Services
              </p>
              <h1 className="font-garamond text-5xl lg:text-7xl leading-[1.05] mb-6">
                Branding methods for every order type.
              </h1>
              <p className="mx-auto max-w-2xl font-outfit text-sm leading-relaxed text-black/55">
                Pick the right finish for your garment, quantity, fabric and logo style. Each
                service includes guidance, mockup support and production planning.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <a
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group overflow-hidden border border-black/10 bg-white no-underline transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(0,0,0,0.08)]"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="p-7">
                    <p className="font-outfit text-xs uppercase tracking-[0.18em] text-lavender mb-4">
                      {service.desc}
                    </p>
                    <h2 className="font-garamond text-3xl leading-tight mb-5 text-black">
                      {service.name}
                    </h2>
                    <p className="font-outfit text-sm leading-relaxed text-black/55">
                      {service.intro}
                    </p>
                  </div>
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
