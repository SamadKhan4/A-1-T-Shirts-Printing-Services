import logo from "../assets/a-1.png";
import { specialties } from "../data/siteData";
import { smoothScrollTo } from "../utils/smoothScroll";

export default function HeroSection() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center pt-24 relative overflow-hidden">
      
      <div className="absolute inset-0 z-[1] bg-white/82" />
      <div
        className="absolute inset-0 z-[2] opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(0,0,0,0.18) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(0,0,0,0.18) 80px)",
        }}
      />
      <div
        className="absolute top-0 right-0 z-[2] w-1/2 h-full opacity-10"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, #8b5cf6 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-8 fade-up">
              T-shirt printing & bulk apparel partner
            </p>
            <h1 className="font-garamond text-5xl lg:text-7xl leading-[1.08] mb-8 fade-up delay-1">
              Custom branded
              <br />
              <em>garments</em> made
              <br />
              sharp & fast.
            </h1>
            <p className="font-outfit text-black/55 text-base leading-relaxed max-w-md mb-12 fade-up delay-2">
              A-1 Prints helps companies, events, creators and teams produce premium T-shirts,
              polos, uniforms and merchandise with clean print quality and dependable delivery.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-3">
              <a href="#quote" className="btn-primary" onClick={(event) => smoothScrollTo(event, "#quote")}>
                Start Your Order
              </a>
              <a href="#products" className="btn-outline" onClick={(event) => smoothScrollTo(event, "#products")}>
                View Products
              </a>
            </div>
          </div>

          <div className="relative fade-up delay-4">
            <div className="border border-black/10 bg-[#faf8ff] p-8 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-lavender" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-lavender" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-lavender" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-lavender" />

              <div className="flex items-center justify-center mb-8">
                <img src={logo} alt="" className="w-24 h-24 object-cover rounded-full border border-black/15" />
              </div>

              <p className="font-outfit text-xs tracking-[0.18em] uppercase text-black/40 text-center mb-6">
                Specialties
              </p>

              <div className="grid grid-cols-2 gap-3">
                {specialties.map((item) => (
                  <div
                    key={item}
                    className="border border-black/10 bg-white py-3 px-4 text-center hover:border-lavender/40 transition-colors"
                  >
                    <span className="font-garamond text-sm italic text-black/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-black/10 flex justify-between items-center">
                <span className="font-outfit text-xs text-black/40 uppercase tracking-widest">
                  Est. A-1 Prints
                </span>
                <span className="font-garamond italic text-lavender text-sm">Pan India Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
