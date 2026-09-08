"use client";

import { useEffect, useState } from "react";
import { CodeIcon, PersonIcon, GlobeIcon } from "./Icons";
import { profile } from "@/lib/data";
import BlurText from "./BlurText";

export default function Landing() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="landing"
      className="
        h-screen
        flex
        flex-col
        items-center
        justify-center
        text-center
        gap-7
        relative
        overflow-hidden
        bg-black
        bg-grid
        bg-[length:40px_40px]
      "
    >
      {/* =====================================================
          ICONS
      ===================================================== */}

      <div
        className={`
          flex gap-4
          transition-all
          duration-1000
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            loaded
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-6 blur-sm"
          }
        `}
      >
        {/* CODE */}

        <div
          className="
            group
            w-12 h-12
            rounded-full
            border border-border
            bg-card
            flex items-center justify-center
            transition-all duration-300
            hover:bg-[#1a1a1a]
            hover:-translate-y-1
            hover:border-[#555]
            hover:shadow-[0_8px_25px_rgba(255,255,255,0.08)]
          "
        >
          <CodeIcon
            className="
              w-[18px] h-[18px]
              text-white
              transition-transform duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* PERSON */}

        <div
          className="
            group
            w-12 h-12
            rounded-full
            border border-border
            bg-card
            flex items-center justify-center
            transition-all duration-300
            hover:bg-[#1a1a1a]
            hover:-translate-y-1
            hover:border-[#555]
            hover:shadow-[0_8px_25px_rgba(255,255,255,0.08)]
          "
        >
          <PersonIcon
            className="
              w-[18px] h-[18px]
              text-white
              transition-transform duration-300
              group-hover:scale-110
            "
          />
        </div>

        {/* GLOBE */}

        <div
          className="
            group
            w-12 h-12
            rounded-full
            border border-border
            bg-card
            flex items-center justify-center
            transition-all duration-300
            hover:bg-[#1a1a1a]
            hover:-translate-y-1
            hover:border-[#555]
            hover:shadow-[0_8px_25px_rgba(255,255,255,0.08)]
          "
        >
          <GlobeIcon
            className="
              w-[18px] h-[18px]
              text-white
              transition-transform duration-300
              group-hover:scale-110
            "
          />
        </div>
      </div>

      {/* =====================================================
          MAIN TITLE (BlurText effect)
      ===================================================== */}

      <div className="relative px-4">
        <div
          className="
            font-display
            text-[32px]
            sm:text-[42px]
            md:text-[56px]
            font-extrabold
            leading-[1.15]
            tracking-tight
            max-w-3xl
            mx-auto
          "
        >
          <BlurText
            text="Welcome to my"
            animateBy="words"
            direction="top"
            delay={120}
            stepDuration={0.35}
            className="justify-center"
          />

          <BlurText
            text="Portfolio Website"
            animateBy="words"
            direction="top"
            delay={120}
            stepDuration={0.35}
            className="justify-center text-white"
          />
        </div>

        {/* SUBTLE LIGHT EFFECT */}

        <div
          className={`
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[280px]
            md:w-[500px]
            h-[100px]
            md:h-[160px]
            bg-white/[0.025]
            blur-[80px]
            rounded-full
            pointer-events-none
            transition-opacity
            duration-[1800ms]
            ${loaded ? "opacity-100" : "opacity-0"}
          `}
        />
      </div>

      {/* =====================================================
          NAME BADGE
      ===================================================== */}

      <div
        className={`
          font-mono
          text-[13px]
          text-muted
          border border-border
          bg-card
          px-6
          py-2.5
          rounded-full

          transition-all
          duration-1000
          delay-500
          ease-[cubic-bezier(0.22,1,0.36,1)]

          hover:text-white
          hover:border-[#555]
          hover:bg-[#151515]

          ${
            loaded
              ? "opacity-100 translate-y-0 blur-0"
              : "opacity-0 translate-y-5 blur-sm"
          }
        `}
      >
        {profile.name}
      </div>
    </section>
  );
}
