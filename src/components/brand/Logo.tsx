import { Link } from "wouter";
import { images, site } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  variant?: "navbar" | "footer";
};

/** Navbar: +10% visual scale inside fixed frame. Footer: +200% (3×) from bottom-left. */
const NAVBAR_SCALE = 1.33 * 1.1;
const FOOTER_SCALE = 3;

export default function Logo({ className = "", variant = "navbar" }: LogoProps) {
  const isNavbar = variant === "navbar";

  return (
    <Link
      href="/"
      className={`overflow-visible ${
        isNavbar
          ? "inline-flex h-10 sm:h-11 items-center"
          : "flex h-16 sm:h-[4.5rem] w-fit items-end"
      } ${className}`}
      aria-label={site.name}
    >
      <img
        src={images.logo}
        alt={`${site.legalName} logo`}
        className={`w-auto object-contain object-left rounded-lg ${
          isNavbar
            ? "h-12 sm:h-14 origin-left"
            : "h-16 sm:h-[4.5rem] origin-bottom-left"
        }`}
        style={{ transform: `scale(${isNavbar ? NAVBAR_SCALE : FOOTER_SCALE})` }}
      />
    </Link>
  );
}
