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
    "Coffee, stone ice cream, and boba at Mylo's Creamery & Cafe in Austin. Craft your perfect cup and scoop.",
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
  mapsUrl: string;
};

export const locations: Location[] = [
  {
    id: "austin",
    name: "Austin",
    accent: "primary",
    address: {
      line1: "3220 Feathergrass Ct Suite 138",
      line2: "Austin, TX 78755",
    },
    hours: [
      "Mon–Thu: 12PM – 10PM",
      "Fri–Sat: 12PM – 11PM",
      "Sun: 11AM – 10PM",
    ],
    phone: "",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=3220+Feathergrass+Ct+Suite+138+Austin+TX+78755",
  },
];

/** Site photos — promo posters vs in-store body shots */
export const images = {
  logo: "/images/mylos-logo.png",
  body: {
    cafeInterior: "/images/cafe-interior.png",
    toppingsBar: "/images/toppings-bar.png",
    storefront: "/images/storefront.png",
  },
  og: "/og-image.svg",
  promo: {
    milkBoba: "/images/promo/milk-boba.png",
    slushie: "/images/promo/slushie.png",
    ubeIceCream: "/images/promo/ube-ice-cream.png",
  },
  menu: {
    boba: "/images/boba-prep.png",
    coffee: "/images/cafe-interior.png",
    iceCream: "/images/toppings-bar.png",
  },
} as const;
