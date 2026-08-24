"use client";

import { useEffect, useState } from "react";
import { ChevronUp, ChevronDown } from "./Icons";

const sectionIds = ["landing", "home", "about", "portfolio", "contact"];

export default function ScrollNav() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      let idx = 0;
      sectionIds.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.4) {
          idx = i;
        }
      });
      setIndex(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goTo = (i: number) => {
    const el = document.getElementById(sectionIds[i]);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const atTop = index === 0;
  const atBottom = index === sectionIds.length - 1;

  return (
    <div className="fixed right-4 md:right-9 top-1/2 -translate-y-1/2 z-[150] flex flex-col gap-3.5">
      <button
        aria-label="Scroll up"
        disabled={atTop}
        onClick={() => goTo(Math.max(0, index - 1))}
        className={`w-11 h-11 md:w-12 md:h-12 rounded-full border border-border bg-[rgba(20,20,20,0.7)]
          flex items-center justify-center transition-all duration-250
          ${atTop ? "opacity-25 cursor-default" : "hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"}`}
      >
        <ChevronUp className="w-[18px] h-[18px] text-white" />
      </button>
      <button
        aria-label="Scroll down"
        disabled={atBottom}
        onClick={() => goTo(Math.min(sectionIds.length - 1, index + 1))}
        className={`w-11 h-11 md:w-12 md:h-12 rounded-full border border-border bg-[rgba(20,20,20,0.7)]
          flex items-center justify-center transition-all duration-250
          ${atBottom ? "opacity-25 cursor-default" : "hover:bg-white/10 hover:scale-110 hover:shadow-[0_0_24px_rgba(255,255,255,0.15)]"}`}
      >
        <ChevronDown className="w-[18px] h-[18px] text-white" />
      </button>
    </div>
  );
}
