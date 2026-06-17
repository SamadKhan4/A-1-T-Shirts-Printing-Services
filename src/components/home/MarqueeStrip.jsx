import { Sparkles } from "lucide-react";

const messages = [
  "Best printing service",
  "Custom T-shirts",
  "Bulk order specialists",
  "DTF printing",
  "Screen printing",
  "Custom hoodies",
  "Sports jerseys",
  "Corporate merchandise",
  "Fast WhatsApp quotes"
];

export default function MarqueeStrip() {
  const loopItems = [...messages, ...messages];

  return (
    <section className="border-y border-line bg-ink py-4 text-white">
      <div className="overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-8">
          {loopItems.map((message, index) => (
            <div className="flex shrink-0 items-center gap-8" key={`${message}-${index}`}>
              <span className="font-display text-sm font-black uppercase tracking-[0.18em] text-white md:text-base">
                {message}
              </span>
              <Sparkles className="text-brand-red" size={18} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
