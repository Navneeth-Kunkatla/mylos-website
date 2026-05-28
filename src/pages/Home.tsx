import { motion } from "framer-motion";
import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialLinks from "@/components/layout/SocialLinks";
import { images, site } from "@/lib/site-config";
import {
  bobaPricing,
  milkTeas,
  fruitTeas,
  lemonadeSlushies,
  toppings,
  iceCreamSizes,
  iceCreamFlavors,
} from "@/lib/menu-data";

const fadeUp = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } };

export default function Home() {
  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />

      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-primary">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-white/30">
                <span className="text-white font-bold text-sm tracking-wide">✦ Party in a cup</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black leading-[1.1] mb-6">
                <span className="text-white block">SIPS &</span>
                <span className="text-white block">SCOOPS,</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD600] to-[#FF6B00] block mt-2">
                  YOUR WAY
                </span>
              </h1>
              <p className="text-white/90 text-xl md:text-2xl font-semibold max-w-lg mb-10 leading-relaxed">
                {site.description}
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#boba-menu"
                  className="bg-[#1A1A3E] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-black transition-colors shadow-lg hover:-translate-y-1"
                >
                  See Boba Menu
                </a>
                <a
                  href="#ice-cream-menu"
                  className="bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg hover:-translate-y-1"
                >
                  See Ice Cream
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute top-[-20px] right-[-20px] z-20 bg-white rounded-full p-4 shadow-xl rotate-12 flex items-center justify-center w-28 h-28 border-4 border-primary">
                <span className="text-primary font-display font-bold text-center leading-tight">
                  100%
                  <br />
                  Fresh!
                </span>
              </div>
              <div className="bg-white rounded-[3rem] p-6 shadow-2xl rotate-[-3deg] transform transition-transform hover:rotate-0 duration-500">
                <img
                  src={images.heroBoba}
                  alt={`${site.name} boba tea`}
                  className="w-full h-auto rounded-[2rem] object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-[#FFD600]/20 rounded-full blur-3xl" />
      </section>

      <section id="boba-menu" className="py-24 bg-[#FFF8F6]">
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
              Medium {bobaPricing.medium} · Large {bobaPricing.large} · Flavor add-ons {bobaPricing.flavorAddon}
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
              <div className="rounded-[3rem] overflow-hidden shadow-xl w-full">
                <img src={images.fruitTea} alt="Boba tea selection" className="w-full h-full object-cover" />
              </div>
            </motion.div>

            <div className="lg:col-span-8">
              <h3 className="text-lg font-black text-foreground mb-5 uppercase tracking-wider text-primary">Milk Teas</h3>
              <div className="space-y-3">
                {milkTeas.map((item, i) => (
                  <motion.div
                    key={item.name}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    transition={{ delay: i * 0.07 }}
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
                            <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">fave</span>
                          )}
                        </div>
                        <p className="text-gray-400 text-sm mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                    <span className="font-black text-foreground ml-4 shrink-0 text-sm">from {item.priceLarge}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-10">
            <h3 className="text-lg font-black uppercase tracking-wider text-foreground mb-5">
              Fruit Teas{" "}
              <span className="text-gray-400 text-sm font-normal normal-case tracking-normal ml-1">
                from {bobaPricing.fruitTeaFrom}
              </span>
            </h3>
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
                  className="bg-white hover:bg-[#FFD600]/10 rounded-full px-5 py-2.5 font-semibold text-foreground text-sm transition-colors cursor-default shadow-sm flex items-center gap-1"
                >
                  {item.name}
                  {item.note && <span className="text-gray-400 text-xs ml-1">({item.note})</span>}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
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

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-14">
            <Link
              href="/boba"
              className="inline-block bg-foreground text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-primary transition-colors shadow-lg"
            >
              Full Boba Menu →
            </Link>
          </motion.div>
        </div>
      </section>

      <section id="ice-cream-menu" className="py-24 bg-secondary relative overflow-hidden">
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
              🍦 Ice Cream
            </div>
            <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-4">
              SCOOP IT <span className="text-accent">YOUR WAY</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto">
              16+ rotating flavors, hand-crafted daily. Go wild with mix-ins and drizzles.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="lg:col-span-4 flex items-stretch"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl w-full">
                <img src={images.iceCream} alt="Artisan ice cream" className="w-full h-full object-cover" />
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
                      <span className="text-white font-bold text-lg">{s.name}</span>
                      <p className="text-white/50 text-sm">{s.note}</p>
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
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Mix-ins</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/80">1st topping</span>
                      <span className="text-white font-bold">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Each additional</span>
                      <span className="text-white font-bold">+$0.75</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                  <p className="text-white/50 text-xs uppercase tracking-widest mb-3">Drizzles</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/80">First drizzle</span>
                      <span className="text-white font-bold">+$0.75</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Each additional</span>
                      <span className="text-white font-bold">+$0.50</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-black text-white">Current Flavors</h3>
              <span className="bg-white/10 text-white/70 border border-white/20 px-4 py-1.5 rounded-full text-sm font-semibold">
                16+ Rotating
              </span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {iceCreamFlavors.map((flavor, i) => (
                <motion.div
                  key={flavor.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.03 }}
                  className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl px-4 py-3 group transition-colors cursor-default"
                >
                  <div
                    className="w-4 h-4 rounded-full shrink-0 border border-white/20"
                    style={{ backgroundColor: flavor.color }}
                  />
                  <span className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                    {flavor.name}
                  </span>
                </motion.div>
              ))}
            </div>
            <p className="text-white/30 text-sm text-center mt-6">
              Flavors rotate seasonally — ask your server for today&apos;s full lineup.
            </p>
          </motion.div>

          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mt-12">
            <Link
              href="/ice-cream"
              className="inline-block bg-accent text-secondary px-10 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-lg"
            >
              Full Ice Cream Menu →
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-[#1A0E3A] to-[#2D1B5A]">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-12">JOIN THE PARTY</h2>
            <SocialLinks />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
