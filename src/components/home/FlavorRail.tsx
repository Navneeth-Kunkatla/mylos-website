import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const sections = [
  { id: "menu", label: "Menu", emoji: "📋" },
  { id: "find-us", label: "Find Us", emoji: "📍" },
] as const;

type SectionId = (typeof sections)[number]["id"];

export default function FlavorRail() {
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState<SectionId>(sections[0].id);

  useEffect(() => {
    const hero = document.getElementById("welcome");
    if (!hero) return;

    const onScroll = () => setVisible(window.scrollY > hero.offsetHeight * 0.55);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          initial={{ y: -72, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -72, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          className="fixed top-[4.25rem] left-0 right-0 z-50 px-4 pointer-events-none"
          aria-label="Page sections"
        >
          <div className="mx-auto max-w-md pointer-events-auto">
            <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 px-3 rounded-full bg-secondary/95 backdrop-blur-md border border-white/10 shadow-lg shadow-black/20">
              {sections.map(({ id, label, emoji }) => {
                const isActive = active === id;
                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    className={`relative shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-colors ${
                      isActive
                        ? "text-secondary-foreground"
                        : "text-secondary-foreground/55 hover:text-secondary-foreground/85"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="flavor-rail-pill"
                        className="absolute inset-0 rounded-full bg-accent"
                        transition={{ type: "spring", stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{emoji}</span>
                    <span className="relative z-10">{label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
