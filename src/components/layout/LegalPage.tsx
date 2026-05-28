import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { site } from "@/lib/site-config";

type LegalPageProps = {
  title: string;
  children: ReactNode;
};

export default function LegalPage({ title, children }: LegalPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-32 pb-24">
        <article className="container mx-auto px-6 max-w-3xl prose prose-lg">
          <h1 className="font-display font-black text-4xl text-foreground mb-2">{title}</h1>
          <p className="text-gray-500 text-sm mb-10">Last updated: May 2026 · {site.legalName}</p>
          {children}
        </article>
      </main>
      <Footer />
    </div>
  );
}
