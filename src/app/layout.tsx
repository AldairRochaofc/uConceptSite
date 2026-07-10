import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Mavrienza Soluciones Digitales | Agencia Digital Premium",
  description:
    "Diseño, estrategia y tecnología para negocios que quieren destacar. Soluciones digitales premium en España.",
  keywords: [
    "agencia digital",
    "marketing digital España",
    "diseño web",
    "Instagram",
    "branding",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bebas.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <LoadingScreen />
        <CustomCursor />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
