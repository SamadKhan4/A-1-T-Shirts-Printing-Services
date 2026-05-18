import { process } from "../data/siteData";

export default function ProcessSection() {
  return (
    <section id="process" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-20">
          <p className="font-outfit text-xs tracking-[0.22em] uppercase text-[#c4b5fd] mb-5">
            Simple Workflow
          </p>
          <h2 className="font-garamond text-4xl lg:text-5xl leading-tight">
            From requirement to ready-to-wear.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/8">
          {process.map((item) => (
            <div
              key={item.step}
              className="bg-[#0a0a0a] p-10 hover-lift border border-transparent hover:border-[#c4b5fd]/20 transition-colors"
            >
              <p className="font-garamond text-5xl text-[#c4b5fd]/30 mb-8 leading-none">{item.step}</p>
              <h3 className="font-garamond text-xl mb-4">{item.title}</h3>
              <p className="font-outfit text-white/45 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
