import { Link } from "wouter";
import { images, site } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  variant?: "navbar" | "footer";
};

export default function Logo({ className = "", variant = "navbar" }: LogoProps) {
  const sizeClass = variant === "footer" ? "h-16 sm:h-[4.5rem]" : "h-12 sm:h-14";

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={site.name}>
      <img
        src={images.logo}
        alt={`${site.legalName} logo`}
        className={`${sizeClass} w-auto object-contain object-left rounded-lg`}
      />
    </Link>
  );
}
