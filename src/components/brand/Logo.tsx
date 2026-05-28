import { Link } from "wouter";
import { site } from "@/lib/site-config";

type LogoProps = {
  className?: string;
  variant?: "navbar" | "footer";
};

export default function Logo({ className = "", variant = "navbar" }: LogoProps) {
  const height = variant === "footer" ? 48 : 40;
  const width = variant === "footer" ? 160 : 132;

  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label={site.name}>
      <img
        src="/logo.svg"
        alt={`${site.name} logo`}
        width={width}
        height={height}
        className="h-auto w-auto max-h-12 object-contain object-left"
      />
    </Link>
  );
}
