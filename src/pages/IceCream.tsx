import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { images } from "@/lib/site-config";
import { iceCreamSizes, iceCreamFlavors } from "@/lib/menu-data";

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };

const sizeColors: Record<string, string> = {
  Kids: "text-[#00D4D4]",
  "Single Scoop": "text-primary",
  "Double Scoop": "text-[#B088FF]",
};

export default function IceCream() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#1E0E45" }}>
      <Navbar />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-[#00D4D4] font-bold uppercase tracking-widest text-sm mb-4">Artisan</p>
              <h1 className="text-5xl md:text-7xl font-display font-black text-white leading-[1.05] mb-6">
                SCOOP IT <span className="text-[#00D4D4]">YOUR WAY</span>
              </h1>
              <p className="text-white/60 text-lg mb-10 max-w-md leading-relaxed">
                Artisan ice cream with 16+ rotating flavors. Go wild with mix-ins and drizzles.
              </p>

              <div className="space-y-3">
                {iceCreamSizes.map((s, i) => (
                  <motion.div
                    key={s.name}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex justify-between items-center bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-4 hover:bg-white/15 transition-colors"
                  >
                    <div>
                      <span className="text-white font-bold text-lg">{s.name}</span>
                      <p className="text-white/50 text-sm">{s.note}</p>
                    </div>
                    <span className={`text-3xl font-black ${sizeColors[s.name] ?? "text-white"}`}>{s.price}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-3">Mix-ins</p>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white/70">1st topping</span>
                    <span className="text-white font-bold">Free</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Each extra</span>
                    <span className="text-white font-bold">+$0.75</span>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4">
                  <p className="text-white/40 uppercase tracking-widest text-xs font-bold mb-3">Drizzles</p>
                  <div className="flex justify-between mb-1.5">
                    <span className="text-white/70">First drizzle</span>
                    <span className="text-white font-bold">+$0.75</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Each extra</span>
                    <span className="text-white font-bold">+$0.50</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative flex justify-center"
            >
              <div className="absolute top-4 right-4 z-10 w-24 h-24 rounded-full border-2 border-[#00D4D4] bg-[#1E0E45] flex flex-col items-center justify-center text-center shadow-xl">
                <span className="text-[#00D4D4] font-black text-2xl leading-none">16+</span>
                <span className="text-white/70 text-[10px] font-bold uppercase tracking-widest leading-tight mt-1">
                  Rotating
                  <br />
                  Flavors
                </span>
              </div>
              <div className="w-full max-w-md rounded-[3rem] overflow-hidden shadow-2xl">
                <img src={images.iceCream} alt="Artisan ice cream" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-[#00D4D4] font-bold uppercase tracking-widest text-sm mb-2">Today&apos;s Selection</p>
            <h2 className="text-4xl md:text-5xl font-display font-black text-white uppercase mb-3">Current Flavors</h2>
            <p className="text-white/40 mb-10">
              Flavors rotate seasonally — ask your server for today&apos;s full lineup.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-5">
              {iceCreamFlavors.map((flavor, i) => (
                <motion.div
                  key={flavor.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  transition={{ delay: i * 0.03 }}
                  className="group cursor-default"
                >
                  <div
                    className="w-full aspect-square rounded-2xl mb-3 shadow-lg group-hover:scale-105 transition-transform duration-200"
                    style={{ backgroundColor: flavor.color }}
                  />
                  <p className="text-white/80 font-semibold text-sm text-center group-hover:text-white transition-colors leading-snug">
                    {flavor.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
