import { process } from "../data/siteData";

export default function ProcessSection() {
  return (
    <section id="process" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
            Simple Workflow
          </p>
          <h2 className="font-garamond text-4xl lg:text-5xl leading-tight">
            From requirement to ready-to-wear.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-black/8">
          {process.map((item) => (
            <div
              key={item.step}
              className="bg-white p-10 hover-lift border border-transparent hover:border-lavender/25 transition-colors"
            >
              <p className="font-garamond text-5xl text-lavender/35 mb-8 leading-none">{item.step}</p>
              <h3 className="font-garamond text-xl mb-4">{item.title}</h3>
              <p className="font-outfit text-black/55 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
