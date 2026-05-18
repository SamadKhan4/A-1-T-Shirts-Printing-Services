import { marqueeItems } from "../data/siteData";

export default function Marquee() {
  return (
    <div className="border-y border-white/8 py-4 overflow-hidden bg-[#0d0d0d]">
      <div className="flex whitespace-nowrap marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`} className="font-garamond italic text-white/40 text-base px-10">
            {item} <span className="text-[#c4b5fd] not-italic mx-2">-</span>
          </span>
        ))}
      </div>
    </div>
  );
}
