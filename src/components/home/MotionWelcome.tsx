import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MapPin, Sparkles } from "lucide-react";
import { images, locations } from "@/lib/site-config";

type SpotlightCard = {
  id: string;
  src: string;
  alt: string;
  label: string;
  sublabel?: string;
  price: string;
  href: string;
  accent: string;
  glow: string;
};

const spotlightCards: SpotlightCard[] = [
  {
    id: "milk-boba",
    src: images.promo.milkBoba,
    alt: "Mylo's milk boba",
    label: "Milk Boba",
    price: "$6.49",
    href: "#menu-boba",
    accent: "#5ec4e0",
    glow: "rgba(94, 196, 224, 0.35)",
  },
  {
    id: "slushie",
    src: images.promo.slushie,
    alt: "Mylo's slushie",
    label: "Slushie",
    price: "Chill & refresh",
    href: "#menu-boba",
    accent: "#F4C430",
    glow: "rgba(244, 196, 48, 0.35)",
  },
  {
    id: "ube",
    src: images.promo.ubeIceCream,
    alt: "Mylo's ube stone ice cream",
    label: "Ube",
    sublabel: "Stone ice cream",
    price: "$6.95",
    href: "#menu-ice-cream",
    accent: "#c9a0ff",
    glow: "rgba(201, 160, 255, 0.35)",
  },
];

const pearls = [
  { left: "8%", top: "22%", size: 10, delay: 0 },
  { left: "18%", top: "68%", size: 14, delay: 1.2 },
  { left: "72%", top: "18%", size: 12, delay: 0.6 },
  { left: "84%", top: "58%", size: 9, delay: 1.8 },
  { left: "46%", top: "82%", size: 11, delay: 2.4 },
  { left: "58%", top: "12%", size: 8, delay: 3 },
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
      animate={{ rotate: [-2.5, 2.5, -2.5], y: [0, -6, 0] }}
      transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
      className={`inline-block font-display font-black uppercase tracking-tight ${className}`}
    >
      {children}
    </motion.span>
  );
}

function cardOffset(index: number, active: number, total: number) {
  const rel = (index - active + total) % total;
  if (rel === 0) return { x: 0, rotate: 0, scale: 1.05, z: 20 };
  if (rel === 1) return { x: 120, rotate: 11, scale: 0.86, z: 30 };
  return { x: -120, rotate: -11, scale: 0.86, z: 30 };
}

export default function MotionWelcome() {
  const [active, setActive] = useState(0);
  const location = locations[0];
  const current = spotlightCards[active];

  return (
    <section
      id="welcome"
      className="relative min-h-[100dvh] w-full overflow-hidden bg-secondary"
    >
      {/* Ambient glow + floating pearls */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute top-[20%] left-[-8%] w-[50%] h-[45%] bg-primary/12 blur-[110px] rounded-full" />
        <div
          className="absolute top-[35%] right-[-5%] w-[42%] h-[50%] blur-[100px] rounded-full transition-colors duration-700"
          style={{ backgroundColor: current.glow }}
        />
        <div className="absolute bottom-[8%] left-[20%] w-[55%] h-[35%] bg-accent/10 blur-[90px] rounded-full" />
        {pearls.map((p, i) => (
          <span
            key={i}
            className="hero-pearl absolute rounded-full"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 flex flex-col items-center min-h-[100dvh] pt-24 sm:pt-28 pb-28 px-6">
        {/* Headline */}
        <div className="text-center max-w-3xl mb-8 sm:mb-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-secondary-foreground/60 text-xs sm:text-sm font-bold uppercase tracking-[0.3em] mb-3"
          >
            Mylo&apos;s Creamery &amp; Cafe · Austin
          </motion.p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl leading-[0.95]">
            <WavyText className="text-secondary-foreground block" delay={0}>
              Sips &amp;
            </WavyText>
            <WavyText
              className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-[#F5E6D3] to-primary block mt-1"
              delay={0.3}
            >
              Scoops
            </WavyText>
            <WavyText
              className="text-secondary-foreground/90 block text-2xl sm:text-3xl md:text-4xl xl:text-5xl mt-2"
              delay={0.6}
              duration={4.2}
            >
              Your Way
            </WavyText>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-5 text-secondary-foreground/55 text-sm sm:text-base max-w-md mx-auto leading-relaxed"
          >
            Tap a poster to peek at the menu — boba, stone ice cream, and coffee all made your way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-7 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href={current.href}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-bold px-6 py-3 rounded-full hover:brightness-105 transition-all shadow-lg shadow-accent/25"
            >
              <Sparkles className="w-4 h-4" aria-hidden />
              See {current.label}
            </a>
            <a
              href={location.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-white/25 text-secondary-foreground font-bold px-6 py-3 rounded-full hover:bg-white/10 transition-colors"
            >
              <MapPin className="w-4 h-4" aria-hidden />
              Directions
            </a>
          </motion.div>
        </div>

        {/* Interactive counter fan */}
        <div className="relative w-full max-w-2xl h-[min(52vw,340px)] sm:h-[min(44vw,380px)] md:h-[400px] flex items-center justify-center">
          {spotlightCards.map((card, index) => {
            const { x, rotate, scale, z } = cardOffset(index, active, spotlightCards.length);
            const isActive = index === active;

            return (
              <motion.button
                key={card.id}
                type="button"
                onClick={() => setActive(index)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(index);
                  }
                }}
                aria-label={`Show ${card.label}`}
                aria-pressed={isActive}
                animate={{ x, rotate, scale }}
                transition={{ type: "spring", stiffness: 280, damping: 26 }}
                className="absolute w-[58%] sm:w-[52%] md:w-[48%] cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-secondary rounded-3xl"
                style={{ zIndex: z }}
                whileHover={isActive ? { y: -6 } : { y: -4, scale: scale + 0.03 }}
              >
                <div
                  className="rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-white/20 transition-shadow duration-500"
                  style={{
                    boxShadow: isActive
                      ? `0 28px 70px ${card.glow}, 0 0 0 1px ${card.accent}44`
                      : `0 16px 40px rgba(0,0,0,0.35)`,
                  }}
                >
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-auto object-contain block pointer-events-none"
                    draggable={false}
                  />
                </div>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={card.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 4 }}
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap"
                    >
                      <span
                        className="inline-flex flex-col items-center gap-0.5 px-4 py-2 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10"
                      >
                        <span
                          className="font-display font-black text-lg sm:text-xl uppercase leading-none"
                          style={{ color: card.accent }}
                        >
                          {card.label}
                        </span>
                        {card.sublabel && (
                          <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">
                            {card.sublabel}
                          </span>
                        )}
                        <span className="text-white/90 text-xs font-bold">{card.price}</span>
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>

        {/* Dot indicators */}
        <div className="flex gap-2 mt-10" role="tablist" aria-label="Featured items">
          {spotlightCards.map((card, index) => (
            <button
              key={card.id}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={card.label}
              onClick={() => setActive(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === active ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center pb-6 sm:pb-8 pointer-events-none">
        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pointer-events-auto group flex flex-col items-center gap-2 text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
        >
          <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em]">Full menu below</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/25 group-hover:border-white/50 group-hover:bg-white/10 transition-colors"
          >
            <ChevronDown className="w-5 h-5" aria-hidden />
          </motion.span>
        </motion.a>
      </div>
    </section>
  );
}
