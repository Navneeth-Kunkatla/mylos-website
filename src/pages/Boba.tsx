import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { images } from "@/lib/site-config";
import {
  bobaPricing,
  milkTeas,
  fruitTeas,
  lemonadeSlushies,
  toppings,
  iceLevels,
} from "@/lib/menu-data";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

export default function Boba() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-10 px-6 text-center bg-[#FFF8F6]">
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Full Menu</p>
          <h1 className="text-6xl md:text-8xl font-display font-black text-foreground">BOBA TEAS</h1>
          <p className="text-gray-400 mt-4 text-lg">
            Medium {bobaPricing.medium} · Large {bobaPricing.large} · Flavor add-on {bobaPricing.flavorAddon}
          </p>
        </motion.div>
      </div>

      <main className="pb-24">
        <section className="py-6">
          {milkTeas.map((item, i) => (
            <motion.div
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ delay: i * 0.06 }}
              className={`flex flex-col md:flex-row ${i % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-0 border-b border-gray-100 last:border-b-0`}
            >
              <div className="w-full md:w-1/2 bg-[#FFF8F6] flex items-center justify-center p-10 md:p-16 min-h-[340px]">
                <div className="relative w-full max-w-[320px]">
                  <div className="bg-white rounded-[2.5rem] shadow-lg overflow-hidden aspect-square">
                    <img
                      src={i % 2 === 0 ? images.fruitTea : images.heroBoba}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {item.popular && (
                    <div className="absolute -top-3 -left-3 w-10 h-10 bg-accent rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white text-lg">★</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="w-full md:w-1/2 px-8 md:px-16 py-10 md:py-16">
                {item.popular && (
                  <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-sm font-bold px-4 py-1.5 rounded-full mb-5">
                    ♥ Fan Favorite
                  </span>
                )}
                <h2 className="text-4xl md:text-5xl font-display font-black text-foreground uppercase leading-tight mb-4">
                  {item.name}
                </h2>
                <p className="text-gray-500 text-lg leading-relaxed mb-6 max-w-sm">{item.desc}</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-primary">{item.priceLarge}</span>
                  <span className="text-gray-400 font-semibold">med {item.priceMedium}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        <section className="py-16 bg-[#FFF8F6]">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Refreshing</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-foreground uppercase mb-2">Fruit Teas</h2>
              <p className="text-gray-400 mb-8">
                All fruit teas · Med {bobaPricing.medium} · Lg {bobaPricing.fruitTeaFrom}
              </p>
              <div className="flex flex-wrap gap-3">
                {fruitTeas.map((f) => (
                  <span
                    key={f.name}
                    className="bg-white text-foreground font-bold px-6 py-3 rounded-full text-base shadow-sm border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors"
                  >
                    {f.emoji} {f.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-[#FFB830] font-bold uppercase tracking-widest text-sm mb-2">Ice Cold</p>
              <h2 className="text-4xl md:text-5xl font-display font-black text-foreground uppercase mb-2">
                Lemonade &amp; Slushies
              </h2>
              <p className="text-gray-400 mb-8">
                Med {bobaPricing.medium} · Lg {bobaPricing.fruitTeaFrom} · All flavors available as lemonade or slushie
              </p>
              <div className="flex flex-wrap gap-3">
                {lemonadeSlushies.map((s) => (
                  <span
                    key={s.name}
                    className="bg-gray-50 text-foreground font-bold px-6 py-3 rounded-full text-base border border-gray-200 hover:border-[#FFB830]/40 hover:bg-[#FFF9E6] transition-colors flex items-center gap-2"
                  >
                    {s.name}
                    {s.note && <span className="text-xs text-gray-400 font-normal">({s.note})</span>}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#FFF8F6]">
          <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Add-ons</p>
                <h2 className="text-4xl font-display font-black text-foreground uppercase mb-2">Toppings</h2>
                <p className="text-gray-400 mb-8">1st included · +$0.75 each extra</p>
                <div className="flex flex-wrap gap-3">
                  {toppings.map((t) => (
                    <span
                      key={t.name}
                      className="bg-white text-foreground font-semibold px-5 py-2.5 rounded-full text-sm border border-gray-200 shadow-sm"
                    >
                      {t.emoji} {t.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: 0.1 }}
              >
                <p className="text-secondary font-bold uppercase tracking-widest text-sm mb-2">Customize</p>
                <h2 className="text-4xl font-display font-black text-foreground uppercase mb-6">Ice Level</h2>
                <div className="space-y-1">
                  {iceLevels.map((l, i) => (
                    <div
                      key={l.label}
                      className={`flex justify-between items-center py-4 ${i < iceLevels.length - 1 ? "border-b border-gray-100" : ""}`}
                    >
                      <span className="font-semibold text-foreground">{l.label}</span>
                      <span className="font-bold text-foreground">{l.price}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center py-4 border-t border-gray-100 mt-2">
                    <span className="font-semibold text-foreground">Non-Dairy Milk</span>
                    <span className="font-bold text-foreground">+$1.00</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
