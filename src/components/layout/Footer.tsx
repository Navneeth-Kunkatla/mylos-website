import { Link } from "wouter";
import Logo from "@/components/brand/Logo";
import { site } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <Logo variant="footer" className="mb-4" />
            <p className="text-gray-300 font-bold text-lg">{site.tagline}</p>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-white">MENU</h4>
            <ul className="space-y-4">
              <li>
                <a href="#boba-menu" className="text-gray-300 hover:text-primary transition-colors font-semibold">
                  Boba Teas
                </a>
              </li>
              <li>
                <a href="#coffee-menu" className="text-gray-300 hover:text-primary transition-colors font-semibold">
                  Coffee &amp; Waffles
                </a>
              </li>
              <li>
                <a href="#ice-cream-menu" className="text-gray-300 hover:text-primary transition-colors font-semibold">
                  Stone Ice Cream
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-6 text-white">MYLO&apos;S</h4>
            <ul className="space-y-4">
              <li>
                <a href="#find-us" className="text-gray-300 hover:text-primary transition-colors font-semibold">
                  Location
                </a>
              </li>
              <li>
                <a href="#top" className="text-gray-300 hover:text-primary transition-colors font-semibold">
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm">
          <p>
            © {site.copyrightYear} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
