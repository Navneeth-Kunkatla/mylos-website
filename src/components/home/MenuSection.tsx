import type { ReactNode } from "react";
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

function Block({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <div id={id} className="scroll-mt-28">
      <h3 className="font-display font-black text-lg uppercase tracking-wide text-foreground border-b border-foreground/10 pb-2 mb-3">
        {title}
      </h3>
      <div className="space-y-3 text-sm text-foreground/85">{children}</div>
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return <p className="text-[11px] font-bold uppercase tracking-widest text-muted-foreground">{children}</p>;
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
  return <p className="leading-relaxed text-foreground/75">{items.join(" · ")}</p>;
}

function Note({ children }: { children: ReactNode }) {
  return <p className="text-xs text-muted-foreground leading-relaxed">{children}</p>;
}

export default function MenuSection() {
  const milkTeaNames = milkTeas.map((t) => (t.popular ? `${t.name}*` : t.name));
  const fruitTeaNames = fruitTeas.map((f) => f.name);
  const slushieNames = lemonadeSlushies.map((s) => (s.note ? `${s.name} (${s.note})` : s.name));
  const toppingNames = toppings.map((t) => t.name);

  const sugarNote = sugarLevels.every((s) => s.price === "no charge")
    ? "Sugar: Minimum · 50% · Regular · 125% — no charge"
    : sugarLevels.map((s) => `${s.label} ${s.price}`).join(" · ");

  const iceNote = iceLevels.map((l) => `${l.label} ${l.price === "no charge" ? "" : l.price}`.trim()).join(" · ");

  return (
    <section id="menu" className="py-14 md:py-16 bg-muted scroll-mt-24">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-8">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary mb-2">Menu</p>
          <h2 className="text-3xl md:text-4xl font-display font-black text-foreground">Everything we serve</h2>
        </div>

        <div className="bg-white rounded-2xl border border-border/60 shadow-sm px-5 py-6 md:px-8 md:py-8 space-y-8">
          <Block id="menu-boba" title="Boba">
            <Note>
              Medium {bobaPricing.medium} · Large {bobaPricing.large} · Flavor add-on {bobaPricing.flavorAddon}
            </Note>

            <div>
              <Label>Milk teas</Label>
              <DotList items={milkTeaNames} />
              <Note>Green / black / no tea base · Non-dairy milk +$1.00 · * fan favorite</Note>
            </div>

            <div>
              <Label>Fruit teas</Label>
              <DotList items={fruitTeaNames} />
              <Note>Flavor add-on {bobaPricing.flavorAddon}</Note>
            </div>

            <div>
              <Label>Lemonade &amp; slushies</Label>
              <DotList items={slushieNames} />
            </div>

            <div>
              <Label>Toppings</Label>
              <DotList items={toppingNames} />
            </div>

            <div>
              <Label>Customize</Label>
              <Note>{sugarNote}</Note>
              <Note className="mt-1">Ice: {iceNote}</Note>
              {bobaAddons.map((a) => (
                <Note key={a.label} className="mt-1">
                  {a.label} {a.price}
                </Note>
              ))}
            </div>
          </Block>

          <Block id="menu-ice-cream" title="Ice Cream">
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
          </Block>

          <Block id="menu-coffee" title="Coffee">
            <Note>Hot 8oz · Iced 16oz · Syrups {syrupPrice}</Note>
            <div>
              <Label>Hot</Label>
              <div className="space-y-1 mt-1">
                {coffeeHot.map((item) => (
                  <Row key={`hot-${item.name}`} name={item.name} price={item.price} />
                ))}
              </div>
            </div>
            <div>
              <Label>Iced</Label>
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
              <Label>Syrups</Label>
              <DotList items={[...coffeeSyrups]} />
            </div>
          </Block>

          <Block id="menu-waffles" title="Waffles">
            <div className="space-y-2">
              {waffles.map((w) => (
                <div key={w.name} className="leading-snug">
                  <div className="flex justify-between gap-4">
                    <span className="font-semibold">
                      {w.name}
                      {"popular" in w && w.popular ? " *" : ""}
                    </span>
                    <span className="font-semibold shrink-0">{w.price}</span>
                  </div>
                  <p className="text-xs text-muted-foreground mt-0.5">{w.desc}</p>
                </div>
              ))}
            </div>
          </Block>
        </div>
      </div>
    </section>
  );
}
