import idCard from "../assets/product/idcard.png";
import keychain from "../assets/product/keychain.jpg";
import toteBag from "../assets/product/tote bag.jpg";
import welcomeKit from "../assets/product/welcom-kit.png";
import magicMug from "../assets/Other/magic_mug.png";
import matteMug from "../assets/Other/matmug.png";
import photoMug from "../assets/Other/photomug.png";
import travelMug from "../assets/Other/travel-mug.png";
import whiteCeramicMug from "../assets/Other/White-Ceramic-Mug.png";

export const productDropdownItems = [
  {
    label: "All Products",
    href: "/products",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Goodies",
    href: "/products/goodies",
    image: welcomeKit,
  },
  {
    label: "Mugs",
    href: "/products/mugs",
    image: whiteCeramicMug,
  },
  {
    label: "Jackets",
    href: "/products/jackets",
    image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
  },
  {
    label: "Pillows",
    href: "/products/pillows",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
  },
];

export const productCollections = {
  goodies: {
    title: "Corporate Goodies",
    eyebrow: "Gift & Promo Range",
    intro:
      "Useful branded items for events, onboarding kits, client gifting and campaign giveaways.",
    items: [
      {
        name: "Welcome Kit",
        image: welcomeKit,
      },
      {
        name: "Branded Notebook",
        image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Custom Pen Set",
        image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Keychain",
        image: keychain,
      },
      {
        name: "Tote Bag",
        image: toteBag,
      },
      {
        name: "ID Card Lanyard",
        image: idCard,
      },
    ],
    uses: ["Employee onboarding", "Event giveaways", "Client gifting", "Retail promotions"],
  },
  mugs: {
    title: "Custom Mugs",
    eyebrow: "Drinkware",
    intro:
      "Printed mugs for offices, gifting, birthdays, team events and promotional campaigns.",
    items: [
      {
        name: "White Ceramic Mug",
        image: whiteCeramicMug,
      },
      {
        name: "Magic Mug",
        image: magicMug,
      },
      {
        name: "Corporate Logo Mug",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Photo Mug",
        image: photoMug,
      },
      {
        name: "Travel Mug",
        image: travelMug,
      },
      {
        name: "Matte Finish Mug",
        image: matteMug,
      },
    ],
    uses: ["Office gifting", "Brand merchandise", "Campaign kits", "Festival hampers"],
  },
  jackets: {
    title: "Custom Jackets",
    eyebrow: "Outerwear",
    intro:
      "Smart branded jackets for teams, winter uniforms, events, security staff and outdoor crews.",
    items: [
      {
        name: "Bomber Jacket",
        image: "https://images.unsplash.com/photo-1543076447-215ad9ba6923?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Zipper Jacket",
        image: "https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Hooded Jacket",
        image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Sleeveless Jacket",
        image: "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Corporate Winter Jacket",
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Event Staff Jacket",
        image: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?auto=format&fit=crop&w=900&q=80",
      },
    ],
    uses: ["Field teams", "Event staff", "Security uniforms", "Winter corporate wear"],
  },
  pillows: {
    title: "Printed Pillows",
    eyebrow: "Home & Gift",
    intro:
      "Custom pillows and cushion covers for gifting, decor, brand launches and merchandise packs.",
    items: [
      {
        name: "Photo Pillow",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Logo Cushion",
        image: "https://images.unsplash.com/photo-1616627561950-9f746e330187?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Heart Pillow",
        image: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Square Cushion",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Premium Gift Pillow",
        image: "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&w=900&q=80",
      },
      {
        name: "Decor Cushion Cover",
        image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
      },
    ],
    uses: ["Personal gifting", "Retail merchandise", "Brand hampers", "Event decor"],
  },
};

export function getProductCollection(slug) {
  return productCollections[slug];
}
