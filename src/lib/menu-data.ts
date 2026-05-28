export type MilkTeaItem = {
  name: string;
  desc: string;
  priceLarge: string;
  priceMedium: string;
  emoji: string;
  popular?: boolean;
};

export type NamedMenuItem = { name: string; note?: string };

export const bobaPricing = {
  medium: "$5.49",
  large: "$6.99",
  flavorAddon: "+$1",
  fruitTeaFrom: "$6.49",
} as const;

export const milkTeas: MilkTeaItem[] = [
  {
    name: "Thai Milk Tea",
    desc: "Bold, sweet brewed Thai tea with creamy milk",
    priceLarge: "$6.49",
    priceMedium: "$5.49",
    popular: true,
    emoji: "🧡",
  },
  {
    name: "Taro Milk Tea",
    desc: "Creamy, earthy taro root blend — a fan favorite",
    priceLarge: "$6.49",
    priceMedium: "$5.49",
    popular: true,
    emoji: "💜",
  },
  {
    name: "Strawberry Milk Tea",
    desc: "Light and fruity strawberry milk tea",
    priceLarge: "$6.49",
    priceMedium: "$5.49",
    emoji: "🍓",
  },
  {
    name: "Brown Sugar Milk Tea",
    desc: "Slow-cooked brown sugar syrup stripes through creamy milk tea",
    priceLarge: "$6.49",
    priceMedium: "$5.49",
    popular: true,
    emoji: "🤎",
  },
  {
    name: "No Flavor, Just Tea",
    desc: "Pure black or green tea with milk and fructose",
    priceLarge: "$5.49",
    priceMedium: "$4.49",
    emoji: "🍵",
  },
];

export const fruitTeas = [
  { name: "Cherry", emoji: "🍒" },
  { name: "Watermelon", emoji: "🍉" },
  { name: "Raspberry", emoji: "🫐" },
  { name: "Strawberry", emoji: "🍓" },
  { name: "Peach", emoji: "🍑" },
  { name: "Lychee", emoji: "🤍" },
  { name: "Pineapple", emoji: "🍍" },
  { name: "Mango", emoji: "🥭" },
] as const;

export const lemonadeSlushies: NamedMenuItem[] = [
  { name: "Watermelon" },
  { name: "Strawberry" },
  { name: "Peach" },
  { name: "Lychee" },
  { name: "Pineapple" },
  { name: "Mango" },
  { name: "Cherry" },
  { name: "Raspberry" },
  { name: "Coconut", note: "Slushie only" },
  { name: "Chocolate", note: "Slushie only" },
];

export const toppings = [
  { name: "Tapioca Pearls", emoji: "⚫" },
  { name: "Rainbow Jelly", emoji: "🌈" },
  { name: "Strawberry Popping Boba", emoji: "🍓" },
  { name: "Mango Popping Boba", emoji: "🥭" },
  { name: "Whipping Cream", emoji: "🍦" },
  { name: "Milk Foam", emoji: "☁️" },
] as const;

export const iceLevels = [
  { label: "No Ice", price: "+$1.00" },
  { label: "Low Ice", price: "+$0.50" },
  { label: "Regular Ice", price: "no charge" },
  { label: "Extra Ice", price: "no charge" },
] as const;

export const iceCreamSizes = [
  {
    name: "Kids",
    price: "$4.95",
    note: "No mix-ins or drizzles",
    bg: "bg-[#00D4D4]/20",
    border: "border-[#00D4D4]/30",
    priceColor: "text-[#00D4D4]",
  },
  {
    name: "Single Scoop",
    price: "$6.95",
    note: "1 free mix-in included",
    bg: "bg-primary/20",
    border: "border-primary/40",
    priceColor: "text-primary",
  },
  {
    name: "Double Scoop",
    price: "$7.95",
    note: "Mix & match two flavors",
    bg: "bg-[#B088FF]/20",
    border: "border-[#B088FF]/30",
    priceColor: "text-[#B088FF]",
  },
] as const;

export const iceCreamFlavors = [
  { name: "Cookies & Cream", color: "#3D2C1E" },
  { name: "Strawberry Cheesecake", color: "#FF6B8A" },
  { name: "Matcha Green Tea", color: "#6BAB6B" },
  { name: "Salted Caramel", color: "#C6842B" },
  { name: "Birthday Cake", color: "#A78BFA" },
  { name: "Mint Chip", color: "#5CC8A8" },
  { name: "Butter Pecan", color: "#D4A244" },
  { name: "Mango Sorbet", color: "#FFB830" },
  { name: "Chocolate Fudge", color: "#4A2912" },
  { name: "Vanilla Bean", color: "#F5E6C8" },
  { name: "Cotton Candy", color: "#F9A8D4" },
  { name: "Ube Purple Yam", color: "#7C3AED" },
  { name: "Peach Cobbler", color: "#FB923C" },
  { name: "Lychee Rose", color: "#FDA4AF" },
  { name: "Rocky Road", color: "#6B3A2A" },
  { name: "Sea Salt Toffee", color: "#B45309" },
] as const;
