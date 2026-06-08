import { useState, useEffect, type ReactNode } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import Logo from "@/components/brand/Logo";

const navLinks = [
  { name: "Home", href: "/#welcome" },
  { name: "Menu", href: "/#menu" },
  { name: "Find Us", href: "/#find-us" },
];

function NavAnchor({
  href,
  children,
  className,
  onClick,
}: {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  const [location] = useLocation();
  const isHash = href.startsWith("/#");
  const hash = isHash ? href.slice(1) : "";

  if (location === "/" && isHash) {
    return (
      <a href={hash} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onHome = location === "/";
  const heroNav = onHome && !isScrolled && !mobileMenuOpen;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = heroNav
    ? "text-base font-bold transition-colors text-white/90 hover:text-white"
    : "text-base font-bold transition-colors text-foreground hover:text-primary";

  return (
    <nav
      id="top"
      className={`fixed top-0 w-full z-[60] transition-all duration-300 ${
        heroNav
          ? "bg-transparent py-5"
          : isScrolled
            ? "bg-white/95 backdrop-blur-sm shadow-sm py-4"
            : "bg-white py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Logo className="z-50" />

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <NavAnchor key={link.href} href={link.href} className={linkClass}>
              {link.name}
            </NavAnchor>
          ))}
        </div>

        <button
          type="button"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          className={`md:hidden z-50 p-2 ${heroNav ? "text-white" : "text-foreground"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 z-40">
            {navLinks.map((link) => (
              <NavAnchor
                key={link.href}
                href={link.href}
                className="text-3xl font-bold font-display transition-colors hover:text-primary text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </NavAnchor>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
