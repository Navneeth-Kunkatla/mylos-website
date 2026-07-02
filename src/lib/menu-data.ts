export type MilkTeaItem = {
  name: string;
  desc: string;
  emoji: string;
  popular?: boolean;
};

export type NamedMenuItem = { name: string; note?: string };

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

export const sugarLevels = ["Minimum", "50%", "Regular", "125%"] as const;

export const iceLevels = ["No Ice", "Low Ice", "Regular", "Extra"] as const;

export const bobaAddons = ["Non-Dairy Milk"] as const;

export const coffeeHot = [
  "Americano",
  "Latte",
  "Mocha",
  "Espresso",
  "Macchiato",
  "Cappuccino",
] as const;

export const coffeeIced = ["Americano", "Latte", "Mocha"] as const;

export const coffeeAddons = ["Double Shot", "Non-Dairy Milk"] as const;

export const coffeeSyrups = [
  "Hazelnut",
  "Caramel",
  "Lavender",
  "Vanilla",
  "Chocolate",
  "Sugar-free Vanilla",
] as const;

export const waffles = [
  {
    name: "Mango-ffle",
    desc: "Mango, whipped cream, mango drizzle",
    emoji: "🥭",
  },
  {
    name: "Strawberry Banana",
    desc: "Strawberry, banana, vanilla ice cream, chocolate syrup",
    emoji: "🍓",
  },
  {
    name: "Ube Dream",
    desc: "Ube ice cream, Oreo cookies, chocolate drizzle",
    emoji: "💜",
    popular: true,
  },
] as const;

export const iceCreamSizes = [
  {
    name: "Kids Size",
    note: "No mix-ins or drizzles",
    bg: "bg-accent/20",
    border: "border-accent/40",
  },
  {
    name: "Single",
    note: "One generous scoop",
    bg: "bg-primary/20",
    border: "border-primary/40",
  },
  {
    name: "Double",
    note: "Mix & match two scoops",
    bg: "bg-muted/30",
    border: "border-muted-foreground/30",
  },
] as const;

export const iceCreamMixins = ["First topping", "Additional mix-ins"] as const;

export const iceCreamDrizzles = ["First drizzle", "Additional drizzles"] as const;

/** Rotating stone ice cream — ask in store for today's lineup */
export const iceCreamHighlight = {
  name: "Ube Stone Ice Cream",
  tagline: "Stone-ground, creamy, and always rotating",
} as const;
