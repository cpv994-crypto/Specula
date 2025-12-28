import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Specula | Observatorio socio-económico",
  description:
    "Atalaya de investigación socio-económica y reflexión estratégica dirigida por Christopher Pérez Vega.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased bg-base text-foreground">
        <div className="relative min-h-screen">
          <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(77,163,255,0.08),transparent_25%)]" aria-hidden />
          <Header />
          <main className="relative mx-auto max-w-6xl px-6 py-10 sm:py-12">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
