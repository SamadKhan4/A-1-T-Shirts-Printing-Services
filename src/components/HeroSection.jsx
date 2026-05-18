import logo from "../assets/a-1.png";
import { specialties } from "../data/siteData";

export default function HeroSection() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 79px, rgba(255,255,255,0.5) 80px), repeating-linear-gradient(90deg, transparent, transparent 79px, rgba(255,255,255,0.5) 80px)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: "radial-gradient(ellipse at 80% 30%, #c4b5fd 0%, transparent 65%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20 pb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-[#c4b5fd] mb-8 fade-up">
              T-shirt printing & bulk apparel partner
            </p>
            <h1 className="font-garamond text-5xl lg:text-7xl leading-[1.08] mb-8 fade-up delay-1">
              Custom branded
              <br />
              <em>garments</em> made
              <br />
              sharp & fast.
            </h1>
            <p className="font-outfit text-white/50 text-base leading-relaxed max-w-md mb-12 fade-up delay-2">
              A-1 Prints helps companies, events, creators and teams produce premium T-shirts,
              polos, uniforms and merchandise with clean print quality and dependable delivery.
            </p>
            <div className="flex flex-wrap gap-4 fade-up delay-3">
              <a href="#quote" className="btn-primary">
                Start Your Order
              </a>
              <a href="#products" className="btn-outline">
                View Products
              </a>
            </div>
          </div>

          <div className="relative fade-up delay-4">
            <div className="border border-white/10 p-8 relative">
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#c4b5fd]" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#c4b5fd]" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#c4b5fd]" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#c4b5fd]" />

              <div className="flex items-center justify-center mb-8">
                <img src={logo} alt="" className="w-24 h-24 object-cover rounded-full border border-white/15" />
              </div>

              <p className="font-outfit text-xs tracking-[0.18em] uppercase text-white/35 text-center mb-6">
                Specialties
              </p>

              <div className="grid grid-cols-2 gap-3">
                {specialties.map((item) => (
                  <div
                    key={item}
                    className="border border-white/8 py-3 px-4 text-center hover:border-[#c4b5fd]/40 transition-colors"
                  >
                    <span className="font-garamond text-sm italic text-white/70">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/8 flex justify-between items-center">
                <span className="font-outfit text-xs text-white/35 uppercase tracking-widest">
                  Est. A-1 Prints
                </span>
                <span className="font-garamond italic text-[#c4b5fd] text-sm">Pan India Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
