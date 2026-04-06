import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Sam",
  description: "Meet Sam — the artist behind Sassy Signs & Designs. Custom hand-lettered signs for any occasion, based in NC.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#fdf8f3] to-[#fef0e8] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#f7d9d0] text-[#7a4f2e] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            👋 Meet the Artist
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[#7a4f2e]">Hey, I&apos;m Sam!</h1>
        </div>
      </section>

      {/* Bio */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="stripe-border p-2 rounded-3xl shadow-xl">
              <div className="rounded-2xl overflow-hidden aspect-square relative">
                <Image
                  src="/images/sam-family.jpg"
                  alt="Sam and her family"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl text-[#7a4f2e] mb-4">The Story Behind Sassy Signs</h2>
              <p className="text-[#9a6b4b] leading-relaxed mb-4">
                Hi! I&apos;m Sam, a mom of two, aunt to many (hence &ldquo;Aunt Sassy&rdquo;!), and the artist behind every sign that leaves my hands. I&apos;m based in NC.
              </p>
              <p className="text-[#9a6b4b] leading-relaxed mb-4">
                What started as making signs for family celebrations has grown into something I truly love. Every banner is hand-lettered by me. No machines, no templates. Just paint, kraft paper, and a whole lot of heart.
              </p>
              <p className="text-[#9a6b4b] leading-relaxed mb-6">
                Whether it&apos;s a birthday, a holiday, a baby shower, or just a reason to celebrate, I love helping make your moments more memorable. No occasion is too big or too small!
              </p>
              <div className="flex flex-wrap gap-3">
                {["Mom x2 💛", "Aunt Sassy x A LOT 🌟", "Hand-lettering lover 🎨", "Based in NC 📍"].map((tag) => (
                  <span key={tag} className="bg-[#fdf8f3] border border-[#f7d9d0] text-[#7a4f2e] text-sm font-semibold px-4 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I make */}
      <section className="py-16 bg-[#fdf8f3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-3xl text-[#7a4f2e] mb-3">What I Make</h2>
          <p className="text-[#9a6b4b] mb-10">Each piece is made by hand, start to finish.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: "🖊️", title: "Hand-Lettered", desc: "Every letter is drawn by hand — no vinyl cutters or machines. Just real handmade art." },
              { emoji: "📦", title: "Custom Orders", desc: "Tell me the name, the occasion, your colors — I'll make it uniquely yours." },
              { emoji: "📍", title: "Local Pickup", desc: "Based in NC. Local pickup available — reach out to arrange a time!" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-3xl p-8 border border-[#f7d9d0] shadow-sm text-left">
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-[#3d2b1f] mb-2">{item.title}</h3>
                <p className="text-[#9a6b4b] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#f4845f] to-[#e8724e] py-16 text-white text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Let&apos;s Make Something Together!</h2>
          <p className="text-orange-100 mb-8">Order online or find me on Instagram.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="bg-white text-[#f4845f] hover:bg-[#fdf8f3] font-bold px-8 py-3 rounded-full transition-all hover:shadow-lg"
            >
              Place an Order ✨
            </Link>
            <a
              href="https://www.instagram.com/sassy_signsanddesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white text-white hover:bg-white/10 font-bold px-8 py-3 rounded-full transition-all"
            >
              Follow on Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
