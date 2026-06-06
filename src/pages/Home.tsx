import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialLinks from "@/components/layout/SocialLinks";
import MotionWelcome from "@/components/home/MotionWelcome";
import { images, locations } from "@/lib/site-config";
import {
  bobaPricing,
  milkTeas,
  milkTeaBaseNote,
  fruitTeas,
  lemonadeSlushies,
  toppings,
  sugarLevels,
  iceLevels,
  bobaAddons,
  fruitTeaBaseNote,
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

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  const location = locations[0];

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;
    const timer = setTimeout(() => {
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      <MotionWelcome />

      {/* ── BOBA ── */}
      <section id="boba-menu" className="py-24 bg-muted scroll-mt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-4 text-sm uppercase tracking-widest">
              🧋 Menu
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground mb-4">BOBA TEAS</h2>
            <p className="text-gray-400 text-lg max-w-xl mx-auto">
              Medium {bobaPricing.medium} · Large {bobaPricing.large} · Flavor add-on {bobaPricing.flavorAddon}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-4 flex items-stretch"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-xl w-full aspect-[4/5]">
                <img
                  src={images.body.cafeInterior}
                  alt="Inside Mylo's cafe in Austin"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-8">
              <h3 className="text-lg font-black text-foreground mb-2 uppercase tracking-wider text-primary">Milk Teas</h3>
              <p className="text-gray-400 text-sm mb-5">{milkTeaBaseNote}</p>
              <div className="space-y-3">
                {milkTeas.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.06 }}
                    className="flex justify-between items-center py-4 px-5 rounded-2xl bg-white hover:bg-primary/5 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.emoji}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                          {item.popular && (
                            <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">fave</span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <span className="font-black text-primary ml-4 shrink-0 text-sm">{bobaPricing.flavorAddon}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <h3 className="text-lg font-black uppercase tracking-wider text-foreground mb-2">
              Fruit Teas{" "}
              <span className="text-gray-400 text-sm font-normal normal-case tracking-normal ml-1">
                flavor add-on {bobaPricing.flavorAddon}
              </span>
            </h3>
            <p className="text-gray-400 text-sm mb-5">{fruitTeaBaseNote}</p>
            <div className="flex flex-wrap gap-3">
              {fruitTeas.map((f, i) => (
                <motion.div
                  key={f.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-2 bg-white hover:bg-primary/10 rounded-full px-5 py-2.5 font-semibold text-foreground text-sm transition-colors cursor-default shadow-sm"
                >
                  <span>{f.emoji}</span> {f.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <h3 className="text-lg font-black uppercase tracking-wider text-foreground mb-5">🍋 Lemonade &amp; Slushies</h3>
            <div className="flex flex-wrap gap-3">
              {lemonadeSlushies.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.04 }}
                  className="bg-card hover:bg-accent/15 rounded-full px-5 py-2.5 font-semibold text-foreground text-sm transition-colors cursor-default shadow-sm flex items-center gap-1"
                >
                  {item.name}
                  {item.note && <span className="text-gray-400 text-xs ml-1">({item.note})</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <h3 className="text-lg font-black uppercase tracking-wider text-foreground mb-5">Toppings</h3>
            <div className="flex flex-wrap gap-3">
              {toppings.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-2 bg-white hover:bg-secondary/10 rounded-full px-5 py-2.5 font-semibold text-foreground text-sm transition-colors cursor-default shadow-sm"
                >
                  <span>{t.emoji}</span> {t.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h3 className="text-lg font-black uppercase tracking-wider text-foreground mb-6">Customize</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-black text-foreground uppercase tracking-wider text-sm mb-4">Sugar Level</h4>
                <div className="space-y-1">
                  {sugarLevels.map((level, i) => (
                    <div
                      key={level.label}
                      className={`flex justify-between items-center py-3 text-sm ${i < sugarLevels.length - 1 ? "border-b border-gray-100" : ""}`}
                    >
                      <span className="font-semibold text-foreground">{level.label}</span>
                      <span className="font-bold text-gray-400">{level.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-black text-foreground uppercase tracking-wider text-sm mb-4">Ice Level</h4>
                <div className="space-y-1">
                  {iceLevels.map((level, i) => (
                    <div
                      key={level.label}
                      className={`flex justify-between items-center py-3 text-sm ${i < iceLevels.length - 1 ? "border-b border-gray-100" : ""}`}
                    >
                      <span className="font-semibold text-foreground">{level.label}</span>
                      <span className={`font-bold ${level.price.startsWith("+") ? "text-primary" : "text-gray-400"}`}>
                        {level.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h4 className="font-black text-foreground uppercase tracking-wider text-sm mb-4">Milk Tea Add-ons</h4>
                <div className="space-y-1">
                  {bobaAddons.map((addon) => (
                    <div key={addon.label} className="flex justify-between items-center py-3 text-sm">
                      <span className="font-semibold text-foreground">{addon.label}</span>
                      <span className="font-bold text-primary">{addon.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── COFFEE & WAFFLES ── */}
      <section id="coffee-menu" className="py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full mb-4 text-sm uppercase tracking-widest">
              ☕ Coffee
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground mb-4">COFFEE &amp; WAFFLES</h2>
            <p className="text-gray-400 text-lg">Hot 8oz · Iced 16oz · Syrups {syrupPrice}</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-xl font-black text-foreground mb-4 uppercase tracking-wider">Hot · 8oz</h3>
              <div className="space-y-2">
                {coffeeHot.map((item) => (
                  <div
                    key={`hot-${item.name}`}
                    className="flex justify-between items-center py-3 px-5 rounded-2xl bg-muted hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-bold text-foreground">{item.name}</span>
                    <span className="font-black text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-xl font-black text-foreground mb-4 uppercase tracking-wider">Iced · 16oz</h3>
              <div className="space-y-2">
                {coffeeIced.map((item) => (
                  <div
                    key={`iced-${item.name}`}
                    className="flex justify-between items-center py-3 px-5 rounded-2xl bg-muted hover:bg-primary/5 transition-colors"
                  >
                    <span className="font-bold text-foreground">{item.name}</span>
                    <span className="font-black text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-lg font-black uppercase tracking-wider text-foreground mb-4">Add-ons</h3>
              <div className="space-y-2">
                {coffeeAddons.map((a) => (
                  <div key={a.label} className="flex justify-between py-3 px-5 rounded-2xl border border-gray-100">
                    <span className="font-semibold">{a.label}</span>
                    <span className="font-bold">{a.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h3 className="text-lg font-black uppercase tracking-wider text-foreground mb-4">Syrups · {syrupPrice}</h3>
              <div className="flex flex-wrap gap-2">
                {coffeeSyrups.map((s) => (
                  <span key={s} className="bg-muted px-4 py-2 rounded-full text-sm font-semibold text-foreground border border-border">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div id="waffles-menu" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="scroll-mt-24">
            <h3 className="text-3xl font-display font-black text-foreground mb-8 text-center uppercase">Waffles</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {waffles.map((w, i) => (
                <motion.div
                  key={w.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.08 }}
                  className="bg-muted rounded-[2rem] p-8 hover:shadow-lg transition-shadow border border-border"
                >
                  <span className="text-4xl mb-4 block">{w.emoji}</span>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h4 className="font-display font-black text-xl text-foreground uppercase leading-tight">{w.name}</h4>
                    {"popular" in w && w.popular && (
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full shrink-0">fave</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">{w.desc}</p>
                  <span className="text-2xl font-black text-primary">{w.price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── ICE CREAM ── */}
      <section id="ice-cream-menu" className="py-24 bg-secondary relative overflow-hidden scroll-mt-24">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

        <div className="container mx-auto px-6 max-w-6xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <div className="inline-block bg-accent/20 text-accent font-bold px-4 py-2 rounded-full mb-4 text-sm uppercase tracking-widest border border-accent/30">
              🍦 Stone Ice Cream
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-secondary-foreground mb-4">
              SCOOP IT <span className="text-accent">YOUR WAY</span>
            </h2>
            <p className="text-secondary-foreground/60 text-lg max-w-xl mx-auto">{iceCreamHighlight.tagline}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-4 flex items-stretch"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl w-full border-4 border-white/10 aspect-[4/5]">
                <img
                  src={images.body.toppingsBar}
                  alt="Mix-ins and toppings bar at Mylo's"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            <div className="lg:col-span-8 flex flex-col justify-center gap-6">
              <div className="space-y-3">
                {iceCreamSizes.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.1 }}
                    className={`flex justify-between items-center px-6 py-4 rounded-2xl border ${s.bg} ${s.border}`}
                  >
                    <div>
                      <span className="text-secondary-foreground font-bold text-lg">{s.name}</span>
                      <p className="text-secondary-foreground/50 text-sm">{s.note}</p>
                    </div>
                    <span className={`text-3xl font-black ${s.priceColor}`}>{s.price}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="grid grid-cols-2 gap-3"
              >
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-secondary-foreground/50 text-xs uppercase tracking-widest mb-3">Mix-ins</p>
                  <div className="space-y-2 text-sm">
                    {iceCreamMixins.map((m) => (
                      <div key={m.label} className="flex justify-between">
                        <span className="text-secondary-foreground/80">{m.label}</span>
                        <span className="text-secondary-foreground font-bold">{m.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-secondary-foreground/50 text-xs uppercase tracking-widest mb-3">Drizzles</p>
                  <div className="space-y-2 text-sm">
                    {iceCreamDrizzles.map((d) => (
                      <div key={d.label} className="flex justify-between">
                        <span className="text-secondary-foreground/80">{d.label}</span>
                        <span className="text-secondary-foreground font-bold">{d.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-white/10 border border-white/20 rounded-2xl px-6 py-5 flex justify-between items-center"
              >
                <div>
                  <p className="text-accent font-bold uppercase tracking-widest text-xs mb-1">Featured</p>
                  <p className="text-secondary-foreground font-display font-black text-xl">{iceCreamHighlight.name}</p>
                </div>
                <span className="text-3xl font-black text-accent">{iceCreamHighlight.price}</span>
              </motion.div>
            </div>
          </div>

          <p className="text-secondary-foreground/30 text-sm text-center">
            Flavors rotate daily — ask your server for today&apos;s stone ice cream lineup.
          </p>
        </div>
      </section>

      {/* ── FIND US ── */}
      <section id="find-us" className="py-24 bg-background scroll-mt-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground mb-4">FIND US</h2>
            <p className="text-gray-500 text-lg">Drop by for a sip, a scoop, or both.</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-[2rem] overflow-hidden shadow-lg min-h-[280px]"
            >
              <img
                src={images.body.storefront}
                alt="Mylo's storefront sign"
                className="w-full h-full object-cover min-h-[280px] lg:min-h-full"
              />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: 0.1 }}
              className="bg-white p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col"
            >
            <h3 className="text-2xl font-display font-bold text-primary mb-8 uppercase">{location.name}</h3>
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Address</p>
                  <p className="text-gray-600 font-medium">
                    {location.address.line1}
                    <br />
                    {location.address.line2}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-xl text-primary">
                  <Clock size={22} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Hours</p>
                  <p className="text-gray-600 font-medium">
                    {location.hours.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground rounded-full px-6 py-4 font-bold hover:opacity-90 transition-opacity"
            >
              Get directions
              <ExternalLink size={18} aria-hidden />
            </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-secondary-foreground mb-12">JOIN THE PARTY</h2>
            <SocialLinks />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
