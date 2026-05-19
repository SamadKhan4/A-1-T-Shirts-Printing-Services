import blackWithWhite from "../assets/product/Black-with-White-3.png";
import carbonTipping from "../assets/product/Carbon-ni-Tipping-Collar-T-shirt-Ice-Blue-with-White-1.jpg";
import carbonSolid from "../assets/product/carbon-solid color.png";
import soloSolidPolo from "../assets/product/solo formali solid polo.jpg";
import soloTipping from "../assets/product/solo tipping.jpg";
import rufftyTipping from "../assets/product/sunflower-yellow-with-black-2-2.jpg";

export const productCategories = [
  "All",
  "Round Neck T-Shirts",
  "Collar T-Shirts",
  "Crew Neck",
  "Formal Wear",
  "Bulk Uniforms",
];

export const products = [
  {
    slug: "carbonni-basics-round-neck",
    name: "Carbon ni Solid Collar T-shirt",
    category: "Cotton Collar T-shirts",
    image: carbonSolid,
    short: "Soft daily-wear tee for promotions, retail drops and company merchandise.",
    fabric: "Cotton rich single jersey",
    fit: "Regular comfort fit",
    sizes: "S to 5XL",
    colors: ["White", "Black", "Navy", "Grey", "Royal Blue", "Red"],
    branding: ["Screen Printing", "DTF Printing", "Heat Transfer"],
    highlights: ["Pre-shrunk finish", "Bulk order friendly", "Clean logo visibility"],
  },
  {
    slug: "high-o2-crew-neck",
    name: "Carbon ni Tipping Collar T-shirt",
    category: "Cotton Collar T-shirts",
    image: carbonTipping,
    short: "Breathable active tee suited for events, sports teams and daily uniforms.",
    fabric: "Performance polyester blend",
    fit: "Light active fit",
    sizes: "XS to 7XL",
    colors: ["White", "Sky Blue", "Navy", "Black", "Green"],
    branding: ["Sublimation", "DTF Printing", "Vinyl Transfer"],
    highlights: ["Quick-dry feel", "Smooth printable surface", "Easy team ordering"],
  },
  {
    slug: "ruffty-crew-neck",
    name: "Ruffty Solid Collar T-shirt",
    category: "Cotton Collar T-shirts",
    image: blackWithWhite,
    short: "Dependable round-neck option for corporate gifting and campaign apparel.",
    fabric: "Combed cotton",
    fit: "Classic unisex fit",
    sizes: "S to 5XL",
    colors: ["White", "Black", "Melange", "Navy", "Maroon"],
    branding: ["Screen Printing", "Embroidery", "DTF Printing"],
    highlights: ["Everyday comfort", "Strong stitching", "Ideal for repeat orders"],
  },
  {
    slug: "ruffty-premium-crewneck",
    name: "Ruffty Tipping Collar T-shirt",
    category: "Cotton Collar T-shirts",
    image: rufftyTipping,
    short: "Premium cotton essentials for bulk daily wear and brand uniforms.",
    fabric: "Premium cotton",
    fit: "Relaxed crew fit",
    sizes: "XS to 7XL",
    colors: ["White", "Black", "Grey", "Navy"],
    branding: ["Embroidery", "DTF Printing", "Screen Printing"],
    highlights: ["Premium hand feel", "Ready stock options", "Corporate-ready finish"],
  },
  {
    slug: "solo-formali-banner-polo",
    name: "Solo Formali Solid Polo T-Shirt",
    category: "Cotton Collar T-shirts",
    image: soloSolidPolo,
    short: "Smart collar T-shirt for office teams, front desks and field staff.",
    fabric: "Cotton pique",
    fit: "Professional regular fit",
    sizes: "S to 5XL",
    colors: ["White", "Black", "Navy", "Grey", "Bottle Green"],
    branding: ["Embroidery", "Screen Printing", "DTF Printing"],
    highlights: ["Formal collar look", "Ideal for uniforms", "Durable logo placement"],
  },
  {
    slug: "solo-formali-solid-shirt",
    name: "Solo Formali Tipping Polo T-Shirt",
    category: "Cotton Collar T-shirts",
    image: soloTipping,
    short: "Formal shirt option for offices, hospitality, sales teams and events.",
    fabric: "Cotton blend shirting",
    fit: "Smart regular fit",
    sizes: "S to 5XL",
    colors: ["White", "Sky Blue", "Black", "Navy"],
    branding: ["Embroidery", "Heat Transfer"],
    highlights: ["Professional appearance", "Comfortable daily wear", "Team uniform ready"],
  },
];

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
