import Footer from "../components/Footer";
import Header from "../components/Header";
import { getServiceBySlug, services } from "../data/services";

export default function ServiceDetailPage({ slug }) {
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
        <Header />
        <main className="min-h-screen pt-32 py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
              Service Not Found
            </p>
            <h1 className="font-garamond text-5xl mb-8">This service is not available.</h1>
            <a href="/services" className="btn-primary">
              View Services
            </a>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <div className="bg-white text-black font-['EB_Garamond',serif] overflow-x-hidden">
      <Header />
      <main className="pt-32">
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <a
              href="/services"
              className="mb-10 inline-block font-outfit text-xs uppercase tracking-[0.16em] text-black/50 no-underline transition hover:text-lavender"
            >
              Back to Services
            </a>

            <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <div className="overflow-hidden bg-[#f7f4ff]">
                <img src={service.image} alt={service.name} className="h-[540px] w-full object-cover" />
              </div>

              <div>
                <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
                  {service.desc}
                </p>
                <h1 className="font-garamond text-5xl lg:text-6xl leading-[1.05] mb-6">
                  {service.name}
                </h1>
                <p className="font-outfit text-base leading-relaxed text-black/60 mb-8">
                  {service.intro}
                </p>
                <p className="font-outfit text-sm leading-relaxed text-black/55 mb-10">
                  {service.details}
                </p>

                <div className="mb-10">
                  <h2 className="font-outfit text-xs uppercase tracking-[0.18em] text-black/45 mb-4">
                    Best For
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {service.bestFor.map((item) => (
                      <span
                        key={item}
                        className="border border-black/10 bg-[#faf8ff] px-4 py-2 font-outfit text-xs uppercase tracking-wider text-black/60"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid gap-px bg-black/8 sm:grid-cols-2">
                  {service.process.map((step, index) => (
                    <div key={step} className="bg-white p-5">
                      <p className="font-garamond text-3xl text-lavender/60 mb-4">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="font-outfit text-sm text-black/60">{step}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <a href="/#quote" className="btn-primary">
                    Request Quote
                  </a>
                  <a href="/services" className="btn-outline">
                    View Services
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-black/8 bg-[#faf8ff] py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
              Related Services
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedServices.map((item) => (
                <a key={item.slug} href={`/services/${item.slug}`} className="group bg-white no-underline">
                  <img src={item.image} alt={item.name} className="h-52 w-full object-cover" />
                  <div className="p-5">
                    <h3 className="font-garamond text-2xl text-black transition group-hover:text-lavender">
                      {item.name}
                    </h3>
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
