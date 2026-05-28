/**
 * Single source of truth for business info, links, and media.
 * Update values here (or via VITE_* env vars) before launch.
 */

const env = import.meta.env;

export const site = {
  name: "Mylo's",
  legalName: "Mylo's Creamery & Cafe",
  tagline: "Sips & Scoops Your Way.",
  description:
    "Trendy boba teas and artisan ice cream at Mylo's Creamery & Cafe. Craft your perfect cup and scoop.",
  copyrightYear: 2026,
} as const;

/** Set in .env: VITE_INSTAGRAM_URL, VITE_X_URL — leave empty to hide social buttons */
export const social = {
  instagram: (env.VITE_INSTAGRAM_URL as string | undefined)?.trim() || "",
  x: (env.VITE_X_URL as string | undefined)?.trim() || "",
} as const;

export type Location = {
  id: string;
  name: string;
  accent: "primary" | "accent";
  address: { line1: string; line2: string };
  hours: string[];
  phone: string;
  /** Google Maps search URL for "Get directions" */
  mapsUrl: string;
};

export const locations: Location[] = [
  {
    id: "downtown",
    name: "Downtown",
    accent: "primary",
    address: {
      line1: "123 Flavor Street",
      line2: "Metropolis, CA 90210",
    },
    hours: ["Mon–Thu: 11AM – 9PM", "Fri–Sun: 11AM – 11PM"],
    phone: "(555) 123-4567",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=123+Flavor+Street+Metropolis+CA+90210",
  },
  {
    id: "westside",
    name: "Westside",
    accent: "accent",
    address: {
      line1: "889 Sunset Blvd",
      line2: "Metropolis, CA 90211",
    },
    hours: ["Mon–Sun: 12PM – 10PM"],
    phone: "(555) 987-6543",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=889+Sunset+Blvd+Metropolis+CA+90211",
  },
];

/** Hero / menu photos in public/images/ */
export const images = {
  logo: "/logo.svg",
  heroBoba: "/images/hero-boba.png",
  fruitTea: "/images/fruit-tea.png",
  iceCream:
    "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80&w=900",
  about:
    "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
  og: "/og-image.svg",
} as const;
