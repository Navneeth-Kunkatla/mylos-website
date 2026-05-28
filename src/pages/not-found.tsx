import { Link } from "wouter";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FFF8F6] flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-6 pt-32 pb-24">
        <div className="text-center max-w-lg">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">404</p>
          <h1 className="text-5xl md:text-6xl font-display font-black text-foreground mb-4">
            Lost your way?
          </h1>
          <p className="text-gray-500 text-lg mb-10">
            This page doesn&apos;t exist — but boba and ice cream definitely do.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Back to Home
            </Link>
            <Link
              href="/find-us"
              className="bg-white text-foreground border border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-primary/30 transition-colors"
            >
              Find a Location
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
