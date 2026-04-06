import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#3d2b1f] text-[#f7d9d0] mt-auto">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display text-2xl text-white mb-1">Sassy Signs & Designs</div>
            <p className="text-sm text-[#c4a98a]">
              Custom hand-lettered signs for any occasion ✨
            </p>
            <p className="text-sm text-[#c4a98a] mt-1">
              Fuquay-Varina / Holly Springs / Apex, NC
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-3">
            <a
              href="https://www.instagram.com/sassy_signsanddesigns"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-semibold text-[#f7d9d0] hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @sassy_signsanddesigns
            </a>
            <Link
              href="/order"
              className="bg-[#f4845f] hover:bg-[#e8724e] text-white font-bold text-sm px-6 py-2 rounded-full transition-colors"
            >
              Place an Order
            </Link>
          </div>
        </div>

        <div className="border-t border-[#5a3d2b] mt-8 pt-6 text-center text-xs text-[#9a7a60]">
          &copy; {new Date().getFullYear()} Sassy Signs & Designs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
