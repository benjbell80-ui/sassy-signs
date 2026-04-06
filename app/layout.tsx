import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sassysignsanddesigns.com"),
  title: {
    default: "Sassy Signs & Designs — Custom Hand-Lettered Signs",
    template: "%s | Sassy Signs & Designs",
  },
  description:
    "Custom hand-lettered banners and signs for any occasion — birthdays, holidays, weddings, and more. Serving Fuquay-Varina, Holly Springs, Apex, and the Triangle area of NC.",
  openGraph: {
    siteName: "Sassy Signs & Designs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-[#fdf8f3]">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
