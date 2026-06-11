import { useCallback, useEffect, useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { images } from "@/lib/site-config";
import {
  bobaPricing,
  milkTeas,
  fruitTeas,
  lemonadeSlushies,
  toppings,
  sugarLevels,
  iceLevels,
  bobaAddons,
  coffeeHot,
  coffeeIced,
  coffeeAddons,
  coffeeSyrups,
  syrupPrice,
  waffles,
  iceCreamSizes,
  iceCreamMixins,
  iceCreamDrizzles,
  iceCreamHighlight,
} from "@/lib/menu-data";

type MenuTab = "boba" | "coffee" | "ice-cream";

const menuTabs: {
  id: MenuTab;
  label: string;
  emoji: string;
  image: string;
  alt: string;
  accent: string;
  glow: string;
  hash: string;
}[] = [
  {
    id: "boba",
    label: "Boba",
    emoji: "🧋",
    image: images.menu.boba,
    alt: "Fresh boba pearls being scooped into a Mylo's cup",
    accent: "#5ec4e0",
    glow: "rgba(94, 196, 224, 0.4)",
    hash: "menu-boba",
  },
  {
    id: "coffee",
    label: "Coffee",
    emoji: "☕",
    image: images.menu.coffee,
    alt: "Mylo's cafe interior with espresso bar",
    accent: "#8B5E3C",
    glow: "rgba(139, 94, 60, 0.35)",
    hash: "menu-coffee",
  },
  {
    id: "ice-cream",
    label: "Ice Cream",
    emoji: "🍦",
    image: images.menu.iceCream,
    alt: "Toppings bar with mix-ins and drizzles",
    accent: "#F4C430",
    glow: "rgba(244, 196, 48, 0.4)",
    hash: "menu-ice-cream",
  },
];

function hashToTab(hash: string): MenuTab {
  if (hash.includes("menu-coffee")) return "coffee";
  if (hash.includes("menu-ice-cream")) return "ice-cream";
  return "boba";
}

function Label({ children, accent }: { children: ReactNode; accent?: string }) {
  return (
    <p
      className="text-[11px] font-bold uppercase tracking-widest"
      style={accent ? { color: accent } : undefined}
    >
      {children}
    </p>
  );
}

function Row({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex justify-between gap-4 leading-snug">
      <span>{name}</span>
      <span className="font-semibold text-foreground shrink-0">{price}</span>
    </div>
  );
}

function DotList({ items }: { items: string[] }) {
  return <p className="leading-relaxed text-foreground/80">{items.join(" · ")}</p>;
}

function Note({ children }: { children: ReactNode }) {
  return <p className="text-xs text-muted-foreground leading-relaxed">{children}</p>;
}

function MenuPanel({ children }: { children: ReactNode }) {
  return <div className="space-y-4 text-sm text-foreground/90">{children}</div>;
}

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState<MenuTab>(() =>
    hashToTab(typeof window !== "undefined" ? window.location.hash : ""),
  );

  const current = menuTabs.find((t) => t.id === activeTab) ?? menuTabs[0];

  const syncFromHash = useCallback(() => {
    setActiveTab(hashToTab(window.location.hash));
  }, []);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  const handleTabChange = (tab: MenuTab) => {
    setActiveTab(tab);
    const entry = menuTabs.find((t) => t.id === tab);
    if (entry) {
      history.replaceState(null, "", `#${entry.hash}`);
    }
  };

  const milkTeaNames = milkTeas.map((t) => (t.popular ? `${t.name}*` : t.name));
  const fruitTeaNames = fruitTeas.map((f) => f.name);
  const slushieNames = lemonadeSlushies.map((s) => (s.note ? `${s.name} (${s.note})` : s.name));
  const toppingNames = toppings.map((t) => t.name);

  const sugarNote = sugarLevels.every((s) => s.price === "no charge")
    ? "Sugar: Minimum · 50% · Regular · 125% — no charge"
    : sugarLevels.map((s) => `${s.label} ${s.price}`).join(" · ");

  const iceNote = iceLevels.map((l) => `${l.label} ${l.price === "no charge" ? "" : l.price}`.trim()).join(" · ");

  return (
    <section id="menu" className="relative py-14 md:py-20 scroll-mt-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-b from-background via-muted/60 to-background pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute top-0 left-[-10%] w-[45%] h-[40%] bg-primary/8 blur-[100px] rounded-full pointer-events-none"
        aria-hidden
      />
      <div
        className="absolute bottom-[15%] right-[-8%] w-[40%] h-[35%] blur-[90px] rounded-full pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: current.glow }}
        aria-hidden
      />

      <div className="container relative mx-auto px-6 max-w-5xl">
        <div className="text-center mb-10">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Menu</p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground">
            <span className="text-foreground">Everything </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
              we serve
            </span>
          </h2>
          <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
            Pick a category — boba, coffee, or stone ice cream — and build it your way.
          </p>
        </div>

        <div
          role="tablist"
          aria-label="Menu categories"
          className="flex w-full max-w-lg mx-auto gap-1.5 rounded-full bg-secondary p-1.5 shadow-lg shadow-black/10 border border-white/10 mb-8"
        >
          {menuTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`menu-panel-${tab.id}`}
                id={`menu-tab-${tab.id}`}
                onClick={() => handleTabChange(tab.id)}
                className={`relative flex-1 rounded-full px-3 py-2.5 text-sm font-bold uppercase tracking-wide transition-colors ${
                  isActive ? "text-secondary-foreground" : "text-secondary-foreground/60 hover:text-secondary-foreground/85"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="menu-tab-pill"
                    className="absolute inset-0 rounded-full"
                    style={{ backgroundColor: tab.accent }}
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <span className="relative z-10 flex items-center justify-center gap-1.5">
                  <span>{tab.emoji}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="rounded-3xl border border-border/70 bg-card shadow-xl shadow-primary/5 overflow-hidden">
          <div className="grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
            <div className="relative min-h-[280px] md:min-h-[480px] bg-secondary overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <img src={current.image} alt={current.alt} className="h-full w-full object-cover" />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-secondary/80 via-secondary/10 to-transparent"
                    aria-hidden
                  />
                  <div
                    className="absolute inset-0 opacity-30 mix-blend-multiply"
                    style={{
                      background: `linear-gradient(135deg, ${current.accent}44 0%, transparent 60%)`,
                    }}
                    aria-hidden
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35 }}
                  >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-black/40 backdrop-blur-sm border border-white/15 text-white mb-2">
                      {current.emoji} {current.label}
                    </span>
                    <p className="text-secondary-foreground/90 text-sm font-semibold max-w-[220px] leading-snug">
                      {current.id === "boba" && "Hand-scooped pearls, brewed fresh daily."}
                      {current.id === "coffee" && "Espresso, lattes, and seasonal syrups."}
                      {current.id === "ice-cream" && "Stone ice cream with mix-ins & drizzles."}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div
              role="tabpanel"
              id={`menu-panel-${activeTab}`}
              aria-labelledby={`menu-tab-${activeTab}`}
              className="px-5 py-6 md:px-8 md:py-8 bg-card"
            >
              {activeTab === "boba" && (
                <div id="menu-boba" className="scroll-mt-28">
                  <MenuPanel>
                    <Note>
                      Medium {bobaPricing.medium} · Large {bobaPricing.large} · Flavor add-on{" "}
                      {bobaPricing.flavorAddon}
                    </Note>
                    <div>
                      <Label accent={current.accent}>Milk teas</Label>
                      <DotList items={milkTeaNames} />
                      <Note>Green / black / no tea base · Non-dairy milk +$1.00 · * fan favorite</Note>
                    </div>
                    <div>
                      <Label accent={current.accent}>Fruit teas</Label>
                      <DotList items={fruitTeaNames} />
                      <Note>Flavor add-on {bobaPricing.flavorAddon}</Note>
                    </div>
                    <div>
                      <Label accent={current.accent}>Lemonade &amp; slushies</Label>
                      <DotList items={slushieNames} />
                    </div>
                    <div>
                      <Label accent={current.accent}>Toppings</Label>
                      <DotList items={toppingNames} />
                    </div>
                    <div>
                      <Label accent={current.accent}>Customize</Label>
                      <Note>{sugarNote}</Note>
                      <Note className="mt-1">Ice: {iceNote}</Note>
                      {bobaAddons.map((a) => (
                        <Note key={a.label} className="mt-1">
                          {a.label} {a.price}
                        </Note>
                      ))}
                    </div>
                  </MenuPanel>
                </div>
              )}

              {activeTab === "coffee" && (
                <div id="menu-coffee" className="scroll-mt-28">
                  <MenuPanel>
                    <Note>Hot 8oz · Iced 16oz · Syrups {syrupPrice}</Note>
                    <div>
                      <Label accent={current.accent}>Hot</Label>
                      <div className="space-y-1 mt-1">
                        {coffeeHot.map((item) => (
                          <Row key={`hot-${item.name}`} name={item.name} price={item.price} />
                        ))}
                      </div>
                    </div>
                    <div>
                      <Label accent={current.accent}>Iced</Label>
                      <div className="space-y-1 mt-1">
                        {coffeeIced.map((item) => (
                          <Row key={`iced-${item.name}`} name={item.name} price={item.price} />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-1">
                      {coffeeAddons.map((a) => (
                        <Row key={a.label} name={a.label} price={a.price} />
                      ))}
                    </div>
                    <div>
                      <Label accent={current.accent}>Syrups</Label>
                      <DotList items={[...coffeeSyrups]} />
                    </div>
                  </MenuPanel>
                </div>
              )}

              {activeTab === "ice-cream" && (
                <div id="menu-ice-cream" className="scroll-mt-28">
                  <MenuPanel>
                    <Note>{iceCreamHighlight.tagline} — flavors rotate daily.</Note>
                    <div className="space-y-1.5">
                      {iceCreamSizes.map((s) => (
                        <Row key={s.name} name={`${s.name} — ${s.note}`} price={s.price} />
                      ))}
                    </div>
                    <div className="space-y-1">
                      {iceCreamMixins.map((m) => (
                        <Row key={m.label} name={m.label} price={m.price} />
                      ))}
                      {iceCreamDrizzles.map((d) => (
                        <Row key={d.label} name={d.label} price={d.price} />
                      ))}
                    </div>
                    <Row name={`Featured — ${iceCreamHighlight.name}`} price={iceCreamHighlight.price} />
                  </MenuPanel>
                </div>
              )}
            </div>
          </div>
        </div>

        <div
          id="menu-waffles"
          className="mt-10 md:mt-12 scroll-mt-28 rounded-3xl overflow-hidden border-2 border-accent/40 shadow-lg shadow-accent/10"
        >
          <div className="bg-secondary px-5 py-4 md:px-8 md:py-5 flex flex-wrap items-center gap-3 border-b border-white/10">
            <span className="inline-flex items-center gap-1.5 bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
              <Sparkles className="w-3 h-3" aria-hidden />
              All new
            </span>
            <h3 className="font-display font-black text-xl md:text-2xl uppercase tracking-wide text-secondary-foreground">
              House Waffles
            </h3>
            <p className="text-secondary-foreground/60 text-sm w-full sm:w-auto sm:ml-auto">
              Made fresh to order — not on the tab menu above
            </p>
          </div>

          <div className="bg-gradient-to-br from-card via-background to-muted/40 px-5 py-6 md:px-8 md:py-7">
            <div className="grid gap-4 sm:grid-cols-3">
              {waffles.map((w) => (
                <div
                  key={w.name}
                  className="rounded-2xl border border-primary/15 bg-card/80 p-4 hover:border-accent/50 hover:shadow-md hover:shadow-accent/10 transition-all"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <span className="text-2xl" aria-hidden>
                      {w.emoji}
                    </span>
                    <span className="font-display font-black text-primary text-lg shrink-0">{w.price}</span>
                  </div>
                  <p className="font-bold text-foreground leading-snug">
                    {w.name}
                    {"popular" in w && w.popular ? (
                      <span className="text-accent ml-1" aria-label="fan favorite">
                        *
                      </span>
                    ) : null}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
