import { ASSETS } from "@/lib/assets";

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: "apparel" | "accessories" | "vinyl" | "parts";
  badge?: string;
};

export const products: Product[] = [
  {
    id: "cpt-tee-black",
    name: "Car Part Time Tee — Black",
    description:
      "Heavyweight cotton tee with woven label. Designed for the garage and the gallery.",
    price: 48,
    image: ASSETS.images.services,
    category: "apparel",
    badge: "New Drop",
  },
  {
    id: "cpt-cap-sage",
    name: "Sage Club Cap",
    description:
      "Structured six-panel cap in sage green with embroidered CPT mark.",
    price: 42,
    image: ASSETS.images.membership,
    category: "apparel",
  },
  {
    id: "vinyl-curation",
    name: "Freakout Spot Vinyl — Curated",
    description:
      "Hand-selected vinyl from our lounge partner. Krautrock, Kosmische, ambient.",
    price: 35,
    image: ASSETS.images.archivePorsche,
    category: "vinyl",
  },
  {
    id: "keychain-brass",
    name: "Brass Key Fob",
    description:
      "Solid brass key fob inspired by vintage automotive hardware.",
    price: 28,
    image: ASSETS.images.archiveMercedes,
    category: "accessories",
  },
  {
    id: "detail-spray",
    name: "Studio Detail Spray",
    description:
      "On-site formulated detail spray used in our showroom prep.",
    price: 24,
    image: ASSETS.images.porsche911,
    category: "parts",
  },
  {
    id: "membership-hoodie",
    name: "Members Hoodie — Cognac",
    description:
      "Premium fleece hoodie in cognac. Members-only colorway.",
    price: 98,
    image: ASSETS.images.lancia,
    category: "apparel",
    badge: "Members",
  },
];

export const vehicles = [
  {
    id: "porsche-930",
    name: "1988 Porsche 911 Turbo",
    subtitle: "Guards Red 930 Turbo With Two Owners",
    price: 169000,
    image: ASSETS.images.porsche911,
    status: "available" as const,
  },
  {
    id: "lancia-delta",
    name: "1993 Lancia Delta HF Integrale Evoluzione II",
    subtitle: "Japanese-Market Example in Bianco",
    price: 87500,
    image: ASSETS.images.lancia,
    status: "available" as const,
  },
  {
    id: "porsche-996",
    name: "2004 Porsche 911 Carrera",
    subtitle: "6-Speed Manual — 36,246 Miles",
    price: 0,
    image: ASSETS.images.archivePorsche,
    status: "sold" as const,
  },
  {
    id: "mercedes-sls",
    name: "2012 Mercedes SLS AMG Roadster",
    subtitle: "9,288 Original Miles",
    price: 0,
    image: ASSETS.images.archiveMercedes,
    status: "sold" as const,
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
