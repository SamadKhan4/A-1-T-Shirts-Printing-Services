import { useState } from "react";
import { quoteDetails } from "../data/siteData";

export default function QuoteSection() {
  const [formData, setFormData] = useState({ name: "", phone: "", requirement: "" });

  const handleSubmit = () => {
    if (!formData.name || !formData.phone) return;
    alert(`Thank you, ${formData.name}! We'll reach out within 24 hours.`);
    setFormData({ name: "", phone: "", requirement: "" });
  };

  return (
    <section id="quote" className="py-28 bg-[#f7f4ff] border-t border-black/8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <p className="font-outfit text-xs tracking-[0.22em] uppercase text-lavender mb-5">
              Ready to Print?
            </p>
            <h2 className="font-garamond text-4xl lg:text-5xl leading-tight mb-8">
              Get pricing for your next T-shirt or uniform order.
            </h2>
            <p className="font-outfit text-black/55 text-sm leading-relaxed mb-12">
              Send quantity, garment type, sizes and logo details. The team can guide you on
              print method, fabric and timelines.
            </p>

            <div className="space-y-6">
              {quoteDetails.map(({ label, value }) => (
                <div key={label} className="flex justify-between border-b border-black/8 pb-5">
                  <span className="font-outfit text-xs uppercase tracking-wider text-black/45">
                    {label}
                  </span>
                  <span className="font-garamond text-black/70 italic">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-black/10 bg-white p-10 relative">
            <div className="absolute top-0 left-0 w-5 h-5 border-t border-l border-lavender" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-b border-r border-lavender" />

            <div className="space-y-6">
              <div>
                <label>Your Name</label>
                <input
                  type="text"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={(event) => setFormData({ ...formData, name: event.target.value })}
                />
              </div>
              <div>
                <label>Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 00000 00000"
                  value={formData.phone}
                  onChange={(event) => setFormData({ ...formData, phone: event.target.value })}
                />
              </div>
              <div>
                <label>Requirement</label>
                <textarea
                  rows={4}
                  placeholder="Example: 200 black polo T-shirts with left chest logo"
                  value={formData.requirement}
                  onChange={(event) => setFormData({ ...formData, requirement: event.target.value })}
                />
              </div>
              <button onClick={handleSubmit} className="btn-primary w-full text-center" type="button">
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
