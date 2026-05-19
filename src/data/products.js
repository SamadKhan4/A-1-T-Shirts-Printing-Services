import tshirt1 from "../assets/T-shirts/1.png";
import tshirt2 from "../assets/T-shirts/2.png";
import tshirt3 from "../assets/T-shirts/3.png";
import tshirt4 from "../assets/T-shirts/4.png";
import tshirt5 from "../assets/T-shirts/5.png";
import tshirt6 from "../assets/T-shirts/6.png";
import tshirt7 from "../assets/T-shirts/7.png";
import tshirt8 from "../assets/T-shirts/8.png";
import tshirt9 from "../assets/T-shirts/9.png";
import tshirt10 from "../assets/T-shirts/10.png";
import tshirt11 from "../assets/T-shirts/11.png";
import tshirt12 from "../assets/T-shirts/12.png";
import tshirt13 from "../assets/T-shirts/13.png";
import tshirt14 from "../assets/T-shirts/14.png";
import tshirt15 from "../assets/T-shirts/15.png";
import tshirt16 from "../assets/T-shirts/16.png";
import tshirt17 from "../assets/T-shirts/17.png";
import tshirt18 from "../assets/T-shirts/18.png";
import tshirt19 from "../assets/T-shirts/19.png";

export const productCategories = [
  "All",
  "Polo T-Shirts",
  "Round Neck T-Shirts",
  "Oversized T-Shirts",
  "Hoodies",
  "Bulk Uniforms",
];

const productDefaults = {
  polo: {
    category: "Polo T-Shirts",
    fabric: "Premium cotton pique",
    fit: "Smart regular fit",
    sizes: "S to 5XL",
    branding: ["Embroidery", "DTF Printing", "Screen Printing"],
    highlights: ["Premium collar finish", "Bulk order friendly", "Logo-ready surface"],
  },
  roundNeck: {
    category: "Round Neck T-Shirts",
    fabric: "Soft cotton jersey",
    fit: "Classic comfort fit",
    sizes: "S to 5XL",
    branding: ["Screen Printing", "DTF Printing", "Heat Transfer"],
    highlights: ["Everyday comfort", "Clean print visibility", "Easy team ordering"],
  },
  oversized: {
    category: "Oversized T-Shirts",
    fabric: "Heavyweight cotton jersey",
    fit: "Relaxed oversized fit",
    sizes: "S to 3XL",
    branding: ["DTF Printing", "Screen Printing", "Vinyl Transfer"],
    highlights: ["Streetwear silhouette", "Soft hand feel", "Large artwork friendly"],
  },
  hoodie: {
    category: "Hoodies",
    fabric: "Cotton fleece blend",
    fit: "Relaxed winter fit",
    sizes: "S to 3XL",
    branding: ["Embroidery", "DTF Printing", "Heat Transfer"],
    highlights: ["Warm fleece feel", "Kangaroo pocket", "Winter merch ready"],
  },
};

const productData = [
  {
    slug: "classic-polo-t-shirt",
    name: "Classic Polo T-Shirt",
    image: tshirt1,
    short:
      "Stylish and comfortable polo t-shirt with a modern fit, perfect for casual wear, office styling, and everyday fashion.",
    type: "polo",
    colors: ["Black", "Navy", "White", "Grey", "Red"],
  },
  {
    slug: "premium-polo-t-shirt",
    name: "Premium Polo T-Shirt",
    image: tshirt2,
    short:
      "Modern slim-fit polo t-shirt with a stylish and sophisticated look, perfect for casual outings, smart wear, and everyday comfort.",
    type: "polo",
    fit: "Modern slim fit",
    colors: ["Black", "Navy", "Charcoal", "White"],
  },
  {
    slug: "blush-pink-classic-polo",
    name: "Blush Pink Classic Polo",
    image: tshirt3,
    short:
      "Refined style meets everyday comfort with this blush pink classic polo. Designed with a clean tailored fit and soft premium fabric.",
    type: "polo",
    colors: ["Blush Pink", "White", "Black", "Navy"],
  },
  {
    slug: "sunburst-yellow-premium-polo",
    name: "Sunburst Yellow Premium Polo",
    image: tshirt4,
    short:
      "Bright, confident, and effortlessly stylish - this sunburst yellow premium polo is crafted for a bold modern look.",
    type: "polo",
    colors: ["Sunburst Yellow", "Black", "White", "Navy"],
  },
  {
    slug: "crimson-edge-performance-polo",
    name: "Crimson Edge Performance Polo",
    image: tshirt5,
    short:
      "Elevate your active style with the Crimson Edge Performance Polo - a perfect blend of sporty sophistication and premium comfort.",
    type: "polo",
    fabric: "Performance polyester blend",
    fit: "Active regular fit",
    colors: ["Crimson", "Black", "White", "Navy"],
    highlights: ["Sporty collar detail", "Quick-dry feel", "Teamwear ready"],
  },
  {
    slug: "classic-forest-green-polo-t-shirt",
    name: "Classic Forest Green Polo T-Shirt",
    image: tshirt6,
    short:
      "A smart and stylish forest green polo T-shirt designed for everyday comfort. Its clean collar, half sleeves, and minimal stripe detailing give it a premium casual look.",
    type: "polo",
    colors: ["Forest Green", "Black", "White", "Navy"],
  },
  {
    slug: "classic-black-polo-t-shirt",
    name: "Classic Black Polo T-Shirt",
    image: tshirt7,
    short:
      "A stylish black polo T-shirt with a clean collar and half sleeves, perfect for a smart casual look. Its simple design makes it easy to pair with jeans, chinos, or casual trousers.",
    type: "polo",
    colors: ["Black", "White", "Navy", "Grey"],
  },
  {
    slug: "white-polo-t-shirt",
    name: "White Polo T-Shirt",
    image: tshirt8,
    short:
      "A clean and elegant white polo T-shirt designed for a fresh, premium casual look. Its soft fabric, classic collar, and half sleeves make it perfect for daily wear, office casuals, and weekend outings.",
    type: "polo",
    colors: ["White", "Black", "Navy", "Grey"],
  },
  {
    slug: "white-polo-t-shirt-orange-stripe-collar",
    name: "White Polo T-Shirt with Orange Stripe Collar",
    image: tshirt9,
    short:
      "A fresh and stylish white polo T-shirt featuring orange stripe detailing on the collar and sleeves. Its clean look and smart fit make it perfect for casual outings, office casuals, and everyday wear.",
    type: "polo",
    colors: ["White Orange", "White Navy", "White Black"],
    highlights: ["Contrast stripe collar", "Premium casual look", "Logo-ready surface"],
  },
  {
    slug: "light-grey-polo-t-shirt-navy-collar",
    name: "Light Grey Polo T-Shirt with Navy Collar",
    image: tshirt10,
    short:
      "A smart and comfortable light grey polo T-shirt featuring a stylish navy button placket and subtle sleeve detailing. Its clean fit and soft look make it perfect for casual outings, daily wear, and semi-casual styling.",
    type: "polo",
    colors: ["Light Grey Navy", "Grey Black", "White Navy"],
  },
  {
    slug: "navy-blue-polo-t-shirt-white-stripe-collar",
    name: "Navy Blue Polo T-Shirt with White Stripe Collar",
    image: tshirt11,
    short:
      "A stylish navy blue polo T-shirt designed with a classic collar, half sleeves, and subtle white stripe detailing. Its smart fit and rich color make it perfect for casual outings, college wear, and everyday styling.",
    type: "polo",
    colors: ["Navy White", "Black White", "Green White"],
  },
  {
    slug: "classic-black-polo-t-shirt-regular",
    name: "Classic Black Polo T-Shirt",
    image: tshirt12,
    short:
      "A simple and stylish black polo T-shirt designed for a clean everyday look. Its classic collar, half sleeves, and comfortable fit make it perfect for regular casual styling.",
    type: "polo",
    colors: ["Black", "White", "Navy", "Grey"],
  },
  {
    slug: "classic-black-round-neck-t-shirt",
    name: "Classic Black Round Neck T-Shirt",
    image: tshirt13,
    short:
      "A simple and stylish black round neck T-shirt designed for a clean casual look. Its half sleeves, plain design, and comfortable fit make it perfect for daily wear, travel, and casual outings.",
    type: "roundNeck",
    colors: ["Black", "White", "Navy", "Grey"],
  },
  {
    slug: "bright-red-round-neck-t-shirt",
    name: "Bright Red Round Neck T-Shirt",
    image: tshirt14,
    short:
      "A vibrant red round neck T-shirt designed for a bold and stylish casual look. Its plain design, half sleeves, and comfortable fit make it perfect for beach outings, travel, and everyday wear.",
    type: "roundNeck",
    colors: ["Red", "Black", "White", "Navy"],
  },
  {
    slug: "classic-white-round-neck-t-shirt",
    name: "Classic White Round Neck T-Shirt",
    image: tshirt15,
    short:
      "A clean and comfortable white round neck T-shirt designed for a fresh everyday look. Its plain style, half sleeves, and soft fit make it perfect for casual wear, layering, gym wear, and weekend outings.",
    type: "roundNeck",
    colors: ["White", "Black", "Navy", "Grey"],
  },
  {
    slug: "classic-white-round-neck-t-shirt-sharp",
    name: "Classic White Round Neck T-Shirt",
    image: tshirt16,
    short:
      "A clean and stylish white round neck T-shirt designed for a sharp everyday look. Its plain design, half sleeves, and comfortable fit make it perfect for casual wear, gym wear, travel, and layering.",
    type: "roundNeck",
    colors: ["White", "Black", "Navy", "Grey"],
  },
  {
    slug: "classic-black-hoodie",
    name: "Classic Black Hoodie",
    image: tshirt17,
    short:
      "A stylish black hoodie designed for a bold and comfortable casual look. Its attached hood, drawstrings, full sleeves, and front kangaroo pocket make it perfect for winter wear, travel, and everyday street-style outfits.",
    type: "hoodie",
    colors: ["Black", "Navy", "Grey", "Maroon"],
  },
  {
    slug: "oversized-black-round-neck-t-shirt",
    name: "Oversized Black Round Neck T-Shirt",
    image: tshirt18,
    short:
      "A trendy black oversized round neck T-shirt designed for a relaxed and modern casual look. Its loose fit, half sleeves, and plain design make it perfect for streetwear styling, daily wear, and comfortable outings.",
    type: "oversized",
    colors: ["Black", "White", "Grey", "Navy"],
  },
  {
    slug: "oversized-white-round-neck-t-shirt",
    name: "Oversized White Round Neck T-Shirt",
    image: tshirt19,
    short:
      "A trendy white oversized round neck T-shirt designed for a clean and relaxed streetwear look. Its loose fit, half sleeves, and minimal plain style make it perfect for daily wear, casual outings, and modern styling.",
    type: "oversized",
    colors: ["White", "Black", "Grey", "Navy"],
  },
];

export const products = productData.map(({ type, ...product }) => ({
  ...productDefaults[type],
  ...product,
}));

export function getProductBySlug(slug) {
  return products.find((product) => product.slug === slug);
}
