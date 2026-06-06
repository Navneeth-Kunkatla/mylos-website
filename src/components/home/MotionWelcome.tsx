import { useState, useEffect, type ReactNode } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { images } from "@/lib/site-config";

type CollageItem = {
  id: string;
  src: string;
  alt: string;
  label: string;
  sublabel?: string;
  price: string;
  accent: string;
  className: string;
  labelClass: string;
  delay: number;
};

const collageItems: CollageItem[] = [
  {
    id: "milk-boba",
    src: images.promo.milkBoba,
    alt: "Mylo's milk boba",
    label: "MILK BOBA",
    price: "$6.49",
    accent: "#8B5E3C",
    className:
      "left-1/2 top-1/2 -translate-x-1/2 -translate-y-[42%] w-[58%] sm:w-[52%] md:w-[44%] lg:w-[38%] z-30",
    labelClass: "left-[8%] top-[18%] md:left-[12%] md:top-[16%]",
    delay: 0,
  },
  {
    id: "slushie",
    src: images.promo.slushie,
    alt: "Mylo's slushie",
    label: "SLUSHIE",
    price: "Refresh · Chill · Repeat",
    accent: "#F4C430",
    className:
      "right-[-2%] top-[6%] sm:right-[2%] sm:top-[8%] w-[48%] sm:w-[42%] md:w-[36%] lg:w-[32%] z-20 rotate-6",
    labelClass: "right-[6%] top-[4%] md:right-[10%]",
    delay: 0.6,
  },
  {
    id: "ube",
    src: images.promo.ubeIceCream,
    alt: "Mylo's ube stone ice cream",
    label: "UBE",
    sublabel: "STONE ICE CREAM",
    price: "$6.95",
    accent: "#8B5E3C",
    className:
      "left-[-4%] bottom-[4%] sm:left-[0%] sm:bottom-[6%] w-[50%] sm:w-[44%] md:w-[38%] lg:w-[34%] z-20 -rotate-5",
    labelClass: "left-[4%] bottom-[22%] md:left-[8%] md:bottom-[24%]",
    delay: 1.2,
  },
];

function WavyText({
  children,
  className = "",
  delay = 0,
  duration = 3.8,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}) {
  return (
    <motion.span
      animate={{ rotate: [-2.5, 2.5, -2.5], y: [0, -8, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`inline-block font-display font-black uppercase tracking-tight ${className}`}
    >
      {children}
    </motion.span>
  );
}

export default function MotionWelcome() {
  return (
    <section
      id="welcome"
      className="relative h-[100dvh] min-h-[600px] w-full overflow-hidden bg-secondary"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[70%] h-[60%] bg-primary/20 blur-[100px] rounded-full" />
        <div className="absolute top-[10%] right-0 w-[55%] h-[50%] bg-accent/25 blur-[90px] rounded-full" />
        <div className="absolute bottom-0 left-[10%] w-[60%] h-[55%] bg-primary/15 blur-[100px] rounded-full" />
      </div>

      <div className="absolute inset-x-0 top-[14%] sm:top-[16%] z-40 flex flex-col items-center text-center px-4 pointer-events-none">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-secondary-foreground/50 text-xs sm:text-sm font-bold uppercase tracking-[0.35em] mb-3"
        >
          Mylo&apos;s Creamery &amp; Cafe
        </motion.p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[0.95]">
          <WavyText className="text-secondary-foreground block" delay={0}>
            Sips &amp;
          </WavyText>
          <WavyText
            className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F5E6D3] to-primary block mt-1"
            delay={0.3}
          >
            Scoops
          </WavyText>
          <WavyText className="text-secondary-foreground/90 block text-3xl sm:text-4xl md:text-5xl mt-2" delay={0.6} duration={4.2}>
            Your Way
          </WavyText>
        </h1>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pt-16 pb-28">
        <div className="relative w-full max-w-6xl h-full mx-auto px-2 sm:px-6">
          {collageItems.map((item) => (
            <motion.div
              key={item.id}
              className={`absolute ${item.className}`}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{
                opacity: 1,
                scale: 1,
                rotate: [-5, 5, -5],
                y: [0, -16, 0],
              }}
              transition={{
                opacity: { duration: 0.7, delay: item.delay * 0.25 },
                scale: { duration: 0.7, delay: item.delay * 0.25 },
                rotate: {
                  duration: 4.2 + item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
                y: {
                  duration: 4.2 + item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                },
              }}
            >
              <div
                className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/15"
                style={{ boxShadow: `0 24px 60px ${item.accent}44` }}
              >
                <img src={item.src} alt={item.alt} className="w-full h-auto object-cover block" draggable={false} />
              </div>

              <motion.div
                className={`absolute ${item.labelClass} z-10 pointer-events-none`}
                animate={{ rotate: [-8, 8, -8], y: [0, -12, 0] }}
                transition={{
                  duration: 3.2 + item.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay * 0.5,
                }}
              >
                <span
                  className="font-display font-black text-2xl sm:text-3xl md:text-4xl uppercase drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
                  style={{ color: item.accent }}
                >
                  {item.label}
                </span>
                {item.sublabel && (
                  <span className="block text-[10px] sm:text-xs font-black text-white/80 uppercase tracking-widest mt-0.5">
                    {item.sublabel}
                  </span>
                )}
                <span className="block text-white/90 text-xs sm:text-sm font-bold mt-1 bg-black/50 backdrop-blur-sm rounded-full px-3 py-0.5 w-fit">
                  {item.price}
                </span>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 z-50 flex flex-col items-center pb-8 sm:pb-10 pt-20 bg-gradient-to-t from-secondary via-secondary/95 to-transparent">
        <motion.a
          href="#boba-menu"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="group flex flex-col items-center gap-2 text-secondary-foreground/70 hover:text-secondary-foreground transition-colors"
        >
          <span className="text-sm sm:text-base font-bold uppercase tracking-[0.25em]">Explore the menu</span>
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/30 group-hover:border-white/60 group-hover:bg-white/10 transition-colors"
          >
            <ChevronDown className="w-5 h-5" aria-hidden />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
