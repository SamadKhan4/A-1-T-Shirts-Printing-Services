import { stats } from "../data/siteData";

export default function StatsSection() {
  return (
    <section className="border-b border-black/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-black/8">
          {stats.map(({ value, label }) => (
            <div key={label} className="py-14 px-10 text-center">
              <p className="font-garamond text-5xl lg:text-6xl text-black mb-2">{value}</p>
              <p className="font-outfit text-xs tracking-[0.16em] uppercase text-black/45">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
