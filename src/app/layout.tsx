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
  title: "Uconcept | Agencia de Marketing Digital Premium",
  description:
    "Marketing, diseño y tecnología para negocios que quieren destacar. Soluciones de marketing digital premium en España.",
  keywords: [
    "agencia de marketing",
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
