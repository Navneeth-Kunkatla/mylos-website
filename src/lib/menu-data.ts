export type MilkTeaItem = {
  name: string;
  desc: string;
  emoji: string;
  popular?: boolean;
};

export type NamedMenuItem = { name: string; note?: string };

export type MenuPriceRow = { label: string; price: string; note?: string };

export const bobaPricing = {
  medium: "$5.49",
  large: "$6.99",
  flavorAddon: "+$1.00",
} as const;

export const milkTeas: MilkTeaItem[] = [
  {
    name: "Thai",
    desc: "Bold, sweet brewed Thai tea with creamy milk",
    popular: true,
    emoji: "🧡",
  },
  {
    name: "Taro",
    desc: "Creamy, earthy taro root blend — a fan favorite",
    popular: true,
    emoji: "💜",
  },
  {
    name: "Strawberry",
    desc: "Light and fruity strawberry milk tea",
    emoji: "🍓",
  },
  {
    name: "Matcha",
    desc: "Smooth green tea with milk — earthy and balanced",
    emoji: "🍵",
  },
  {
    name: "Brown Sugar",
    desc: "Slow-cooked brown sugar syrup stripes through creamy milk tea",
    popular: true,
    emoji: "🤎",
  },
  {
    name: "No Flavor, Just Tea",
    desc: "Pure black or green tea with milk and fructose",
    emoji: "☕",
  },
];

export const milkTeaBaseNote = "Green / Black Tea / No Tea · Flavor add-on +$1.00 · Non-Dairy milk +$1.00";

export const fruitTeas = [
  { name: "Cherry", emoji: "🍒" },
  { name: "Watermelon", emoji: "🍉" },
  { name: "Raspberry", emoji: "🫐" },
  { name: "Strawberry", emoji: "🍓" },
  { name: "Passionfruit", emoji: "💛" },
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
  { name: "Passionfruit" },
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

export const sugarLevels = [
  { label: "Minimum", price: "no charge" },
  { label: "50%", price: "no charge" },
  { label: "Regular", price: "no charge" },
  { label: "125%", price: "no charge" },
] as const;

export const iceLevels = [
  { label: "No Ice", price: "+$1.00" },
  { label: "Low Ice", price: "+$0.50" },
  { label: "Regular", price: "no charge" },
  { label: "Extra", price: "no charge" },
] as const;

export const bobaAddons = [{ label: "Non-Dairy Milk", price: "+$1.00" }] as const;

export const fruitTeaBaseNote = "Green / Black Tea / No Tea · Flavor add-on +$1.00";

export const coffeeHot = [
  { name: "Americano", price: "$3.50" },
  { name: "Latte", price: "$5.50" },
  { name: "Mocha", price: "$5.75" },
  { name: "Espresso", price: "$3.50" },
  { name: "Macchiato", price: "$4.50" },
  { name: "Cappuccino", price: "$4.75" },
] as const;

export const coffeeIced = [
  { name: "Americano", price: "$4.00" },
  { name: "Latte", price: "$6.00" },
  { name: "Mocha", price: "$6.50" },
] as const;

export const coffeeAddons = [
  { label: "Double Shot", price: "+$2.00" },
  { label: "Non-Dairy Milk", price: "+$1.00" },
] as const;

export const coffeeSyrups = [
  "Hazelnut",
  "Caramel",
  "Lavender",
  "Vanilla",
  "Chocolate",
  "Sugar-free Vanilla",
] as const;

export const syrupPrice = "+$0.50 each";

export const waffles = [
  {
    name: "Mango-ffle",
    price: "$11.25",
    desc: "Mango, whipped cream, mango drizzle",
    emoji: "🥭",
  },
  {
    name: "Strawberry Banana",
    price: "$10.25",
    desc: "Strawberry, banana, vanilla ice cream, chocolate syrup",
    emoji: "🍓",
  },
  {
    name: "Ube Dream",
    price: "$10.25",
    desc: "Ube ice cream, Oreo cookies, chocolate drizzle",
    emoji: "💜",
    popular: true,
  },
] as const;

export const iceCreamSizes = [
  {
    name: "Kids Size",
    price: "$4.95",
    note: "No mix-ins or drizzles",
    bg: "bg-accent/20",
    border: "border-accent/40",
    priceColor: "text-accent",
  },
  {
    name: "Single",
    price: "$6.95",
    note: "One generous scoop",
    bg: "bg-primary/20",
    border: "border-primary/40",
    priceColor: "text-primary",
  },
  {
    name: "Double",
    price: "$7.95",
    note: "Mix & match two scoops",
    bg: "bg-muted/30",
    border: "border-muted-foreground/30",
    priceColor: "text-secondary-foreground",
  },
] as const;

export const iceCreamMixins = [
  { label: "First topping", price: "+$0.75" },
  { label: "Additional mix-ins", price: "+$0.50 each" },
] as const;

export const iceCreamDrizzles = [
  { label: "First drizzle", price: "+$0.75" },
  { label: "Additional drizzles", price: "+$0.50 each" },
] as const;

/** Rotating stone ice cream — ask in store for today's lineup */
export const iceCreamHighlight = {
  name: "Ube Stone Ice Cream",
  price: "$6.95",
  tagline: "Stone-ground, creamy, and always rotating",
} as const;
