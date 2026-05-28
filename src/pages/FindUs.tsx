import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { MapPin, Clock, Phone, ExternalLink } from "lucide-react";
import { locations } from "@/lib/site-config";

export default function FindUs() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6">FIND US</h1>
            <p className="text-xl text-gray-600 font-medium">Drop by for a sip, a scoop, or both.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {locations.map((loc, index) => {
              const isPrimary = loc.accent === "primary";
              const iconWrap = isPrimary ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent";
              const titleColor = isPrimary ? "text-primary" : "text-accent";

              return (
                <motion.div
                  key={loc.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col"
                >
                  <h2 className={`text-3xl font-display font-bold mb-8 uppercase ${titleColor}`}>{loc.name}</h2>

                  <div className="space-y-6 flex-1">
                    <div className="flex items-start gap-4">
                      <div className={`${iconWrap} p-3 rounded-xl mt-1`}>
                        <MapPin size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">Address</h3>
                        <p className="text-gray-600 font-medium">
                          {loc.address.line1}
                          <br />
                          {loc.address.line2}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`${iconWrap} p-3 rounded-xl mt-1`}>
                        <Clock size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">Hours</h3>
                        <p className="text-gray-600 font-medium">
                          {loc.hours.map((line) => (
                            <span key={line} className="block">
                              {line}
                            </span>
                          ))}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className={`${iconWrap} p-3 rounded-xl mt-1`}>
                        <Phone size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-foreground">Phone</h3>
                        <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="text-gray-600 font-medium hover:text-primary transition-colors">
                          {loc.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  <a
                    href={loc.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-bold transition-colors ${
                      isPrimary
                        ? "bg-primary text-white hover:opacity-90"
                        : "bg-accent text-secondary hover:bg-white"
                    }`}
                  >
                    Get directions
                    <ExternalLink size={18} aria-hidden />
                  </a>
                </motion.div>
              );
            })}
          </div>

          <p className="text-center text-gray-400 text-sm mt-12 max-w-xl mx-auto">
            Addresses and hours are sample data — update <code className="text-gray-500">src/lib/site-config.ts</code> with
            your real locations before launch.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
