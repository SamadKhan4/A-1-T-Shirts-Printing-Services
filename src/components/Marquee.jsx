import { marqueeItems } from "../data/siteData";

export default function Marquee() {
  return (
    <div className="border-y border-black/8 py-4 overflow-hidden bg-[#f7f4ff]">
      <div className="flex whitespace-nowrap marquee-track">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span key={`${item}-${index}`} className="font-garamond italic text-black/45 text-base px-10">
            {item} <span className="text-lavender not-italic mx-2">-</span>
          </span>
        ))}
      </div>
    </div>
  );
}
