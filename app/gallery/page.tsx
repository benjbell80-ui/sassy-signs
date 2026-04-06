import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { readdirSync } from "fs";
import { join } from "path";

export const metadata: Metadata = {
  title: "Gallery — Custom Signs & Banners",
  description: "Browse Sam's hand-lettered signs — birthdays, holidays, baby showers, and more. Every sign is custom made.",
};

function getGalleryImages(): string[] {
  try {
    const dir = join(process.cwd(), "public/images/gallery");
    return readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp)$/i.test(f))
      .map((f) => `/images/gallery/${f}`);
  } catch {
    return [];
  }
}

export default function GalleryPage() {
  const images = getGalleryImages();

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#fdf8f3] to-[#fef0e8] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#f7d9d0] text-[#7a4f2e] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            🎨 The Work
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[#7a4f2e] mb-4">Gallery</h1>
          <p className="text-[#9a6b4b] text-lg">
            Every sign is handmade and one-of-a-kind. Browse some of Sam&apos;s work below.
          </p>
          {images.length > 0 && (
            <p className="text-[#c4a98a] text-sm mt-2">{images.length} signs and counting ✨</p>
          )}
        </div>
      </section>

      {/* Gallery grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          {images.length === 0 ? (
            <div className="text-center py-20 text-[#c4a98a]">
              <p className="text-lg">Photos coming soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="group relative aspect-square rounded-2xl overflow-hidden border border-[#f7d9d0] shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <Image
                    src={src}
                    alt={`Custom hand-lettered sign by Sassy Signs & Designs`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <p className="text-[#9a6b4b] mb-4">See even more on Instagram!</p>
            <a
              href="https://www.instagram.com/sassy_signsanddesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f4845f] font-bold hover:underline"
            >
              @sassy_signsanddesigns →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#fdf8f3] py-16 text-center border-t border-[#f7d9d0]">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl text-[#7a4f2e] mb-4">Love What You See?</h2>
          <p className="text-[#9a6b4b] mb-8">Let&apos;s make something beautiful for your next occasion.</p>
          <Link
            href="/order"
            className="inline-block bg-[#f4845f] hover:bg-[#e8724e] text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5"
          >
            Order Your Custom Sign ✨
          </Link>
        </div>
      </section>
    </div>
  );
}
