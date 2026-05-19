import { services } from "../data/services";

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#f7f4ff] border-y border-black/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div>
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
              Printing Services
            </p>
            <h2 className="font-garamond text-4xl lg:text-5xl leading-tight mb-8">
              Branding methods matched to your fabric & finish.
            </h2>
            <p className="font-outfit text-black/55 text-sm leading-relaxed max-w-md">
              From economical bulk screen printing to premium embroidery, we help pick the
              right production method before the order goes live.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-0">
            {services.map((svc, index) => (
              <a
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="process-step-inner flex justify-between items-center group no-underline"
              >
                <div className="flex items-center gap-6">
                  <span className="font-outfit text-xs text-black/30 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="font-garamond text-xl group-hover:text-lavender transition-colors">
                    {svc.name}
                  </span>
                </div>
                <span className="font-outfit text-xs text-black/45 italic">{svc.desc}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
