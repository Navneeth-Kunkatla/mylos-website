import { useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SocialLinks from "@/components/layout/SocialLinks";
import MotionWelcome from "@/components/home/MotionWelcome";
import FlavorRail from "@/components/home/FlavorRail";
import MenuSection from "@/components/home/MenuSection";
import { images, locations } from "@/lib/site-config";

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
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <FlavorRail />

      <MotionWelcome />

      <MenuSection />

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
