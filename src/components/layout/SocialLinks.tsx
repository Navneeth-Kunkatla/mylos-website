import { SiInstagram, SiX } from "react-icons/si";
import { social } from "@/lib/site-config";

type SocialLinksProps = {
  layout?: "row" | "stack";
};

export default function SocialLinks({ layout = "row" }: SocialLinksProps) {
  const links = [
    social.instagram && {
      href: social.instagram,
      label: "Follow on Instagram",
      icon: SiInstagram,
      className:
        "flex items-center gap-3 bg-white text-[#1A0E3A] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-lg w-full sm:w-auto justify-center",
    },
    social.x && {
      href: social.x,
      label: "Follow on X",
      icon: SiX,
      className:
        "flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-colors w-full sm:w-auto justify-center",
    },
  ].filter(Boolean) as {
    href: string;
    label: string;
    icon: typeof SiInstagram;
    className: string;
  }[];

  if (links.length === 0) {
    return (
      <p className="text-white/60 text-lg max-w-md mx-auto">
        Follow us in store for daily flavor drops — add your Instagram and X links in{" "}
        <code className="text-white/80 text-sm">.env</code> when ready.
      </p>
    );
  }

  return (
    <div
      className={
        layout === "row"
          ? "flex flex-col sm:flex-row items-center justify-center gap-6"
          : "flex flex-col gap-4"
      }
    >
      {links.map(({ href, label, icon: Icon, className }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer" className={className}>
          <Icon className="text-2xl" aria-hidden />
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
}
