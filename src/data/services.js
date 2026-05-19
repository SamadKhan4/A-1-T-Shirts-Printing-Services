import dtfPrinting from "../assets/product/dtf.png";
import embroideryPrint from "../assets/product/emrodiprint.png";
import screenPrinting from "../assets/product/screenprinting.png";
import sublimationPrint from "../assets/product/sublimation.png";
import vinylTransfer from "../assets/product/vinyle.png";

export const services = [
  {
    slug: "screen-printing",
    name: "Screen Printing",
    desc: "High-volume, crisp results",
    image: screenPrinting,
    intro:
      "Best for bulk T-shirt and uniform orders where solid colors, durability and consistent repeat prints matter.",
    bestFor: ["Bulk tees", "Event merchandise", "Uniform branding", "Simple bold artwork"],
    process: ["Artwork separation", "Screen setup", "Ink sampling", "Bulk production", "Quality check"],
    details:
      "Screen printing is a strong choice when you need clean brand colors across a larger quantity. It works especially well for logos, typography and simple campaign artwork.",
  },
  {
    slug: "dtf-printing",
    name: "DTF Printing",
    desc: "Full-color, no minimums",
    image: dtfPrinting,
    intro:
      "A flexible full-color option for detailed graphics, gradients, small batches and quick custom requirements.",
    bestFor: ["Full-color logos", "Small batches", "Detailed artwork", "Fast sampling"],
    process: ["Artwork cleanup", "Film print", "Powder curing", "Heat press", "Finish check"],
    details:
      "DTF printing is useful when artwork has multiple colors or detail. It gives flexibility across different garment colors without heavy setup.",
  },
  {
    slug: "embroidery",
    name: "Embroidery",
    desc: "Premium textured finish",
    image: embroideryPrint,
    intro:
      "Premium thread branding for polos, jackets, caps, uniforms and apparel that needs a sharp professional finish.",
    bestFor: ["Corporate polos", "Jackets", "Caps", "Premium uniforms"],
    process: ["Logo digitizing", "Thread matching", "Sample stitch", "Production run", "Trimming"],
    details:
      "Embroidery gives a durable, elevated look. It is especially suitable for chest logos, sleeve marks and high-repeat company uniforms.",
  },
  {
    slug: "sublimation",
    name: "Sublimation",
    desc: "All-over vivid prints",
    image: sublimationPrint,
    intro:
      "Vivid print method for polyester garments, sports jerseys, all-over patterns and custom graphic apparel.",
    bestFor: ["Sports jerseys", "All-over prints", "Polyester tees", "Bright graphics"],
    process: ["Design layout", "Transfer print", "Heat application", "Color check", "Packing"],
    details:
      "Sublimation bonds artwork into compatible fabric, keeping the print smooth and lightweight. It is ideal for activewear-style garments.",
  },
  {
    slug: "vinyl-transfer",
    name: "Vinyl Transfer",
    desc: "Clean cut & weed work",
    image: vinylTransfer,
    intro:
      "Clean heat-transfer option for names, numbers, simple graphics and short-run customization.",
    bestFor: ["Names and numbers", "Team jerseys", "Short runs", "Single-color marks"],
    process: ["Vector setup", "Vinyl cutting", "Weeding", "Heat press", "Peel and inspect"],
    details:
      "Vinyl transfer is useful for personalization and crisp single-color artwork. It is common for sports teams and staff identification.",
  },
  {
    slug: "bulk-uniforms",
    name: "Bulk Uniforms",
    desc: "Consistent repeat orders",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1200&q=80",
    intro:
      "End-to-end support for uniforms, garment sourcing, size planning, branding and repeat team orders.",
    bestFor: ["Office teams", "Retail staff", "Factory teams", "Field workforce"],
    process: ["Requirement mapping", "Garment selection", "Logo placement", "Production", "Dispatch"],
    details:
      "Bulk uniform support keeps sizing, colors and branding consistent across teams. It is ideal for organizations that need repeat supply.",
  },
];

export function getServiceBySlug(slug) {
  return services.find((service) => service.slug === slug);
}
