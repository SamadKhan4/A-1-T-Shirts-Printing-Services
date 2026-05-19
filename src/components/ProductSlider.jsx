import { useEffect, useState } from "react";
import carbonni from "../assets/A1/Carbonni-1-1.jpg";
import highO2 from "../assets/A1/HighO2.jpg";
import ruffty from "../assets/A1/Ruffty-1.jpg";
import rufftyCrewneck from "../assets/A1/Ruffty-Crewneck.jpg";
import soloFormaliBanner from "../assets/A1/Solo-Formali-BAnner-1.jpg";
import soloFormali from "../assets/A1/Solo-Formali.jpg";

const slides = [
  { src: carbonni, title: "Carbonni Tee" },
  { src: highO2, title: "HighO2 Apparel" },
  { src: ruffty, title: "Ruffty Tee" },
  { src: rufftyCrewneck, title: "Ruffty Crewneck" },
  { src: soloFormaliBanner, title: "Solo Formali Banner" },
  { src: soloFormali, title: "Solo Formali" },
];

export default function ProductSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(slider);
  }, []);

  const moveSlide = (direction) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  return (
    <section className="bg-white py-16">
      <div className="relative mx-auto max-w-[1440px] overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.title} className="min-w-full">
              <img
                src={slide.src}
                alt={slide.title}
                className="h-[190px] w-full object-cover sm:h-[280px] lg:h-[380px]"
              />
            </div>
          ))}
        </div>

        <button
          type="button"
          className="absolute left-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 font-outfit text-xl text-white transition hover:bg-lavender"
          onClick={() => moveSlide(-1)}
          aria-label="Previous product image"
        >
          {"<"}
        </button>
        <button
          type="button"
          className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/45 font-outfit text-xl text-white transition hover:bg-lavender"
          onClick={() => moveSlide(1)}
          aria-label="Next product image"
        >
          {">"}
        </button>

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              className={`h-2 w-2 rounded-full transition ${
                activeSlide === index ? "bg-lavender" : "bg-white/70 hover:bg-white"
              }`}
              onClick={() => setActiveSlide(index)}
              aria-label={`Show ${slide.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
