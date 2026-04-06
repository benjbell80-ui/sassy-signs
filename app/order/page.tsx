"use client";
import { useState } from "react";

const OCCASIONS = [
  "Birthday", "Holiday", "Wedding", "Graduation", "Baby Shower",
  "Anniversary", "Easter", "Christmas", "Halloween", "Other"
];

const SIZES = [
  { value: "3x4", label: '3×4 — $50' },
  { value: "3x5", label: '3×5 — $60' },
  { value: "unsure", label: "Not sure — let Sam decide!" },
];

export default function OrderPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", occasion: "",
    wording: "", colors: "", size: "", dateNeeded: "",
    pickupLocation: "", notes: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="font-display text-4xl text-[#7a4f2e] mb-4">Order Received!</h1>
          <p className="text-[#9a6b4b] text-lg mb-2">
            Thanks, <strong>{form.name.split(" ")[0]}</strong>! Sam will be in touch soon to confirm the details.
          </p>
          <p className="text-[#9a6b4b] text-sm">
            Keep an eye on your inbox at <strong>{form.email}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <section className="bg-gradient-to-br from-[#fdf8f3] to-[#fef0e8] py-16 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-[#f7d9d0] text-[#7a4f2e] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
            📝 Get Started
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-[#7a4f2e] mb-4">Place an Order</h1>
          <p className="text-[#9a6b4b] text-lg">
            Fill out the form below and Sam will reach out within 1–2 days to confirm your order and pricing.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-8 bg-white border-b border-[#f7d9d0]">
        <div className="max-w-2xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {[
              { size: "3×4", price: "$50" },
              { size: "3×5", price: "$60" },
            ].map((item) => (
              <div key={item.size} className="flex-1 bg-[#fdf8f3] border-2 border-[#f7d9d0] rounded-2xl p-6 text-center">
                <p className="text-sm font-bold uppercase tracking-widest text-[#b07c56] mb-1">{item.size} ft</p>
                <p className="font-display text-4xl text-[#f4845f]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Contact info */}
            <div className="bg-[#fdf8f3] rounded-3xl p-6 border border-[#f7d9d0] space-y-4">
              <h2 className="font-display text-xl text-[#7a4f2e]">Your Info</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Name *</label>
                  <input
                    required name="name" value={form.name} onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] placeholder-[#c4a98a] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Email *</label>
                  <input
                    required type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="you@email.com"
                    className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] placeholder-[#c4a98a] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Phone (optional)</label>
                <input
                  type="tel" name="phone" value={form.phone} onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] placeholder-[#c4a98a] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                />
              </div>
            </div>

            {/* Sign details */}
            <div className="bg-[#fdf8f3] rounded-3xl p-6 border border-[#f7d9d0] space-y-4">
              <h2 className="font-display text-xl text-[#7a4f2e]">Sign Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Occasion *</label>
                  <select
                    required name="occasion" value={form.occasion} onChange={handleChange}
                    className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                  >
                    <option value="">Select an occasion</option>
                    {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Size *</label>
                  <select
                    required name="size" value={form.size} onChange={handleChange}
                    className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                  >
                    <option value="">Select a size</option>
                    {SIZES.map((s) => <option key={s.value} value={s.value}>{s.label}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">What should the sign say? *</label>
                <textarea
                  required name="wording" value={form.wording} onChange={handleChange}
                  rows={3} placeholder='e.g. "Happy 14th Birthday Rylee!" or "Welcome Baby Emma"'
                  className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] placeholder-[#c4a98a] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Preferred colors</label>
                <input
                  name="colors" value={form.colors} onChange={handleChange}
                  placeholder='e.g. "Pink, gold, and white" or "Match the party theme"'
                  className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] placeholder-[#c4a98a] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                />
              </div>
            </div>

            {/* Logistics */}
            <div className="bg-[#fdf8f3] rounded-3xl p-6 border border-[#f7d9d0] space-y-4">
              <h2 className="font-display text-xl text-[#7a4f2e]">Timing & Pickup</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Date needed *</label>
                  <input
                    required type="date" name="dateNeeded" value={form.dateNeeded} onChange={handleChange}
                    className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Pickup area</label>
                  <input
                    name="pickupLocation" value={form.pickupLocation} onChange={handleChange}
                    placeholder="e.g. Fuquay-Varina, Holly Springs…"
                    className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] placeholder-[#c4a98a] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#7a4f2e] mb-1">Anything else?</label>
                <textarea
                  name="notes" value={form.notes} onChange={handleChange}
                  rows={3} placeholder="Special requests, inspo photos, questions for Sam…"
                  className="w-full rounded-xl border border-[#f7d9d0] bg-white px-4 py-2.5 text-[#3d2b1f] placeholder-[#c4a98a] focus:outline-none focus:ring-2 focus:ring-[#f4845f] focus:border-transparent resize-none"
                />
              </div>
            </div>

            {status === "error" && (
              <p className="text-red-500 text-sm text-center">Something went wrong. Please try again or DM Sam on Instagram.</p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full bg-[#f4845f] hover:bg-[#e8724e] disabled:opacity-60 text-white font-bold text-lg px-8 py-4 rounded-full transition-all hover:shadow-lg hover:-translate-y-0.5 disabled:hover:translate-y-0"
            >
              {status === "sending" ? "Sending…" : "Submit Order Request ✨"}
            </button>

            <p className="text-center text-xs text-[#9a6b4b]">
              Sam will respond within 1–2 days to confirm details and pricing. No payment is collected here.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
