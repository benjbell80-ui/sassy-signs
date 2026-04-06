import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sassy Signs & Designs — Custom Hand-Lettered Signs in NC",
  description:
    "Hand-lettered custom banners and signs for birthdays, holidays, weddings, and any occasion. Based in Fuquay-Varina, NC. Order online!",
};

const OCCASIONS = [
  { emoji: "🎂", label: "Birthdays", color: "#f4a7b9" },
  { emoji: "🎄", label: "Holidays", color: "#7eccc5" },
  { emoji: "💍", label: "Weddings", color: "#b87bc8" },
  { emoji: "🎓", label: "Graduations", color: "#f5a76b" },
  { emoji: "🍼", label: "Baby Showers", color: "#5b9bd5" },
  { emoji: "🎉", label: "Any Occasion", color: "#c5d43e" },
];

export default function HomePage() {
  return (
    <div>
      {/* Rainbow stripe top bar */}
      <div className="stripe-border h-3 w-full" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#fdf8f2] py-20 md:py-28">
        {/* Decorative confetti dots */}
        <div className="absolute top-12 left-12 w-5 h-5 rounded-full bg-[#f4a7b9] opacity-60" />
        <div className="absolute top-24 left-32 w-3 h-3 rounded-full bg-[#7eccc5] opacity-60" />
        <div className="absolute top-16 right-20 w-4 h-4 rounded-full bg-[#c5d43e] opacity-60" />
        <div className="absolute top-32 right-40 w-3 h-3 rounded-full bg-[#b87bc8] opacity-60" />
        <div className="absolute bottom-20 left-20 w-4 h-4 rounded-full bg-[#5b9bd5] opacity-60" />
        <div className="absolute bottom-16 right-16 w-5 h-5 rounded-full bg-[#f5a76b] opacity-60" />
        {/* Confetti dashes */}
        <div className="absolute top-20 left-48 w-8 h-3 rounded-full bg-[#c5d43e] opacity-50 rotate-12" />
        <div className="absolute top-40 right-32 w-7 h-2.5 rounded-full bg-[#f4a7b9] opacity-50 -rotate-12" />
        <div className="absolute bottom-24 left-40 w-8 h-2.5 rounded-full bg-[#b87bc8] opacity-50 rotate-6" />
        <div className="absolute bottom-32 right-24 w-6 h-2.5 rounded-full bg-[#7eccc5] opacity-50 -rotate-6" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#f4a7b9]/30 text-[#8b4a5e] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
                ✨ Handmade with love in NC
              </div>
              <h1 className="font-display text-5xl md:text-6xl text-[#3d2b1f] leading-tight mb-6">
                Signs That Make<br />
                <span style={{color: '#b87bc8'}}>Every Moment</span><br />
                <span style={{color: '#f4845f'}}>Unforgettable</span>
              </h1>
              <p className="text-lg text-[#7a5c48] max-w-md mb-10 leading-relaxed">
                Custom hand-lettered banners and signs for birthdays, holidays, weddings, and everything in between. Each piece is made just for you. 🎨
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/order"
                  className="bg-[#f4845f] hover:bg-[#e8724e] text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 text-center"
                >
                  Order Your Sign ✨
                </Link>
                <Link
                  href="/gallery"
                  className="bg-white text-[#3d2b1f] font-bold text-lg px-8 py-4 rounded-full border-2 border-[#e8d5c4] transition-all hover:shadow-md hover:-translate-y-0.5 hover:border-[#f4845f] text-center"
                >
                  See the Gallery
                </Link>
              </div>
            </div>
            {/* Feature photo */}
            <div className="relative">
              <div className="stripe-border p-2 rounded-3xl shadow-xl">
                <div className="rounded-2xl overflow-hidden aspect-square relative">
                  <Image
                    src="/images/gallery/656890019_17866572156606760_9153920923802563565_n.jpg"
                    alt="Happy Easter custom hand-lettered sign by Sassy Signs & Designs"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-4 py-3 border border-[#f4a7b9]/40">
                <p className="text-xs font-bold text-[#7a5c48] uppercase tracking-wide">100% Handmade</p>
                <p className="text-sm font-semibold text-[#3d2b1f]">Every single sign 🖊️</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#3d2b1f] mb-3">Signs for Every Occasion</h2>
          <p className="text-[#9a6b4b] mb-10">Whatever you&apos;re celebrating, we&apos;ve got you covered.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
            {OCCASIONS.map((o) => (
              <div
                key={o.label}
                className="rounded-2xl p-5 flex flex-col items-center gap-2 border-2 hover:scale-105 transition-transform cursor-default"
                style={{ borderColor: o.color, backgroundColor: o.color + '18' }}
              >
                <span className="text-4xl">{o.emoji}</span>
                <span className="font-bold text-sm text-[#3d2b1f]">{o.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-[#fdf8f2]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[#3d2b1f] mb-3">How It Works</h2>
          <p className="text-[#9a6b4b] mb-12">Getting your custom sign is simple!</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", emoji: "📝", title: "Place Your Order", desc: "Fill out our simple order form with your occasion, colors, wording, and date needed.", color: "#f4a7b9" },
              { step: "2", emoji: "🎨", title: "Sam Gets to Work", desc: "Each sign is hand-lettered with care. Sam will reach out if she has any questions.", color: "#7eccc5" },
              { step: "3", emoji: "🎉", title: "Make Memories", desc: "Pick up your sign and make your celebration extra special!", color: "#b87bc8" },
            ].map((item) => (
              <div key={item.step} className="relative bg-white rounded-3xl p-8 border-2 shadow-sm" style={{ borderColor: item.color + '60' }}>
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full flex items-center justify-center shadow-md font-display text-white text-lg" style={{ backgroundColor: item.color }}>
                  {item.step}
                </div>
                <div className="text-5xl mb-4 mt-2">{item.emoji}</div>
                <h3 className="font-bold text-lg text-[#3d2b1f] mb-2">{item.title}</h3>
                <p className="text-[#9a6b4b] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rainbow CTA */}
      <section className="relative overflow-hidden py-16 text-center" style={{ background: 'linear-gradient(135deg, #f4a7b9 0%, #b87bc8 25%, #5b9bd5 50%, #7eccc5 75%, #c5d43e 100%)' }}>
        <div className="relative max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 drop-shadow">Ready to Make Something Special?</h2>
          <p className="text-white/90 mb-8 text-lg">
            Every sign is one-of-a-kind, just like the moment you&apos;re celebrating.
          </p>
          <Link
            href="/order"
            className="inline-block bg-white text-[#3d2b1f] hover:bg-[#fdf8f2] font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-xl hover:-translate-y-0.5"
          >
            Order Now ✨
          </Link>
        </div>
      </section>

      {/* Instagram */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <div className="text-4xl mb-4">📸</div>
          <h2 className="font-display text-3xl text-[#3d2b1f] mb-3">Follow Along on Instagram</h2>
          <p className="text-[#9a6b4b] mb-6">
            See the latest signs, behind-the-scenes, and get inspired for your next order.
          </p>
          <a
            href="https://www.instagram.com/sassy_signsanddesigns"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg transition-all hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #f5a76b, #f4845f, #b87bc8)' }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
            @sassy_signsanddesigns
          </a>
        </div>
      </section>

      {/* Rainbow stripe bottom bar */}
      <div className="stripe-border h-3 w-full" />
    </div>
  );
}
