"use client";

import Image from "next/image";
import { useReveal } from "@/lib/useReveal";
import { profile, stats } from "@/lib/data";
import { CodeIcon, MedalIcon, GlobeIcon } from "./Icons";

const statIcons = { code: CodeIcon, medal: MedalIcon, globe: GlobeIcon };

export default function About() {
  const leftRef = useReveal<HTMLDivElement>();
  const rightRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();

  return (
    <section
      id="about"
      className="py-28 md:py-32 bg-black bg-grid bg-[length:40px_40px]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        {/* =====================================================
            TOP — TEXT + PHOTO
        ===================================================== */}

        <div className="grid md:grid-cols-[1.3fr_1fr] gap-14 items-center mb-16">
          {/* LEFT — TEXT */}

          <div ref={leftRef} className="reveal">
            <span className="font-mono text-xs tracking-[2px] text-muted2 uppercase block mb-4">
              About Me
            </span>

            <h2 className="font-display text-[34px] sm:text-[44px] md:text-[56px] font-extrabold leading-[1.05] tracking-tight mb-6">
              Ziyad
              <br />
              Hamzah
            </h2>

            <p className="text-muted max-w-lg mb-6">{profile.aboutParagraph}</p>

            <div className="inline-block border border-border rounded-full px-6 py-3.5 italic text-[#c9c9c9] text-sm mb-8">
              &ldquo;{profile.quote}&rdquo;
            </div>

            <div className="flex gap-3.5 flex-wrap">
              {profile.cvLink ? (
                <a
                  href={profile.cvLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white text-black transition-all hover:scale-105 hover:shadow-[0_8px_24px_rgba(255,255,255,0.2)]"
                >
                  Download CV
                </a>
              ) : (
                <span
                  title="CV link not provided yet"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white/40 text-black/60 cursor-not-allowed"
                >
                  Download CV (No Link)
                </span>
              )}

              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold border border-[#444] text-white transition-all hover:border-white hover:scale-105"
              >
                ↗ View Projects
              </a>
            </div>
          </div>

          {/* RIGHT — PHOTO */}

          <div ref={rightRef} className="reveal">
            <div className="relative w-full max-w-[300px] md:max-w-[350px] aspect-square rounded-full mx-auto border border-border shadow-[0_0_60px_rgba(255,255,255,0.05)] bg-card2 overflow-hidden">
              <Image
                src="/about-photo.jpg"
                alt={profile.name}
                fill
                sizes="350px"
                className="object-cover"
                style={{ objectPosition: "50% 38%" }}
              />
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM — STATS
        ===================================================== */}

        <div
          ref={statsRef}
          className="reveal grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {stats.map((stat) => {
            const Icon = statIcons[stat.icon];

            return (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-card p-6 transition-all duration-250 hover:-translate-y-1 hover:border-[#3a3a3a]"
              >
                <div className="flex justify-between items-start mb-9">
                  <div className="w-[34px] h-[34px] rounded-lg bg-[#1a1a1a] flex items-center justify-center">
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="text-[26px] font-extrabold">{stat.value}</div>
                </div>

                <div className="font-mono text-[11px] tracking-[1.5px] text-muted flex justify-between items-center">
                  <span>{stat.label}</span>
                  <span>↗</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
