import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jbMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-spacegrotesk",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZiyadHamzah — Frontend Developer",
  description:
    "Portfolio ZiyadHamzah, Frontend Developer & fresh graduate SMK Al-Hadiid Cileungsi jurusan Teknik Komputer dan Jaringan (TKJ). Tertarik pada Web Development, UI/UX, IoT, dan Cyber Security.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${jbMono.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-bg text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
