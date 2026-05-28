import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { images } from "@/lib/site-config";

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}>
              <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-8">
                OUR <span className="text-primary">STORY</span>
              </h1>
              <div className="space-y-6 text-lg text-gray-600 font-medium">
                <p>
                  It all started with a simple obsession: finding the perfect chew in a boba pearl and the creamiest
                  texture in a scoop of ice cream.
                </p>
                <p>
                  We were tired of choosing between our two favorite treats, so we decided to bring them together under
                  one roof. Mylo&apos;s isn&apos;t just a cafe—it&apos;s a celebration of flavor, texture, and
                  unapologetic joy.
                </p>
                <p>
                  Every morning, we brew premium loose-leaf teas, simmer our brown sugar syrup to caramelized perfection,
                  and churn fresh batches of ice cream.
                </p>
                <p className="font-bold text-foreground text-xl pt-4">Life&apos;s too short for boring drinks. Join the party.</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} className="relative">
              <div className="absolute inset-0 bg-primary translate-x-4 translate-y-4 rounded-[3rem] -z-10" />
              <img
                src={images.about}
                alt="Mylo's cafe"
                className="w-full h-auto rounded-[3rem] object-cover aspect-[4/5] border-4 border-white"
              />
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
