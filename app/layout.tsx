import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { GeistSans } from "geist/font/sans";
// @ts-ignore
import "./globals.css";
import SplashCursor from "@/components/SplashCursor";
import { cn } from "@/lib/utils";

// SESUDAH
const geist = GeistSans;

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
    <html
      lang="id"
      className={cn(inter.variable, jbMono.variable, spaceGrotesk.variable, "font-sans", geist.variable)}
    >
      <body className="font-sans bg-bg text-white antialiased overflow-x-hidden">
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING={true}
          RAINBOW_MODE={false}
          COLOR="#A855F7"
        />
        {children}
      </body>
    </html>
  );
}
